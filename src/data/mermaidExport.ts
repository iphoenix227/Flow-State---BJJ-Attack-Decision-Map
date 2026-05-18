export interface MermaidExport { [k: string]: any }

export const mermaidExport: MermaidExport[] = [
  {
    "tree_name": "Overview Position Graph",
    "starting_position": "All",
    "instructions": "High-level map.",
    "mermaid_code": "flowchart TD"
  },
  {
    "tree_name": "SELF([\"You / Start of Round\"])",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "STAND[\"Standing / Neutral\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG[\"Closed Guard\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG[\"Open Guard\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGB[\"Half Guard Bottom\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGT[\"Top Half Guard\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "SC[\"Side Control Top\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "MT[\"Mount Top\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BK[\"Back Control\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "FH[\"Front Headlock\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "TUR[\"Turtle\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "LE[\"Leg Entanglement\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "SELF --> STAND",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "STAND --> CG",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "STAND --> HGT",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "STAND --> FH",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG --> MT",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG --> BK",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG --> HGT",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG --> STAND",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG --> LE",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGB --> HGT",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGB --> BK",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGB --> LE",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGT --> SC",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "SC --> MT",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "SC --> BK",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "MT --> BK",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "FH --> BK",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "FH --> SC",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BK --> MT",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "LE --> OG",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "Standing / Neutral Attacking Tree",
    "starting_position": "Standing / Neutral",
    "instructions": "Paste into mermaid-compatible renderer.",
    "mermaid_code": "flowchart TD"
  },
  {
    "tree_name": "ST([\"Standing / Neutral\"])",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST_ACT_1[\"Single leg takedown\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST --> ST_ACT_1",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST-001_R{\"Partner balance compromised / leg captured\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST-001_F[\"Run the pipe → Top half guard or side control\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST_ACT_1 -- \"Partner balance compromised \" --> ST-001_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST-001_R --> ST-001_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST-002_R{\"Partner sprawls\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST-002_F[\"Switch to double or cut corner → Top position or scramble\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST_ACT_1 -- \"Partner sprawls\" --> ST-002_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST-002_R --> ST-002_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST-003_R{\"Partner applies strong whizzer\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST-003_F[\"Shelf leg and run the pipe → Top half guard\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST_ACT_1 -- \"Partner applies strong whizz\" --> ST-003_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST-003_R --> ST-003_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST-004_R{\"Partner hops on one foot\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST-004_F[\"Trip the far leg → Top position\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST_ACT_1 -- \"Partner hops on one foot\" --> ST-004_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST-004_R --> ST-004_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST_ACT_2[\"Double leg takedown\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST --> ST_ACT_2",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST-005_R{\"Partner sprawls\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST-005_F[\"Come up to single leg → Standing single-leg chain\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST_ACT_2 -- \"Partner sprawls\" --> ST-005_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST-005_R --> ST-005_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST-006_R{\"Partner stays upright\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST-006_F[\"Drive through to finish → Top half guard or side control\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST_ACT_2 -- \"Partner stays upright\" --> ST-006_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST-006_R --> ST-006_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST_ACT_3[\"Snapdown\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST --> ST_ACT_3",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST-007_R{\"Partner posts hands on mat\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST-007_F[\"Front headlock → Front headlock top\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST_ACT_3 -- \"Partner posts hands on mat\" --> ST-007_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST-007_R --> ST-007_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST-008_R{\"Partner resists by standing tall\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST-008_F[\"Attack single leg → Single-leg position\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST_ACT_3 -- \"Partner resists by standing \" --> ST-008_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST-008_R --> ST-008_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST_ACT_4[\"Arm drag\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST --> ST_ACT_4",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST-009_R{\"Partner steps forward\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST-009_F[\"Attack single leg → Single-leg position\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST_ACT_4 -- \"Partner steps forward\" --> ST-009_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST-009_R --> ST-009_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST-010_R{\"Partner over-rotates\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST-010_F[\"Back take standing → Back control\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST_ACT_4 -- \"Partner over-rotates\" --> ST-010_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST-010_R --> ST-010_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST_ACT_5[\"Ankle pick\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST --> ST_ACT_5",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST-011_R{\"Partner weight on target foot\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST-011_F[\"Pick ankle and drive → Top position\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST_ACT_5 -- \"Partner weight on target foo\" --> ST-011_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST-011_R --> ST-011_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST_ACT_6[\"Guard pull\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST --> ST_ACT_6",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST-012_R{\"Partner follows to knees\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST-012_F[\"Establish closed guard → Closed guard bottom\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST_ACT_6 -- \"Partner follows to knees\" --> ST-012_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST-012_R --> ST-012_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST-013_R{\"Partner stays standing\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST-013_F[\"Establish open guard grips → Open guard bottom\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST_ACT_6 -- \"Partner stays standing\" --> ST-013_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST-013_R --> ST-013_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_7[\"Foot sweep (ko-uchi/ouchi)\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST --> PG_ACT_7",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-TD-001_R{\"Partner weight on lead foot\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-TD-001_F[\"Reap foot inward/outward → Top position\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_7 -- \"Partner weight on lead foot\" --> PG-TD-001_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-TD-001_R --> PG-TD-001_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_8[\"Uchi mata\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST --> PG_ACT_8",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-TD-002_R{\"Partner upright; hips square\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-TD-002_F[\"Load inside leg; rotate → Top position\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_8 -- \"Partner upright; hips square\" --> PG-TD-002_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-TD-002_R --> PG-TD-002_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_9[\"High crotch\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST --> PG_ACT_9",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-WRE-001_R{\"Partner over-square\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-WRE-001_F[\"Lift and finish → Top side control\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_9 -- \"Partner over-square\" --> PG-WRE-001_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-WRE-001_R --> PG-WRE-001_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG_ACT_10[\"Grip fighting priority system\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST --> BG_ACT_10",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG-BLK-005_R{\"Partner establishes grip\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG-BLK-005_F[\"Strip and impose own grip → Grip advantage\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG_ACT_10 -- \"Partner establishes grip\" --> BG-BLK-005_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG-BLK-005_R --> BG-BLK-005_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_11[\"Russian 2-on-1\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST --> NG_ACT_11",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-ST-001_R{\"Opponent passive in tie-up\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-ST-001_F[\"Drag to back or set up single → Back control or single leg\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_11 -- \"Opponent passive in tie-up\" --> NG-ST-001_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-ST-001_R --> NG-ST-001_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_12[\"Collar tie + inside bicep tie\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST --> NG_ACT_12",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-ST-002_R{\"Opponent pressures forward\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-ST-002_F[\"Snapdown to front headlock → Front headlock top\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_12 -- \"Opponent pressures forward\" --> NG-ST-002_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-ST-002_R --> NG-ST-002_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_13[\"Body lock\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST --> NG_ACT_13",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-ST-003_R{\"Opponent short-hips away\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-ST-003_F[\"Trip rear leg → Top mount or side\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_13 -- \"Opponent short-hips away\" --> NG-ST-003_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-ST-003_R --> NG-ST-003_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_14[\"Ankle pick no-gi\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST --> NG_ACT_14",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-ST-004_R{\"Opponent loads lead foot\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-ST-004_F[\"Pick ankle + collar pull → Top position\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_14 -- \"Opponent loads lead foot\" --> NG-ST-004_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-ST-004_R --> NG-ST-004_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_15[\"Duck under\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST --> NG_ACT_15",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-ST-005_R{\"Opponent extends arm\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-ST-005_F[\"Slip under arm to back → Back control standing\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_15 -- \"Opponent extends arm\" --> NG-ST-005_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-ST-005_R --> NG-ST-005_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_16[\"Double leg\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST --> NG_ACT_16",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-ST-006_R{\"Opponent stays upright\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-ST-006_F[\"Drive through → Top position\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_16 -- \"Opponent stays upright\" --> NG-ST-006_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-ST-006_R --> NG-ST-006_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-ST-007_R{\"Opponent square stance\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-ST-007_F[\"Drop into high crotch → Top position\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_9 -- \"Opponent square stance\" --> NG-ST-007_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-ST-007_R --> NG-ST-007_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_17[\"Snapdown + spin\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST --> NG_ACT_17",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-ST-008_R{\"Opponent posts hands\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-ST-008_F[\"Snap and spin to back → Back control\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_17 -- \"Opponent posts hands\" --> NG-ST-008_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-ST-008_R --> NG-ST-008_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-ST-009_R{\"Opponent reaches\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-ST-009_F[\"Drag to back or single → Back control or single\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST_ACT_4 -- \"Opponent reaches\" --> NG-ST-009_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-ST-009_R --> NG-ST-009_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_18[\"Front headlock to go-behind\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ST --> NG_ACT_18",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-ST-010_R{\"Opponent heavy on head\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-ST-010_F[\"Circle to back → Back or turtle top\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_18 -- \"Opponent heavy on head\" --> NG-ST-010_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-ST-010_R --> NG-ST-010_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "Closed guard Attacking Tree",
    "starting_position": "Closed guard",
    "instructions": "Paste into mermaid-compatible renderer.",
    "mermaid_code": "flowchart TD"
  },
  {
    "tree_name": "CG([\"Closed guard\"])",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG_ACT_1[\"Hip bump sweep\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG --> CG_ACT_1",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG-001_R{\"Partner posts hand\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG-001_F[\"Kimura → Closed guard attack\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG_ACT_1 -- \"Partner posts hand\" --> CG-001_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG-001_R --> CG-001_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG-002_R{\"Partner drives forward\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG-002_F[\"Guillotine → Closed guard attack\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG_ACT_1 -- \"Partner drives forward\" --> CG-002_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG-002_R --> CG-002_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG-003_R{\"Partner does not post\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG-003_F[\"Complete hip bump sweep → Mount top\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG_ACT_1 -- \"Partner does not post\" --> CG-003_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG-003_R --> CG-003_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG_ACT_2[\"Kimura grip\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG --> CG_ACT_2",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG-004_R{\"Partner hides hand\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG-004_F[\"Hip bump sweep → Mount top\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG_ACT_2 -- \"Partner hides hand\" --> CG-004_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG-004_R --> CG-004_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG-005_R{\"Partner straightens arm\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG-005_F([\"Armbar → Armbar position\"])",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG_ACT_2 -- \"Partner straightens arm\" --> CG-005_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG-005_R --> CG-005_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG_ACT_3[\"Cross-collar choke\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG --> CG_ACT_3",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG-006_R{\"Partner postures back\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG-006_F[\"Sit up / break posture → Closed guard\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG_ACT_3 -- \"Partner postures back\" --> CG-006_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG-006_R --> CG-006_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG-007_R{\"Partner drives forward\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG-007_F([\"Angle to armbar → Armbar position\"])",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG_ACT_3 -- \"Partner drives forward\" --> CG-007_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG-007_R --> CG-007_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG_ACT_4[\"Armbar from guard\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG --> CG_ACT_4",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG-008_R{\"Partner pulls arm out\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG-008_F[\"Triangle → Triangle position\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG_ACT_4 -- \"Partner pulls arm out\" --> CG-008_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG-008_R --> CG-008_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG_ACT_5[\"Triangle\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG --> CG_ACT_5",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG-009_R{\"Partner stacks\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG-009_F[\"Switch to armbar or omoplata → Submission position\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG_ACT_5 -- \"Partner stacks\" --> CG-009_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG-009_R --> CG-009_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG-010_R{\"Partner postures before lock\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG-010_F[\"Flower sweep → Mount top\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG_ACT_5 -- \"Partner postures before lock\" --> CG-010_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG-010_R --> CG-010_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG_ACT_6[\"Scissor sweep\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG --> CG_ACT_6",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG-011_R{\"Partner bases wide\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG-011_F[\"Push/knee push sweep → Mount or top guard\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG_ACT_6 -- \"Partner bases wide\" --> CG-011_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG-011_R --> CG-011_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG_ACT_7[\"Arm drag\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG --> CG_ACT_7",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG-012_R{\"Partner posts far hand\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG-012_F[\"Climb to back → Back control\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG_ACT_7 -- \"Partner posts far hand\" --> CG-012_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG-012_R --> CG-012_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG_ACT_8[\"Overhook\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG --> CG_ACT_8",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG-013_R{\"Partner postures hard\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG-013_F[\"Hip bump or omoplata → Closed guard attack\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG_ACT_8 -- \"Partner postures hard\" --> CG-013_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG-013_R --> CG-013_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_9[\"Omoplata setup\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG --> PG_ACT_9",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-SUB-004_R{\"Partner postures tall\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-SUB-004_F[\"Shoot hip and swing leg over → Omoplata position\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_9 -- \"Partner postures tall\" --> PG-SUB-004_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-SUB-004_R --> PG-SUB-004_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_10[\"Omoplata\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG --> PG_ACT_10",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-SUB-005_R{\"Partner rolls forward\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-SUB-005_F[\"Follow and recontrol → Top omoplata or side control\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_10 -- \"Partner rolls forward\" --> PG-SUB-005_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-SUB-005_R --> PG-SUB-005_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_11[\"Loop choke\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG --> PG_ACT_11",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-SUB-006_R{\"Partner postures with head down\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-SUB-006_F([\"Loop lapel over head → Submission\"])",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_11 -- \"Partner postures with head d\" --> PG-SUB-006_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-SUB-006_R --> PG-SUB-006_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG_ACT_12[\"Bicep slicer from guard\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG --> BG_ACT_12",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG-SUB-002_R{\"Partner stiff-arms\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG-SUB-002_F([\"Trap arm with leg; compress → Submission\"])",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG_ACT_12 -- \"Partner stiff-arms\" --> BG-SUB-002_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG-SUB-002_R --> BG-SUB-002_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG_ACT_13[\"Pendulum submission chain\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG --> BG_ACT_13",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG-BLK-002_R{\"Partner switches between defenses\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG-BLK-002_F([\"Pendulum armbar to triangle to omoplata → Submission\"])",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG_ACT_13 -- \"Partner switches between def\" --> BG-BLK-002_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG-BLK-002_R --> BG-BLK-002_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_14[\"Overhook system (no-gi)\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG --> NG_ACT_14",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-CG-001_R{\"Opponent postures\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-CG-001_F[\"Hip bump / kimura / guillotine chain → Closed guard attack\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_14 -- \"Opponent postures\" --> NG-CG-001_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-CG-001_R --> NG-CG-001_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-CG-002_R{\"Opponent hides hand\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-CG-002_F[\"Hip bump / guillotine → Sub or mount\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG_ACT_2 -- \"Opponent hides hand\" --> NG-CG-002_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-CG-002_R --> NG-CG-002_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_15[\"Guillotine (10-finger)\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG --> NG_ACT_15",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-CG-003_R{\"Opponent drops head\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-CG-003_F([\"Finish 10-finger → Submission\"])",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_15 -- \"Opponent drops head\" --> NG-CG-003_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-CG-003_R --> NG-CG-003_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_16[\"High-elbow guillotine\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "CG --> NG_ACT_16",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-CG-004_R{\"Opponent drives in\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-CG-004_F([\"Finish with high elbow → Submission\"])",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_16 -- \"Opponent drives in\" --> NG-CG-004_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-CG-004_R --> NG-CG-004_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "Open guard Attacking Tree",
    "starting_position": "Open guard",
    "instructions": "Paste into mermaid-compatible renderer.",
    "mermaid_code": "flowchart TD"
  },
  {
    "tree_name": "OG([\"Open guard\"])",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG_ACT_1[\"Collar-sleeve control\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG --> OG_ACT_1",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG-001_R{\"Partner drives forward\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG-001_F[\"Triangle → Triangle position\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG_ACT_1 -- \"Partner drives forward\" --> OG-001_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG-001_R --> OG-001_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG-002_R{\"Partner pulls backward\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG-002_F[\"Tripod sweep → Top open guard\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG_ACT_1 -- \"Partner pulls backward\" --> OG-002_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG-002_R --> OG-002_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG_ACT_2[\"Tripod sweep\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG --> OG_ACT_2",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG-003_R{\"Partner steps foot back\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG-003_F[\"Sickle sweep → Top position\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG_ACT_2 -- \"Partner steps foot back\" --> OG-003_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG-003_R --> OG-003_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG_ACT_3[\"De la Riva guard\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG --> OG_ACT_3",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG-004_R{\"Partner pressures knee inward\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG-004_F[\"Off-balance tripod/sickle → Top position\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG_ACT_3 -- \"Partner pressures knee inwar\" --> OG-004_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG-004_R --> OG-004_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG-005_R{\"Partner turns knee outward\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG-005_F[\"Wrestle-up → Single leg\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG_ACT_3 -- \"Partner turns knee outward\" --> OG-005_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG-005_R --> OG-005_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG_ACT_4[\"Single-leg X entry\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG --> OG_ACT_4",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG-006_R{\"Partner stands tall\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG-006_F[\"Elevate and sweep → Top position\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG_ACT_4 -- \"Partner stands tall\" --> OG-006_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG-006_R --> OG-006_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG-007_R{\"Partner strips foot from hip\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG-007_F[\"Come up on single leg → Single-leg position\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG_ACT_4 -- \"Partner strips foot from hip\" --> OG-007_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG-007_R --> OG-007_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG_ACT_5[\"Omoplata entry\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG --> OG_ACT_5",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG-008_R{\"Partner rolls forward\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG-008_F[\"Follow to top → Top side control\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG_ACT_5 -- \"Partner rolls forward\" --> OG-008_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG-008_R --> OG-008_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG_ACT_6[\"Technical stand-up\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG --> OG_ACT_6",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG-009_R{\"Partner backs away\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG-009_F[\"Stand to neutral → Standing / Neutral\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG_ACT_6 -- \"Partner backs away\" --> OG-009_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG-009_R --> OG-009_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG_ACT_7[\"Knee shield open guard\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG --> OG_ACT_7",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG-010_R{\"Partner pressures forward\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG-010_F[\"Frame and recover → Closed or half guard\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG_ACT_7 -- \"Partner pressures forward\" --> OG-010_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG-010_R --> OG-010_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG_ACT_8[\"Lasso guard\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG --> OG_ACT_8",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG-011_R{\"Partner tries to pass\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG-011_F[\"Off-balance to sweep → Top position\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG_ACT_8 -- \"Partner tries to pass\" --> OG-011_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG-011_R --> OG-011_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_9[\"DLR to berimbolo entry\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG --> PG_ACT_9",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-BER-001_R{\"Partner posts to defend off-balance\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-BER-001_F[\"Invert and roll under → Back control\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_9 -- \"Partner posts to defend off-\" --> PG-BER-001_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-BER-001_R --> PG-BER-001_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_10[\"Berimbolo\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG --> PG_ACT_10",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-BER-002_R{\"Partner walks around exit side\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-BER-002_F[\"Re-invert and crab ride → Back control\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_10 -- \"Partner walks around exit si\" --> PG-BER-002_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-BER-002_R --> PG-BER-002_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-BER-003_R{\"Partner sits on you\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-BER-003_F[\"Reverse to kiss of the dragon → Back/inverted control\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_10 -- \"Partner sits on you\" --> PG-BER-003_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-BER-003_R --> PG-BER-003_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_11[\"Worm guard setup\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG --> PG_ACT_11",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-WORM-001_R{\"Partner stands in open guard\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-WORM-001_F[\"Feed lapel under far leg and grip → Worm guard established\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_11 -- \"Partner stands in open guard\" --> PG-WORM-001_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-WORM-001_R --> PG-WORM-001_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_12[\"Worm guard\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG --> PG_ACT_12",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-WORM-002_R{\"Partner tries to step back\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-WORM-002_F[\"Balloon sweep → Top open guard\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_12 -- \"Partner tries to step back\" --> PG-WORM-002_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-WORM-002_R --> PG-WORM-002_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-WORM-003_R{\"Partner backsteps\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-WORM-003_F[\"Transition to squid/lapel leg lock → Top position / leg lock\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_12 -- \"Partner backsteps\" --> PG-WORM-003_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-WORM-003_R --> PG-WORM-003_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_13[\"Spider guard control\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG --> PG_ACT_13",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-SPI-001_R{\"Partner postures up\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-SPI-001_F[\"Triangle from spider → Triangle position\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_13 -- \"Partner postures up\" --> PG-SPI-001_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-SPI-001_R --> PG-SPI-001_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_14[\"Spider guard\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG --> PG_ACT_14",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-SPI-002_R{\"Partner steps past foot\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-SPI-002_F[\"Lasso sweep → Top position\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_14 -- \"Partner steps past foot\" --> PG-SPI-002_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-SPI-002_R --> PG-SPI-002_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-SPI-003_R{\"Partner puts pressure down\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-SPI-003_F[\"Omoplata → Omoplata position\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_14 -- \"Partner puts pressure down\" --> PG-SPI-003_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-SPI-003_R --> PG-SPI-003_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_15[\"Headquarters (HQ)\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG --> PG_ACT_15",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-PAS-002_R{\"Partner plays DLR/open guard\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-PAS-002_F[\"Step to HQ; pass to knee cut → Side control top\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_15 -- \"Partner plays DLR/open guard\" --> PG-PAS-002_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-PAS-002_R --> PG-PAS-002_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_16[\"Leg drag pass\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG --> PG_ACT_16",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-PAS-003_R{\"Partner has DLR or open guard\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-PAS-003_F[\"Drag near leg across to opposite side → Near-side passing position\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_16 -- \"Partner has DLR or open guar\" --> PG-PAS-003_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-PAS-003_R --> PG-PAS-003_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_17[\"Over-under pass\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG --> PG_ACT_17",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-PAS-004_R{\"Partner lays on back with hips up\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-PAS-004_F[\"Stack legs + underhook → Side control top\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_17 -- \"Partner lays on back with hi\" --> PG-PAS-004_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-PAS-004_R --> PG-PAS-004_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_18[\"SLX entry to sweep\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG --> PG_ACT_18",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-SLX-001_R{\"Partner stands tall\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-SLX-001_F[\"Extend and sweep → Top position\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_18 -- \"Partner stands tall\" --> PG-SLX-001_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-SLX-001_R --> PG-SLX-001_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_19[\"SLX to back\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG --> PG_ACT_19",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-SLX-002_R{\"Partner turns away to defend\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-SLX-002_F[\"Transition to back / crab ride → Back control\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_19 -- \"Partner turns away to defend\" --> PG-SLX-002_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-SLX-002_R --> PG-SLX-002_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG_ACT_20[\"Reverse berimbolo\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG --> BG_ACT_20",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG-BER-001_R{\"Partner attempts to smash DLR\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG-BER-001_F[\"Invert to opposite side → Back control\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG_ACT_20 -- \"Partner attempts to smash DL\" --> BG-BER-001_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG-BER-001_R --> BG-BER-001_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG_ACT_21[\"Crab ride\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG --> BG_ACT_21",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG-BER-002_R{\"Partner mid-berimbolo defense\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG-BER-002_F[\"Transition to crab ride back → Back control / inverted back\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG_ACT_21 -- \"Partner mid-berimbolo defens\" --> BG-BER-002_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG-BER-002_R --> BG-BER-002_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG_ACT_22[\"Lapel wedge from DLR\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG --> BG_ACT_22",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG-LAP-001_R{\"Partner pressures to pass\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG-LAP-001_F[\"Feed own lapel through leg → Back control threat / sweep\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG_ACT_22 -- \"Partner pressures to pass\" --> BG-LAP-001_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG-LAP-001_R --> BG-LAP-001_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG_ACT_23[\"Squid guard\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG --> BG_ACT_23",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG-LAP-002_R{\"Partner tries torreando\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG-LAP-002_F[\"Wrap lapel around leg and off-balance → Top position / leg lock\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG_ACT_23 -- \"Partner tries torreando\" --> BG-LAP-002_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG-LAP-002_R --> BG-LAP-002_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG_ACT_24[\"Counter to leg drag\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG --> BG_ACT_24",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG-COU-001_R{\"Partner executes leg drag\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG-COU-001_F[\"Reinsert hook + come up → Top position\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG_ACT_24 -- \"Partner executes leg drag\" --> BG-COU-001_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG-COU-001_R --> BG-COU-001_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG_ACT_25[\"Counter to over-under\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG --> BG_ACT_25",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG-COU-002_R{\"Partner locks over-under\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG-COU-002_F[\"Kimura grip the under-arm → Kimura sweep/sub\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG_ACT_25 -- \"Partner locks over-under\" --> BG-COU-002_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG-COU-002_R --> BG-COU-002_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG_ACT_26[\"Folding pass\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG --> BG_ACT_26",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG-PAS-002_R{\"Partner on back; legs elevated\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG-PAS-002_F[\"Fold far leg over near → Side control\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG_ACT_26 -- \"Partner on back; legs elevat\" --> BG-PAS-002_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG-PAS-002_R --> BG-PAS-002_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_27[\"Butterfly guard\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG --> NG_ACT_27",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-OG-001_R{\"Opponent stands\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-OG-001_F[\"Hook sweep → Top position\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_27 -- \"Opponent stands\" --> NG-OG-001_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-OG-001_R --> NG-OG-001_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_28[\"Butterfly to X-guard\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG --> NG_ACT_28",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-OG-002_R{\"Opponent bases wide\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-OG-002_F[\"Switch to X-guard → X-guard\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_28 -- \"Opponent bases wide\" --> NG-OG-002_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-OG-002_R --> NG-OG-002_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_29[\"X-guard sweep\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG --> NG_ACT_29",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-OG-003_R{\"Opponent in X\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-OG-003_F[\"Sweep forward or come up → Top position or single\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_29 -- \"Opponent in X\" --> NG-OG-003_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-OG-003_R --> NG-OG-003_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_30[\"Z-guard (no-gi)\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG --> NG_ACT_30",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-OG-004_R{\"Opponent forward pressure\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-OG-004_F[\"Reverse SLX / 50-50 entry → Leg entanglement\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_30 -- \"Opponent forward pressure\" --> NG-OG-004_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-OG-004_R --> NG-OG-004_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_31[\"Reverse De la Riva (RDLR)\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG --> NG_ACT_31",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-OG-005_R{\"Opponent standing\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-OG-005_F[\"Off-balance or leg entry → Top or leg entanglement\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_31 -- \"Opponent standing\" --> NG-OG-005_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-OG-005_R --> NG-OG-005_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_32[\"Headquarters pass (no-gi)\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG --> NG_ACT_32",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-PAS-002_R{\"Bottom plays open\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-PAS-002_F[\"Step to HQ; knee slide → Side control\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_32 -- \"Bottom plays open\" --> NG-PAS-002_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-PAS-002_R --> NG-PAS-002_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_33[\"Toreando no-gi\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG --> NG_ACT_33",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-PAS-003_R{\"Bottom legs up\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-PAS-003_F[\"Pin pants/ankles and sprint around → Side control\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_33 -- \"Bottom legs up\" --> NG-PAS-003_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-PAS-003_R --> NG-PAS-003_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_34[\"Body lock pass\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG --> NG_ACT_34",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-PAS-004_R{\"Opponent keeps open guard\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-PAS-004_F[\"Body lock and step over legs → Side control / mount\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_34 -- \"Opponent keeps open guard\" --> NG-PAS-004_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-PAS-004_R --> NG-PAS-004_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_35[\"Straight ashi entry\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "OG --> NG_ACT_35",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-LL-001_R{\"Opponent standing\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-LL-001_F[\"Enter ashi garami → Ashi garami\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_35 -- \"Opponent standing\" --> NG-LL-001_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-LL-001_R --> NG-LL-001_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "Half guard bottom Attacking Tree",
    "starting_position": "Half guard bottom",
    "instructions": "Paste into mermaid-compatible renderer.",
    "mermaid_code": "flowchart TD"
  },
  {
    "tree_name": "HGB([\"Half guard bottom\"])",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGB_ACT_1[\"Knee shield to underhook\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGB --> HGB_ACT_1",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGB-001_R{\"Partner gives underhook\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGB-001_F[\"Come to dogfight → Dogfight\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGB_ACT_1 -- \"Partner gives underhook\" --> HGB-001_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGB-001_R --> HGB-001_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGB-002_R{\"Partner crossfaces hard\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGB-002_F[\"Recover frames → Half guard bottom\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGB_ACT_1 -- \"Partner crossfaces hard\" --> HGB-002_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGB-002_R --> HGB-002_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGB_ACT_2[\"Dogfight\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGB --> HGB_ACT_2",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGB-003_R{\"Partner whizzers\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGB-003_F[\"Old school sweep → Top half guard\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGB_ACT_2 -- \"Partner whizzers\" --> HGB-003_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGB-003_R --> HGB-003_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGB-004_R{\"Partner posts far hand\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGB-004_F[\"Back take or roll under → Back/sweep\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGB_ACT_2 -- \"Partner posts far hand\" --> HGB-004_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGB-004_R --> HGB-004_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGB_ACT_3[\"Half butterfly hook\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGB --> HGB_ACT_3",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGB-005_R{\"Partner pressures forward\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGB-005_F[\"Elevator sweep → Top half guard\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGB_ACT_3 -- \"Partner pressures forward\" --> HGB-005_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGB-005_R --> HGB-005_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGB_ACT_4[\"Deep half entry\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGB --> HGB_ACT_4",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGB-006_R{\"Partner bases wide\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGB-006_F[\"Out back door → Single leg or top\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGB_ACT_4 -- \"Partner bases wide\" --> HGB-006_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGB-006_R --> HGB-006_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGB_ACT_5[\"Underhook half guard\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGB --> HGB_ACT_5",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGB-007_R{\"Partner backs hips away\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGB-007_F[\"Recover full guard → Closed/open guard\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGB_ACT_5 -- \"Partner backs hips away\" --> HGB-007_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGB-007_R --> HGB-007_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_6[\"Deep half to come-up\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGB --> PG_ACT_6",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-HGB-001_R{\"Partner bases wide\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-HGB-001_F[\"Come up to single leg → Single leg\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_6 -- \"Partner bases wide\" --> PG-HGB-001_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-HGB-001_R --> PG-HGB-001_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_7[\"Deep half\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGB --> PG_ACT_7",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-HGB-002_R{\"Partner sits down\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-HGB-002_F[\"Waiter sweep → Top position\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_7 -- \"Partner sits down\" --> PG-HGB-002_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-HGB-002_R --> PG-HGB-002_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_8[\"Z-guard to reverse DLR\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGB --> PG_ACT_8",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-HGB-003_R{\"Partner pressures forward\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-HGB-003_F[\"Enter RDLR; off-balance → Reverse DLR\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_8 -- \"Partner pressures forward\" --> PG-HGB-003_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-HGB-003_R --> PG-HGB-003_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_9[\"Underhook + hip to come up\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGB --> NG_ACT_9",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-HGB-001_R{\"Opponent crossfaces\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-HGB-001_F[\"Recover knee shield → Half guard bottom\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_9 -- \"Opponent crossfaces\" --> NG-HGB-001_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-HGB-001_R --> NG-HGB-001_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_10[\"Lockdown (eddie bravo style)\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGB --> NG_ACT_10",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-HGB-002_R{\"Opponent tries to pass\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-HGB-002_F[\"Whip up and underhook → Dogfight\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_10 -- \"Opponent tries to pass\" --> NG-HGB-002_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-HGB-002_R --> NG-HGB-002_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_11[\"Knee shield to kimura\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGB --> NG_ACT_11",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-HGB-003_R{\"Opponent underhooks\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-HGB-003_F[\"Kimura trap far arm → Kimura trap\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_11 -- \"Opponent underhooks\" --> NG-HGB-003_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-HGB-003_R --> NG-HGB-003_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "Top half guard Attacking Tree",
    "starting_position": "Top half guard",
    "instructions": "Paste into mermaid-compatible renderer.",
    "mermaid_code": "flowchart TD"
  },
  {
    "tree_name": "HGT([\"Top half guard\"])",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGT_ACT_1[\"Crossface and underhook\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGT --> HGT_ACT_1",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGT-001_R{\"Partner stays flat\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGT-001_F[\"Free knee and pass → Side control top\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGT_ACT_1 -- \"Partner stays flat\" --> HGT-001_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGT-001_R --> HGT-001_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGT-002_R{\"Partner turns to side\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGT-002_F[\"Backstep pass → Side control/reverse half\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGT_ACT_1 -- \"Partner turns to side\" --> HGT-002_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGT-002_R --> HGT-002_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGT_ACT_2[\"Knee cut pass\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGT --> HGT_ACT_2",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGT-003_R{\"Partner frames\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGT-003_F[\"Clear frame and crossface → Side control top\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGT_ACT_2 -- \"Partner frames\" --> HGT-003_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGT-003_R --> HGT-003_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGT-004_R{\"Partner underhooks\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGT-004_F[\"Whizzer and flatten → Top half guard control\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGT_ACT_2 -- \"Partner underhooks\" --> HGT-004_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGT-004_R --> HGT-004_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGT_ACT_3[\"Leg weave pass\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGT --> HGT_ACT_3",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGT-005_R{\"Partner keeps knee shield\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGT-005_F[\"Staple and circle → Side control top\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGT_ACT_3 -- \"Partner keeps knee shield\" --> HGT-005_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGT-005_R --> HGT-005_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGT_ACT_4[\"Mount transition\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGT --> HGT_ACT_4",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGT-006_R{\"Partner exposes far knee\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGT-006_F[\"Slide knee to mount → Mount top\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGT_ACT_4 -- \"Partner exposes far knee\" --> HGT-006_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGT-006_R --> HGT-006_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_5[\"Smash pass\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGT --> PG_ACT_5",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-PAS-001_R{\"Partner keeps knee shield\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-PAS-001_F[\"Smash knee across; long step → Side control top\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_5 -- \"Partner keeps knee shield\" --> PG-PAS-001_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-PAS-001_R --> PG-PAS-001_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG_ACT_6[\"Cartwheel pass\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGT --> BG_ACT_6",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG-PAS-001_R{\"Partner invert-defends\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG-PAS-001_F[\"Cartwheel over legs → Side control or back take\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG_ACT_6 -- \"Partner invert-defends\" --> BG-PAS-001_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG-PAS-001_R --> BG-PAS-001_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG_ACT_7[\"Pass decision system\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGT --> BG_ACT_7",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG-BLK-004_R{\"Partner knee shield + whizzer\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG-BLK-004_F[\"Read hips; choose knee cut vs backstep → Side control top\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG_ACT_7 -- \"Partner knee shield + whizze\" --> BG-BLK-004_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG-BLK-004_R --> BG-BLK-004_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_8[\"Smash pass no-gi\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "HGT --> NG_ACT_8",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-PAS-001_R{\"Bottom keeps knee shield\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-PAS-001_F[\"Drive underhook + long step → Side control\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_8 -- \"Bottom keeps knee shield\" --> NG-PAS-001_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-PAS-001_R --> NG-PAS-001_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "Side control top Attacking Tree",
    "starting_position": "Side control top",
    "instructions": "Paste into mermaid-compatible renderer.",
    "mermaid_code": "flowchart TD"
  },
  {
    "tree_name": "SC([\"Side control top\"])",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "SC_ACT_1[\"Americana\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "SC --> SC_ACT_1",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "SC-001_R{\"Partner bends arm\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "SC-001_F([\"Finish Americana → Submission\"])",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "SC_ACT_1 -- \"Partner bends arm\" --> SC-001_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "SC-001_R --> SC-001_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "SC-002_R{\"Partner straightens arm\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "SC-002_F[\"Straight armbar → Submission position\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "SC_ACT_1 -- \"Partner straightens arm\" --> SC-002_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "SC-002_R --> SC-002_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "SC_ACT_2[\"Kimura grip\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "SC --> SC_ACT_2",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "SC-003_R{\"Partner hides hand\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "SC-003_F[\"Step over head / trap → Back or armbar threat\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "SC_ACT_2 -- \"Partner hides hand\" --> SC-003_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "SC-003_R --> SC-003_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "SC_ACT_3[\"Knee-on-belly transition\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "SC --> SC_ACT_3",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "SC-004_R{\"Partner pushes knee\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "SC-004_F([\"Spin to armbar → Armbar position\"])",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "SC_ACT_3 -- \"Partner pushes knee\" --> SC-004_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "SC-004_R --> SC-004_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "SC_ACT_4[\"Mount transition\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "SC --> SC_ACT_4",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "SC-005_R{\"Partner frames\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "SC-005_F[\"Clear frame; knee slide → Mount top\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "SC_ACT_4 -- \"Partner frames\" --> SC-005_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "SC-005_R --> SC-005_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "SC_ACT_5[\"North-south transition\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "SC --> SC_ACT_5",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "SC-006_R{\"Partner turns away\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "SC-006_F[\"Take back → Back control\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "SC_ACT_5 -- \"Partner turns away\" --> SC-006_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "SC-006_R --> SC-006_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "SC_ACT_6[\"Paper cutter choke\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "SC --> SC_ACT_6",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "SC-007_R{\"Partner leaves collar exposed\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "SC-007_F([\"Finish choke → Submission\"])",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "SC_ACT_6 -- \"Partner leaves collar expose\" --> SC-007_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "SC-007_R --> SC-007_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_7[\"Kimura trap system\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "SC --> PG_ACT_7",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-SUB-001_R{\"Partner defends kimura by hiding hand\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-SUB-001_F[\"Trap with leg across; roll → Kimura/armbar/back\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_7 -- \"Partner defends kimura by hi\" --> PG-SUB-001_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-SUB-001_R --> PG-SUB-001_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG_ACT_8[\"Gogoplata from north-south\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "SC --> BG_ACT_8",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG-SUB-001_R{\"Partner grips your sleeve\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG-SUB-001_F([\"Leg to choke from mounted position → Submission\"])",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG_ACT_8 -- \"Partner grips your sleeve\" --> BG-SUB-001_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG-SUB-001_R --> BG-SUB-001_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_9[\"North-south choke\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "SC --> NG_ACT_9",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-SC-001_R{\"Bottom turns away\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-SC-001_F([\"Squeeze bicep into neck → Submission\"])",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_9 -- \"Bottom turns away\" --> NG-SC-001_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-SC-001_R --> NG-SC-001_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_10[\"Arm triangle (head-and-arm)\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "SC --> NG_ACT_10",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-SC-002_R{\"Bottom frames near shoulder\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-SC-002_F([\"Pass shoulder through; finish → Submission\"])",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_10 -- \"Bottom frames near shoulder\" --> NG-SC-002_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-SC-002_R --> NG-SC-002_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "Mount top Attacking Tree",
    "starting_position": "Mount top",
    "instructions": "Paste into mermaid-compatible renderer.",
    "mermaid_code": "flowchart TD"
  },
  {
    "tree_name": "MT([\"Mount top\"])",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "MT_ACT_1[\"Americana\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "MT --> MT_ACT_1",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "MT-001_R{\"Partner keeps elbows low\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "MT-001_F[\"Climb to high mount → High mount\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "MT_ACT_1 -- \"Partner keeps elbows low\" --> MT-001_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "MT-001_R --> MT-001_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "MT-002_R{\"Partner straightens arm\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "MT-002_F([\"Armbar → Armbar position\"])",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "MT_ACT_1 -- \"Partner straightens arm\" --> MT-002_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "MT-002_R --> MT-002_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "MT_ACT_2[\"Cross-collar choke\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "MT --> MT_ACT_2",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "MT-003_R{\"Partner defends neck\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "MT-003_F[\"Armbar / gift wrap → S-mount or back\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "MT_ACT_2 -- \"Partner defends neck\" --> MT-003_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "MT-003_R --> MT-003_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "MT_ACT_3[\"Gift wrap\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "MT --> MT_ACT_3",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "MT-004_R{\"Partner turns away\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "MT-004_F[\"Take back → Back control\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "MT_ACT_3 -- \"Partner turns away\" --> MT-004_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "MT-004_R --> MT-004_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "MT_ACT_4[\"S-mount\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "MT --> MT_ACT_4",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "MT-005_R{\"Partner elbow exposed\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "MT-005_F([\"Armbar → Submission\"])",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "MT_ACT_4 -- \"Partner elbow exposed\" --> MT-005_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "MT-005_R --> MT-005_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "MT_ACT_5[\"Low mount pressure\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "MT --> MT_ACT_5",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "MT-006_R{\"Partner bridges hard\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "MT-006_F[\"Post and grapevine → Mount top\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "MT_ACT_5 -- \"Partner bridges hard\" --> MT-006_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "MT-006_R --> MT-006_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_6[\"S-mount to armbar\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "MT --> PG_ACT_6",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-SUB-002_R{\"Partner keeps elbow tight\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-SUB-002_F([\"Pry elbow with knee; armbar → Armbar position\"])",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_6 -- \"Partner keeps elbow tight\" --> PG-SUB-002_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-SUB-002_R --> PG-SUB-002_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG_ACT_7[\"Ezekiel from mount\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "MT --> BG_ACT_7",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG-SUB-003_R{\"Partner frames\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG-SUB-003_F([\"Sleeve-assisted choke → Submission\"])",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG_ACT_7 -- \"Partner frames\" --> BG-SUB-003_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG-SUB-003_R --> BG-SUB-003_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_8[\"Arm triangle from mount\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "MT --> NG_ACT_8",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-MT-001_R{\"Bottom bridges\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-MT-001_F([\"Dismount to finish → Submission\"])",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_8 -- \"Bottom bridges\" --> NG-MT-001_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-MT-001_R --> NG-MT-001_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_9[\"Ezekiel no-gi\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "MT --> NG_ACT_9",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-MT-002_R{\"Bottom bridges\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-MT-002_F([\"Sleeve-free ezekiel → Submission\"])",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_9 -- \"Bottom bridges\" --> NG-MT-002_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-MT-002_R --> NG-MT-002_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "Back control Attacking Tree",
    "starting_position": "Back control",
    "instructions": "Paste into mermaid-compatible renderer.",
    "mermaid_code": "flowchart TD"
  },
  {
    "tree_name": "BK([\"Back control\"])",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BK_ACT_1[\"Rear naked choke\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BK --> BK_ACT_1",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BK-001_R{\"Partner fights top hand\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BK-001_F[\"Trap arm; re-attack → Back control\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BK_ACT_1 -- \"Partner fights top hand\" --> BK-001_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BK-001_R --> BK-001_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BK-002_R{\"Partner escapes hips to floor\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BK-002_F[\"Mount transition → Mount top\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BK_ACT_1 -- \"Partner escapes hips to floo\" --> BK-002_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BK-002_R --> BK-002_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BK_ACT_2[\"Bow-and-arrow choke\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BK --> BK_ACT_2",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BK-003_R{\"Partner exposes collar\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BK-003_F([\"Finish bow-and-arrow → Submission\"])",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BK_ACT_2 -- \"Partner exposes collar\" --> BK-003_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BK-003_R --> BK-003_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BK_ACT_3[\"Back control retention\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BK --> BK_ACT_3",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BK-004_R{\"Partner turns toward choke arm\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BK-004_F[\"Follow to mount → Mount top\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BK_ACT_3 -- \"Partner turns toward choke a\" --> BK-004_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BK-004_R --> BK-004_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BK_ACT_4[\"Armbar from back\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BK --> BK_ACT_4",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BK-005_R{\"Partner over-defends choke\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BK-005_F([\"Swing leg over head → Armbar position\"])",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BK_ACT_4 -- \"Partner over-defends choke\" --> BK-005_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BK-005_R --> BK-005_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_5[\"Bow-and-arrow chain\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BK --> PG_ACT_5",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-SUB-003_R{\"Partner defends collar\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-SUB-003_F([\"Switch to armbar from back → Armbar position\"])",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_5 -- \"Partner defends collar\" --> PG-SUB-003_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-SUB-003_R --> PG-SUB-003_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_6[\"Back control with body triangle\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BK --> PG_ACT_6",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-BK-001_R{\"Partner hip-escapes\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-BK-001_F[\"Maintain with body triangle → Back control\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_6 -- \"Partner hip-escapes\" --> PG-BK-001_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-BK-001_R --> PG-BK-001_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG_ACT_7[\"Harness to strangle chain\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BK --> BG_ACT_7",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG-BK-001_R{\"Partner two-hands defends\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG-BK-001_F[\"Switch side / attack second side → Submission\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG_ACT_7 -- \"Partner two-hands defends\" --> BG-BK-001_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG-BK-001_R --> BG-BK-001_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG_ACT_8[\"Back control maze\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BK --> BG_ACT_8",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG-BLK-003_R{\"Partner escape-resists\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG-BLK-003_F[\"Maintain via continuous threats → Back control\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG_ACT_8 -- \"Partner escape-resists\" --> BG-BLK-003_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BG-BLK-003_R --> BG-BLK-003_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_9[\"RNC no-gi\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BK --> NG_ACT_9",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-BK-001_R{\"Opponent two-hands defense\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-BK-001_F[\"Trap wrist with leg; re-attack → Submission\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_9 -- \"Opponent two-hands defense\" --> NG-BK-001_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-BK-001_R --> NG-BK-001_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_10[\"Body triangle\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BK --> NG_ACT_10",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-BK-002_R{\"Opponent hip escapes\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-BK-002_F[\"Lock body triangle → Back control\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_10 -- \"Opponent hip escapes\" --> NG-BK-002_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-BK-002_R --> NG-BK-002_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_11[\"Crucifix from back\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "BK --> NG_ACT_11",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-BK-003_R{\"Opponent posts arm\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-BK-003_F([\"Trap arm; use legs → Submission/back\"])",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_11 -- \"Opponent posts arm\" --> NG-BK-003_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-BK-003_R --> NG-BK-003_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "Front headlock Attacking Tree",
    "starting_position": "Front headlock",
    "instructions": "Paste into mermaid-compatible renderer.",
    "mermaid_code": "flowchart TD"
  },
  {
    "tree_name": "FH([\"Front headlock\"])",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "FH_ACT_1[\"Guillotine\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "FH --> FH_ACT_1",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "FH-001_R{\"Partner leaves neck exposed\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "FH-001_F([\"Finish guillotine → Submission\"])",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "FH_ACT_1 -- \"Partner leaves neck exposed\" --> FH-001_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "FH-001_R --> FH-001_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "FH-002_R{\"Partner defends hands\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "FH-002_F[\"Snap down and go behind → Turtle/back\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "FH_ACT_1 -- \"Partner defends hands\" --> FH-002_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "FH-002_R --> FH-002_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "FH_ACT_2[\"Anaconda choke\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "FH --> FH_ACT_2",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "FH-003_R{\"Partner posts arm across\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "FH-003_F[\"Roll to anaconda → Submission position\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "FH_ACT_2 -- \"Partner posts arm across\" --> FH-003_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "FH-003_R --> FH-003_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "FH_ACT_3[\"Darce choke\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "FH --> FH_ACT_3",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "FH-004_R{\"Partner reaches underhook\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "FH-004_F[\"Thread Darce → Submission position\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "FH_ACT_3 -- \"Partner reaches underhook\" --> FH-004_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "FH-004_R --> FH-004_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "FH_ACT_4[\"Spin behind\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "FH --> FH_ACT_4",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "FH-005_R{\"Partner shells up\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "FH-005_F[\"Back or turtle attack → Back/turtle top\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "FH_ACT_4 -- \"Partner shells up\" --> FH-005_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "FH-005_R --> FH-005_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "FH_ACT_5[\"Front headlock pressure\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "FH --> FH_ACT_5",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "FH-006_R{\"Partner pulls guard\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "FH-006_F[\"Settle top guard → Top closed/open guard\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "FH_ACT_5 -- \"Partner pulls guard\" --> FH-006_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "FH-006_R --> FH-006_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_6[\"High-elbow guillotine (standing/grounded)\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "FH --> NG_ACT_6",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-FH-001_R{\"Opponent leaves neck\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-FH-001_F([\"Finish → Submission\"])",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_6 -- \"Opponent leaves neck\" --> NG-FH-001_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-FH-001_R --> NG-FH-001_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_7[\"Peruvian necktie\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "FH --> NG_ACT_7",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-FH-002_R{\"Opponent posts arm\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-FH-002_F([\"Invert + crank → Submission\"])",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_7 -- \"Opponent posts arm\" --> NG-FH-002_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-FH-002_R --> NG-FH-002_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_8[\"Japanese necktie\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "FH --> NG_ACT_8",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-FH-003_R{\"Opponent shells up\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-FH-003_F([\"Hip over head; crank → Submission\"])",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_8 -- \"Opponent shells up\" --> NG-FH-003_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-FH-003_R --> NG-FH-003_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "Turtle top Attacking Tree",
    "starting_position": "Turtle top",
    "instructions": "Paste into mermaid-compatible renderer.",
    "mermaid_code": "flowchart TD"
  },
  {
    "tree_name": "TUR([\"Turtle top\"])",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_1[\"Clock choke setup\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "TUR --> PG_ACT_1",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-TUR-001_R{\"Partner turtles up\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-TUR-001_F([\"Near collar + walk legs around → Submission\"])",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_1 -- \"Partner turtles up\" --> PG-TUR-001_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-TUR-001_R --> PG-TUR-001_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_2[\"Back take from turtle\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "TUR --> PG_ACT_2",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-TUR-002_R{\"Partner shells up tight\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-TUR-002_F[\"Harness + insert far hook → Back control\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_2 -- \"Partner shells up tight\" --> PG-TUR-002_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-TUR-002_R --> PG-TUR-002_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_3[\"Crucifix entry\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "TUR --> PG_ACT_3",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-TUR-003_R{\"Partner reaches back arm\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-TUR-003_F[\"Trap arm with legs → Crucifix\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG_ACT_3 -- \"Partner reaches back arm\" --> PG-TUR-003_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "PG-TUR-003_R --> PG-TUR-003_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_4[\"Mata leão (back)\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "TUR --> NG_ACT_4",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-ADV-004_R{\"Opponent turtles\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-ADV-004_F([\"Insert hooks + RNC → Submission\"])",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_4 -- \"Opponent turtles\" --> NG-ADV-004_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-ADV-004_R --> NG-ADV-004_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "Ashi garami Attacking Tree",
    "starting_position": "Ashi garami",
    "instructions": "Paste into mermaid-compatible renderer.",
    "mermaid_code": "flowchart TD"
  },
  {
    "tree_name": "ASHI([\"Ashi garami\"])",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_1[\"Straight ankle lock\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ASHI --> NG_ACT_1",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-LL-002_R{\"Opponent rotates out\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-LL-002_F([\"Finish straight ankle → Submission\"])",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_1 -- \"Opponent rotates out\" --> NG-LL-002_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-LL-002_R --> NG-LL-002_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_2[\"Transition to 50/50\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ASHI --> NG_ACT_2",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-LL-003_R{\"Opponent rotates free\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-LL-003_F[\"Thread leg to 50/50 → 50/50\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_2 -- \"Opponent rotates free\" --> NG-LL-003_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-LL-003_R --> NG-LL-003_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_3[\"Toe hold\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "ASHI --> NG_ACT_3",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-LL-007_R{\"Opponent boots up\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-LL-007_F([\"Capture foot; finish toe hold → Submission\"])",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_3 -- \"Opponent boots up\" --> NG-LL-007_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-LL-007_R --> NG-LL-007_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "50/50 Attacking Tree",
    "starting_position": "50/50",
    "instructions": "Paste into mermaid-compatible renderer.",
    "mermaid_code": "flowchart TD"
  },
  {
    "tree_name": "FIFTY([\"50/50\"])",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_1[\"Heel hook (inside)\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "FIFTY --> NG_ACT_1",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-LL-004_R{\"Opponent rotates toward heel\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-LL-004_F([\"Finish inside heel hook → Submission\"])",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_1 -- \"Opponent rotates toward heel\" --> NG-LL-004_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-LL-004_R --> NG-LL-004_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_2[\"Transition to inside sankaku (honey hole)\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "FIFTY --> NG_ACT_2",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-LL-005_R{\"Opponent frames\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-LL-005_F[\"Bring inside leg to honey hole → Inside sankaku\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_2 -- \"Opponent frames\" --> NG-LL-005_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-LL-005_R --> NG-LL-005_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_3[\"Outside heel hook\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "FIFTY --> NG_ACT_3",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-LL-010_R{\"Opponent turns out of inside\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-LL-010_F([\"Threaten outside heel (ruleset) → Submission\"])",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_3 -- \"Opponent turns out of inside\" --> NG-LL-010_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-LL-010_R --> NG-LL-010_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "Inside sankaku Attacking Tree",
    "starting_position": "Inside sankaku",
    "instructions": "Paste into mermaid-compatible renderer.",
    "mermaid_code": "flowchart TD"
  },
  {
    "tree_name": "SANK([\"Inside sankaku\"])",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_1[\"Inside heel hook\"]",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "SANK --> NG_ACT_1",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-LL-006_R{\"Opponent starts to boot up\"}",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-LL-006_F([\"Finish inside heel hook → Submission\"])",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG_ACT_1 -- \"Opponent starts to boot up\" --> NG-LL-006_R",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  },
  {
    "tree_name": "NG-LL-006_R --> NG-LL-006_F",
    "starting_position": null,
    "instructions": null,
    "mermaid_code": null
  }
];
