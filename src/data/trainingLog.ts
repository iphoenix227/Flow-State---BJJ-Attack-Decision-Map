export interface TrainingLogEntry {
  [k: string]: any;
}

export const trainingLog: TrainingLogEntry[] = [
  {
    date: "2026-05-12",
    partner: "Jane Smith",
    position_context: "Closed guard bottom",
    node_id: "CG-001",
    your_action: "Hip bump sweep",
    partner_response: "Partner posts hand",
    follow_up: "Kimura",
    what_happened: "Got kimura grip but lost finish on angle",
    result: "Fail (partial)",
    rating_1_to_5: 3.0,
    partner_level: "blue",
    gi_no_gi: "No-gi",
    notes: "Need 45-degree angle earlier",
  },
  {
    date: "2026-05-12",
    partner: "Jane Smith",
    position_context: "Half guard bottom",
    node_id: "HGB-001",
    your_action: "Knee shield to underhook",
    partner_response: "Partner gives underhook",
    follow_up: "Come to dogfight",
    what_happened: "Underhook deep, came up clean",
    result: "Success",
    rating_1_to_5: 5.0,
    partner_level: "purple",
    gi_no_gi: "Gi",
    notes: "Old-school sweep felt automatic",
  },
  {
    date: null,
    partner: null,
    position_context: null,
    node_id: null,
    your_action: null,
    partner_response: null,
    follow_up: null,
    what_happened: null,
    result: null,
    rating_1_to_5: null,
    partner_level: null,
    gi_no_gi: null,
    notes: null,
  },
];

export const seedTrainingLog = trainingLog;
