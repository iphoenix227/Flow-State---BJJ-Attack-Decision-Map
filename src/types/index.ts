export type GiRuleset = "gi" | "no_gi";
export type SkillLevel = "White" | "Blue" | "Purple" | "Brown" | "Black";
export type PriorityLevel = "A-game" | "Common" | "Optional";

export interface AppFilters {
  gi: GiRuleset[];
  skills: SkillLevel[];
  priorities: PriorityLevel[];
  chains: string[];
}
