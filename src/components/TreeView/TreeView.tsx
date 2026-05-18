import { useMemo, useCallback, useEffect, useState, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  MarkerType,
  Position,
  ReactFlowProvider,
  useReactFlow,
} from "reactflow";
import "reactflow/dist/style.css";
import { Undo2 } from "lucide-react";
import { useAppStore } from "@/store/useAppStore";
import {
  attackingMap,
  positionMap,
  matchesFilters,
  rowsForPosition,
  isMistakeReaction,
  countResponsesForRows,
} from "@/lib/bjj";
import {
  PositionNode,
  ActionNode,
  ResponseNode,
  FollowupNode,
  TerminalNode,
} from "./CustomNodes";

const nodeTypes = {
  position: PositionNode,
  action: ActionNode,
  response: ResponseNode,
  followup: FollowupNode,
  terminal: TerminalNode,
};

const TreeViewInner = () => {
  const isMobile = useIsMobile();
  const positionId = useAppStore((s) => s.positionId);
  const filters = useAppStore((s) => s.filters);
  const showMistakeReactions = useAppStore((s) => s.showMistakeReactions);
  const mistakesOnly = useAppStore((s) => s.mistakesOnly);
  const setSelectedNodeId = useAppStore((s) => s.setSelectedNodeId);
  const pendingExpandAction = useAppStore((s) => s.pendingExpandAction);
  const setPendingExpandAction = useAppStore((s) => s.setPendingExpandAction);

  const [expandedActions, setExpandedActions] = useState<Set<string>>(
    new Set(),
  );
  const [expandedResponses, setExpandedResponses] = useState<Set<string>>(
    new Set(),
  );
  const [pulseActionId, setPulseActionId] = useState<string | null>(null);
  const rf = useReactFlow();
  const fitTimer = useRef<any>(null);

  // Reset expansion on position change
  useEffect(() => {
    setExpandedActions(new Set());
    setExpandedResponses(new Set());
  }, [positionId]);

  // Filter rows by position (handles both prefix-matched and start_position-fallback nodes)
  const positionRows = useMemo(() => rowsForPosition(positionId), [positionId]);

  const hasActiveFilters =
    filters.gi.length > 0 ||
    filters.skills.length > 0 ||
    filters.priorities.length > 0 ||
    filters.chains.length > 0;

  const reactionOpts = useMemo(
    () => ({ showMistakes: showMistakeReactions, mistakesOnly }),
    [showMistakeReactions, mistakesOnly],
  );

  const actionGroups = useMemo(() => {
    const m = new Map<
      string,
      { rows: typeof attackingMap; counts: ReturnType<typeof countResponsesForRows> }
    >();
    const filtered = hasActiveFilters
      ? positionRows.filter((r) => matchesFilters(r, filters))
      : positionRows;

    const byAction = new Map<string, typeof attackingMap>();
    filtered.forEach((r) => {
      const k = String(r.parent_action_id || r.from_node_id || r.node_id);
      if (!byAction.has(k)) byAction.set(k, []);
      byAction.get(k)!.push(r);
    });

    byAction.forEach((allRows, k) => {
      const counts = countResponsesForRows(allRows, reactionOpts);
      const rows = allRows.filter((r) => {
        if (mistakesOnly) return isMistakeReaction(r);
        if (!showMistakeReactions && isMistakeReaction(r)) return false;
        return true;
      });
      if (rows.length === 0) return;
      m.set(k, { rows, counts });
    });
    return m;
  }, [positionRows, hasActiveFilters, filters, reactionOpts, showMistakeReactions, mistakesOnly]);

  const { nodes, edges } = useMemo(() => {
    const nodes: any[] = [];
    const edges: any[] = [];
    const pos = positionMap[positionId];
    if (!pos) return { nodes, edges };

    nodes.push({
      id: positionId,
      type: "position",
      position: { x: 0, y: 0 },
      data: { label: pos.position_name, family: pos.position_family },
      sourcePosition: Position.Right,
    });

    const actions = Array.from(actionGroups.entries());
    const ACTION_X = 320;
    const RESPONSE_X = 680;
    const FOLLOWUP_X = 1060;
    const ROW_H = 110;

    let yCursor = -((actions.length - 1) / 2) * ROW_H * 1.6;

    actions.forEach(([actionKey, { rows, counts }]) => {
      const sample = rows[0];
      const actionId = `action-${actionKey}`;
      const isExpanded = expandedActions.has(actionId);
      const numResponses = rows.length;
      const blockHeight = isExpanded
        ? Math.max(ROW_H, numResponses * ROW_H)
        : ROW_H;
      const aY = yCursor + blockHeight / 2 - ROW_H / 2;

      nodes.push({
        id: actionId,
        type: "action",
        position: { x: ACTION_X, y: aY },
        data: {
          label: sample.your_action,
          priorityRank: sample.priority_rank,
          energy: sample.energy_cost,
          dim: false,
          matched: true,
          expanded: isExpanded,
          pulse: pulseActionId === actionId,
          rowIds: rows.map((r) => String(r.node_id)),
          responseCounts: counts,
        },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
      });

      edges.push({
        id: `e-pos-${actionId}`,
        source: positionId,
        target: actionId,
        animated: true,
        style: {
          stroke: "hsl(var(--gold))",
          strokeDasharray: "5 5",
          opacity: 0.9,
        },
        markerEnd: { type: MarkerType.ArrowClosed, color: "hsl(var(--gold))" },
      });

      if (isExpanded) {
        rows.forEach((r, rIdx) => {
          const respId = `resp-${r.node_id}`;
          const fupId = `fup-${r.node_id}`;
          const rY = yCursor + rIdx * ROW_H;
          const respExpanded = expandedResponses.has(respId);

          nodes.push({
            id: respId,
            type: "response",
            position: { x: RESPONSE_X, y: rY },
            data: {
              label: r.partner_response || "(no response)",
              reactionType: r.partner_reaction_type || "correct",
              dim: false,
              matched: true,
              expanded: respExpanded,
              priorityRank: r.priority_rank,
              rowId: String(r.node_id),
            },
            sourcePosition: Position.Right,
            targetPosition: Position.Left,
          });

          const isMistake = r.partner_reaction_type === "mistake";
          const respColor = isMistake
            ? "hsl(var(--response-mistake))"
            : "hsl(var(--response))";
          edges.push({
            id: `e-${actionId}-${respId}`,
            source: actionId,
            target: respId,
            style: {
              stroke: respColor,
              opacity: 0.9,
            },
            markerEnd: {
              type: MarkerType.ArrowClosed,
              color: respColor,
            },
          });

          if (respExpanded) {
            const terminal = String(r.is_terminal).toLowerCase() === "yes";
            nodes.push({
              id: fupId,
              type: terminal ? "terminal" : "followup",
              position: { x: FOLLOWUP_X, y: rY },
              data: {
                label: r.follow_up || r.end_position || "Outcome",
                end: r.end_position,
                outcome: r.outcome_type,
                terminal,
                nextNodeId: String(r.next_node_id || ""),
                energy: r.energy_cost,
                dim: false,
                matched: true,
                rowId: String(r.node_id),
              },
              targetPosition: Position.Left,
            });

            edges.push({
              id: `e-${respId}-${fupId}`,
              source: respId,
              target: fupId,
              style: {
                stroke: terminal
                  ? "hsl(var(--terminal))"
                  : "hsl(var(--followup))",
                opacity: 0.95,
              },
              markerEnd: {
                type: MarkerType.ArrowClosed,
                color: terminal
                  ? "hsl(var(--terminal))"
                  : "hsl(var(--followup))",
              },
            });
          }
        });
      }

      yCursor += blockHeight + 30;
    });

    return { nodes, edges };
  }, [
    positionId,
    actionGroups,
    expandedActions,
    expandedResponses,
    filters,
    showMistakeReactions,
    mistakesOnly,
    pulseActionId,
  ]);

  // Handle pending chain navigation: auto-expand target action + pulse + center.
  useEffect(() => {
    if (!pendingExpandAction) return;
    // Wait for new positionId rows to be loaded.
    const exists = Array.from(actionGroups.keys()).some(
      (k) => `action-${k}` === pendingExpandAction,
    );
    if (!exists) return;
    setExpandedActions((prev) => {
      const n = new Set(prev);
      n.add(pendingExpandAction);
      return n;
    });
    setPulseActionId(pendingExpandAction);
    const tid = pendingExpandAction;
    setPendingExpandAction(null);
    const t1 = setTimeout(() => {
      try {
        rf.fitView({
          nodes: [{ id: tid }],
          padding: 0.4,
          duration: 600,
          maxZoom: 1.2,
        });
      } catch {}
    }, 200);
    const t2 = setTimeout(
      () => setPulseActionId((p) => (p === tid ? null : p)),
      2200,
    );
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [pendingExpandAction, actionGroups, rf, setPendingExpandAction]);

  const [rfNodes, setRfNodes, onNodesChange] = useNodesState(nodes);
  const [rfEdges, setRfEdges, onEdgesChange] = useEdgesState(edges);

  useEffect(() => {
    setRfNodes(nodes);
  }, [nodes, setRfNodes]);
  useEffect(() => {
    setRfEdges(edges);
  }, [edges, setRfEdges]);

  // Fit view after expansion changes
  useEffect(() => {
    clearTimeout(fitTimer.current);
    fitTimer.current = setTimeout(() => {
      try {
        rf.fitView({ padding: 0.2, duration: 400 });
      } catch {}
    }, 80);
  }, [expandedActions, expandedResponses, positionId, rf]);

  const onNodeClick = useCallback(
    (_: any, node: any) => {
      if (node.type === "action") {
        setExpandedActions((prev) => {
          const n = new Set(prev);
          n.has(node.id) ? n.delete(node.id) : n.add(node.id);
          return n;
        });
      } else if (node.type === "response") {
        setExpandedResponses((prev) => {
          const n = new Set(prev);
          n.has(node.id) ? n.delete(node.id) : n.add(node.id);
          return n;
        });
      }
      const rid = node.data?.rowId || node.data?.rowIds?.[0];
      if (rid) setSelectedNodeId(rid);
    },
    [setSelectedNodeId],
  );

  const collapseAll = () => {
    setExpandedActions(new Set());
    setExpandedResponses(new Set());
  };

  return (
    <div className="w-full h-full bg-background relative">
      <div className="absolute top-3 right-3 z-10 flex gap-2">
        <button
          onClick={collapseAll}
          title="Collapse all"
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded border border-border bg-card/80 backdrop-blur text-[10px] uppercase tracking-wider text-muted-foreground hover:text-gold hover:border-gold/60 transition-colors"
        >
          <Undo2 size={12} /> Collapse All
        </button>
      </div>
      <ReactFlow
        nodes={rfNodes}
        edges={rfEdges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
        nodesDraggable={!isMobile}
        nodesConnectable={false}
        elementsSelectable
        panOnDrag
        panOnScroll={false}
        zoomOnPinch
        zoomOnDoubleClick={false}
        fitView
        minZoom={0.15}
        maxZoom={isMobile ? 1.4 : 1.6}
        proOptions={{ hideAttribution: true }}
      >
        <Background color="hsl(var(--border))" gap={24} size={1} />
        <Controls
          className="!bg-card !border !border-border"
          showInteractive={!isMobile}
        />
        {!isMobile && (
          <MiniMap
            nodeColor={(n) => {
              if (n.type === "position") return "hsl(var(--gold))";
              if (n.type === "action") return "hsl(var(--action))";
              if (n.type === "response") return "hsl(var(--response))";
              if (n.type === "terminal") return "hsl(var(--terminal))";
              return "hsl(var(--followup))";
            }}
            maskColor="hsl(0 0% 0% / 0.6)"
            pannable
            zoomable
          />
        )}
      </ReactFlow>
    </div>
  );
};

export const TreeView = () => (
  <ReactFlowProvider>
    <TreeViewInner />
  </ReactFlowProvider>
);
