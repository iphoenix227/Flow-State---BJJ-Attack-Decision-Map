import type { AttackingNode } from "./attackingMap";

export type ReactionExtensionInput = {
  id: string;
  parent: string;
  family: string;
  action: string;
  position: string;
  role: string;
  response: string;
  followUp: string;
  endPosition: string;
  outcome: string;
  skill: "White" | "Blue" | "Purple" | "Brown" | "Black" | "Both";
  type: "correct" | "mistake";
  chain: string;
  notes: string;
  keyDetails: string;
  reactionTag: string;
  gi?: string;
  priority?: "High" | "Medium" | "Low";
  next?: string | null;
  terminal?: "Yes" | "No";
  sortOrder?: number;
  success?: string;
  failure?: string;
  energy?: string;
  gripTags?: string;
  conceptTags?: string;
};

export const reactionRow = (i: ReactionExtensionInput): AttackingNode => ({
  node_id: i.id,
  from_node_id: i.parent,
  parent_action_id: i.parent,
  next_node_id: i.next ?? null,
  position_family: i.family,
  is_terminal: i.terminal ?? "No",
  edge_label: `${i.response} → ${i.followUp}`,
  sort_order: i.sortOrder ?? 10,
  priority_rank: 2,
  start_position: i.position,
  role: i.role,
  your_action: i.action,
  partner_response: i.response,
  follow_up: i.followUp,
  end_position: i.endPosition,
  outcome_type: i.outcome,
  success_condition: i.success ?? "Timing and connection maintained",
  failure_risk: i.failure ?? "Position lost on misread",
  gi_no_gi: i.gi ?? "Both",
  skill_level: i.skill,
  priority: i.priority ?? "Medium",
  partner_reaction_type: i.type,
  notes: i.notes,
  key_details: i.keyDetails,
  common_mistakes: "",
  concept_tags: i.conceptTags ?? "timing;connection",
  chain_family: i.chain,
  energy_cost: i.energy ?? "Medium",
  video_ref_slot: `VID-${i.id}`,
  counter_if_fails: "Reset and re-attack",
  reaction_tags: i.reactionTag,
  grip_tags: i.gripTags ?? "G-NONE",
});
