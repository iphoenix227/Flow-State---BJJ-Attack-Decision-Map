import { useMemo } from "react";
import ReactFlow, {
  Background,
  Controls,
  MarkerType,
  Position,
  Handle,
} from "reactflow";
import { positions } from "@/data/positions";
import { useAppStore } from "@/store/useAppStore";
import { positionProgress } from "@/lib/bjj";

const OverviewPositionNode = ({ data }: any) => {
  const drilledNodes = useAppStore((s) => s.drilledNodes);
  const { done, total, pct } = positionProgress(data.id, drilledNodes);
  return (
    <div
      onClick={() => data.onClick?.()}
      title={`Click to open ${data.label} tree`}
      className={`px-5 py-3 rounded-xl border-2 bg-gradient-to-br from-card to-background min-w-[180px] text-center cursor-pointer transition-all hover:scale-105 hover:shadow-[0_0_24px_hsl(var(--gold)/0.6)] ${
        data.isEntry
          ? "border-gold animate-pulse shadow-[0_0_24px_hsl(var(--gold)/0.5)]"
          : "border-gold/60 hover:border-gold"
      }`}
    >
      <Handle
        type="target"
        position={Position.Left}
        className="!bg-gold !border-0 !w-2 !h-2 !opacity-0"
      />
      <div className="text-[10px] uppercase tracking-widest text-gold/70 pointer-events-none">
        {data.isEntry ? "▶ Start of Round" : "Position"}
      </div>
      <div className="font-display text-lg text-foreground pointer-events-none">
        {data.label}
      </div>
      {total > 0 && (
        <div className="mt-1 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-background/60 border border-gold/30 text-[10px] pointer-events-none">
          <span className={pct === 100 ? "text-followup" : "text-gold"}>
            {done}/{total}
          </span>
          <span className="text-muted-foreground">·</span>
          <span className="text-muted-foreground">{pct}%</span>
        </div>
      )}
      <Handle
        type="source"
        position={Position.Right}
        className="!bg-gold !border-0 !w-2 !h-2 !opacity-0"
      />
    </div>
  );
};

const nodeTypes = { overviewPosition: OverviewPositionNode };

export const PositionMapOverview = () => {
  const setPositionId = useAppStore((s) => s.setPositionId);
  const setView = useAppStore((s) => s.setView);

  const navigateToPosition = (id: string) => {
    setPositionId(id);
    setView("tree");
  };

  const { nodes, edges } = useMemo(() => {
    const familyOrder: Record<string, number> = {
      standing: 0,
      guard_bottom: 1,
      passing_top: 2,
      pin_top: 3,
      back_control: 4,
      front_headlock: 5,
      turtle: 6,
      leg_entanglement: 7,
    };
    const byFam: Record<string, typeof positions> = {};
    positions.forEach((p) => {
      (byFam[p.position_family] ||= []).push(p);
    });

    const nodes: any[] = [];
    let yIdx = 0;
    Object.entries(byFam)
      .sort((a, b) => (familyOrder[a[0]] ?? 99) - (familyOrder[b[0]] ?? 99))
      .forEach(([, list]) => {
        list.forEach((p, i) => {
          nodes.push({
            id: p.position_id,
            type: "overviewPosition",
            position: { x: yIdx * 280, y: i * 130 },
            data: {
              id: p.position_id,
              label: p.position_name,
              isEntry: p.position_id === "ST-ROOT",
              onClick: () => navigateToPosition(p.position_id),
            },
            sourcePosition: Position.Right,
            targetPosition: Position.Left,
          });
        });
        yIdx++;
      });

    const edges: any[] = [];
    const link = (a: string, b: string) => ({
      id: `${a}-${b}`,
      source: a,
      target: b,
      style: { stroke: "hsl(var(--gold))", strokeWidth: 1.5, opacity: 0.5 },
      markerEnd: { type: MarkerType.ArrowClosed, color: "hsl(var(--gold))" },
      animated: true,
    });
    edges.push(link("ST-ROOT", "CG-ROOT"));
    edges.push(link("ST-ROOT", "OG-ROOT"));
    edges.push(link("ST-ROOT", "FH-ROOT"));
    edges.push(link("CG-ROOT", "HGB-ROOT"));
    edges.push(link("OG-ROOT", "HGB-ROOT"));
    edges.push(link("OG-ROOT", "OG-XGUARD"));
    edges.push(link("OG-ROOT", "OG-BUTTERFLY"));
    edges.push(link("OG-ROOT", "LE-ROOT"));
    edges.push(link("HGB-ROOT", "HGT-ROOT"));
    edges.push(link("HGT-ROOT", "SC-ROOT"));
    edges.push(link("SC-ROOT", "MT-ROOT"));
    edges.push(link("MT-ROOT", "BK-ROOT"));
    edges.push(link("FH-ROOT", "BK-ROOT"));
    edges.push(link("FH-ROOT", "TUR-ROOT"));
    edges.push(link("TUR-ROOT", "BK-ROOT"));
    edges.push(link("LE-ROOT", "LE-ASHI"));
    edges.push(link("LE-ASHI", "LE-5050"));
    edges.push(link("LE-5050", "LE-SANKAKU"));
    return { nodes, edges };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full h-full bg-background relative">
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-card/90 backdrop-blur border border-border rounded-md px-4 py-2 pointer-events-none">
        <div className="font-display text-sm text-gold">
          Position Map · Click any position to open its tree
        </div>
      </div>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        proOptions={{ hideAttribution: true }}
        onNodeClick={(_, n) => navigateToPosition(n.id)}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable
      >
        <Background color="hsl(var(--border))" gap={24} size={1} />
        <Controls className="!bg-card !border !border-border" />
      </ReactFlow>
    </div>
  );
};
