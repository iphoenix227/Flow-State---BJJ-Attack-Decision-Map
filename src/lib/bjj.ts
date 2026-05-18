import { attackingMap as coreAttackingMap } from "@/data/attackingMap";
import { allLevelsReactionExtensions } from "@/data/allLevelsReactionExtensions";
import { blackBeltReactionExtensions } from "@/data/blackBeltReactionExtensions";
import { blueBeltReactionExtensions } from "@/data/blueBeltReactionExtensions";
import { brownBeltReactionExtensions } from "@/data/brownBeltReactionExtensions";
import { purpleBeltReactionExtensions } from "@/data/purpleBeltReactionExtensions";
import { whiteBeltReactionExtensions } from "@/data/whiteBeltReactionExtensions";
import { positions } from "@/data/positions";
import type { AppFilters } from "@/types";

export const attackingMap = [
  ...coreAttackingMap,
  ...allLevelsReactionExtensions,
  ...whiteBeltReactionExtensions,
  ...blueBeltReactionExtensions,
  ...purpleBeltReactionExtensions,
  ...brownBeltReactionExtensions,
  ...blackBeltReactionExtensions,
];

export type Row = (typeof attackingMap)[number];

/** Unique attack actions (parent_action_id) across the full map. */
export const attackActionCount = new Set(
  attackingMap.map((r) =>
    String(r.parent_action_id || r.from_node_id || "").trim(),
  ),
).size;

/** Total partner-response branches, including mistakes. */
export const partnerResponseCount = attackingMap.length;

export const isMistakeReaction = (r: Row) =>
  String(r.partner_reaction_type || "").toLowerCase() === "mistake";

export type ActionResponseCounts = {
  visible: number;
  correct: number;
  mistakes: number;
  hiddenMistakes: number;
};

export function countResponsesForRows(
  rows: Row[],
  opts: { showMistakes: boolean; mistakesOnly: boolean },
): ActionResponseCounts {
  const correct = rows.filter((r) => !isMistakeReaction(r)).length;
  const mistakes = rows.length - correct;
  const hiddenMistakes = opts.showMistakes || opts.mistakesOnly ? 0 : mistakes;
  let visible = rows.length - hiddenMistakes;
  if (opts.mistakesOnly) visible = mistakes;
  else if (!opts.showMistakes) visible = correct;
  return { visible, correct, mistakes, hiddenMistakes };
}

export const positionMap = Object.fromEntries(
  positions.map((p) => [p.position_id, p]),
);

// Reverse map: position_name (lowercase) → position_id, used to resolve start_position fallback.
// Also includes common aliases where data uses a shorter form of the name.
const positionByName: Record<string, string> = {
  ...Object.fromEntries(
    positions.map((p) => [
      String(p.position_name || "").toLowerCase(),
      p.position_id,
    ]),
  ),
  // Aliases for data that abbreviates position names
  "inside sankaku": "LE-SANKAKU",
};

export const allChainFamilies = Array.from(
  new Set(
    attackingMap
      .map((r) => String(r.chain_family || "").trim())
      .filter(Boolean),
  ),
).sort();

// Derive prefix from a position root id ("CG-ROOT" -> "CG") or from any from_node_id ("CG-A-arm-drag" -> "CG").
export function prefixOf(id: string): string {
  return String(id || "").split("-")[0];
}

export function rowsForPosition(positionId: string): Row[] {
  const px = prefixOf(positionId);
  return attackingMap.filter((r) => {
    // Cross-position techniques (position_family: "any") appear in every tree.
    if (String(r.position_family || "") === "any") return true;
    const fromPrefix = prefixOf(String(r.from_node_id));
    if (fromPrefix === px) return true;
    // Fallback for NG-prefixed nodes: match by the start_position name field.
    const resolvedId =
      positionByName[String(r.start_position || "").toLowerCase()];
    return resolvedId === positionId;
  });
}

export function positionProgress(
  positionId: string,
  drilled: Record<string, any>,
) {
  const rows = rowsForPosition(positionId);
  const total = rows.length;
  const done = rows.filter((r) => !!drilled[String(r.node_id)]).length;
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);
  return { done, total, pct };
}

// Map UI priority labels to data values.
const PRIORITY_MAP: Record<string, string> = {
  "A-game": "High",
  Common: "Medium",
  Optional: "Low",
};

export function matchesFilters(r: Row, f: AppFilters): boolean {
  const g = String(r.gi_no_gi || "")
    .toLowerCase()
    .replace(/[\s-]/g, "_");
  if (f.gi.length > 0) {
    const ok = f.gi.some((sel) =>
      sel === "gi"
        ? g === "gi" || g === "both"
        : g === "no_gi" || g === "both",
    );
    if (!ok) return false;
  }

  if (f.skills.length > 0) {
    const sk = String(r.skill_level || "");
    if (!f.skills.includes(sk as (typeof f.skills)[number]) && sk.toLowerCase() !== "both")
      return false;
  }

  if (f.priorities.length > 0) {
    const rowPri = String(r.priority || "");
    const ok = f.priorities.some(
      (p) => rowPri === (PRIORITY_MAP[p] || p),
    );
    if (!ok) return false;
  }

  if (f.chains.length > 0) {
    if (!f.chains.includes(String(r.chain_family || ""))) return false;
  }
  return true;
}

export function energyColor(e: string): string {
  const v = String(e || "").toLowerCase();
  if (v.includes("low")) return "hsl(142 60% 45%)";
  if (v.includes("high")) return "hsl(0 75% 55%)";
  return "hsl(45 90% 55%)";
}

export function isRoot(id: string) {
  return /-ROOT$/.test(String(id));
}

// Resolve a `next_node_id` value to a navigation target (position to open + optional
// action to auto-expand and pulse). Returns null for terminal anchors and unknown ids.
export interface ChainTarget {
  positionId: string;
  positionName: string;
  expandActionId?: string; // e.g. "action-ST-A-single-leg-takedown"
  label: string; // button label, without arrow
}
export function resolveChainTarget(nextNodeId: any): ChainTarget | null {
  const id = String(nextNodeId || "").trim();
  if (!id) return null;
  if (/^TERM[-_]/i.test(id)) return null;

  // Subtree anchors
  const anchors: Record<
    string,
    { pos: string; action: string; label: string }
  > = {
    "ST-SINGLE-LEG": {
      pos: "ST-ROOT",
      action: "ST-A-single-leg-takedown",
      label: "Attack Single Leg",
    },
    "FH-TURTLE": {
      pos: "FH-ROOT",
      action: "FH-A-spin-behind",
      label: "Spin Behind to Back",
    },
    "HGB-DOGFIGHT": {
      pos: "HGB-ROOT",
      action: "HGB-A-dogfight",
      label: "Hit the Dogfight",
    },
    "TOP-CONTROL-ROOT": {
      pos: "SC-ROOT",
      action: "",
      label: "Continue to Top Control",
    },
  };
  if (anchors[id]) {
    const a = anchors[id];
    const p = positionMap[a.pos];
    return {
      positionId: a.pos,
      positionName: p?.position_name || a.pos,
      expandActionId: a.action ? `action-${a.action}` : undefined,
      label: a.label,
    };
  }

  if (isRoot(id) && positionMap[id]) {
    return {
      positionId: id,
      positionName: positionMap[id].position_name,
      label: `Continue to ${positionMap[id].position_name}`,
    };
  }
  return null;
}

export function searchRows(query: string): Row[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return attackingMap
    .filter((r) =>
      [
        r.your_action,
        r.partner_response,
        r.follow_up,
        r.notes,
        r.key_details,
      ].some((v) =>
        String(v || "")
          .toLowerCase()
          .includes(q),
      ),
    )
    .slice(0, 20);
}

export function findPositionIdForRow(r: Row): string {
  const startPosition = String(r.start_position || "").toLowerCase();
  const resolvedFromStart = positionByName[startPosition];
  if (resolvedFromStart) return resolvedFromStart;

  const nextId = String(r.next_node_id || "").trim();
  if (nextId && positionMap[nextId]) return nextId;

  const px = prefixOf(String(r.from_node_id));
  const match = positions.find((p) => prefixOf(p.position_id) === px);
  return match?.position_id || "CG-ROOT";
}
