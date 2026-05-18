export interface Reactions { [k: string]: any }

export const reactions: Reactions[] = [
  {
    "reaction_id": "R-SPRAWL",
    "reaction_name": "Sprawl",
    "description": "Opponent kicks hips back and flattens on attacker to stuff a leg attack.",
    "reaction_type": "defensive",
    "typical_positions": "Standing",
    "often_paired_with": "R-FORWARD-PRESSURE"
  },
  {
    "reaction_id": "R-WHIZZER",
    "reaction_name": "Whizzer",
    "description": "Defensive overhook used to stop single legs or come-ups.",
    "reaction_type": "defensive",
    "typical_positions": "Standing;Half guard",
    "often_paired_with": "R-GIVES-UNDERHOOK"
  },
  {
    "reaction_id": "R-POSTURE-UP",
    "reaction_name": "Posture up",
    "description": "Opponent straightens spine, breaks hip/grip pressure from bottom.",
    "reaction_type": "defensive",
    "typical_positions": "Closed guard;Mount",
    "often_paired_with": "R-FORWARD-PRESSURE"
  },
  {
    "reaction_id": "R-FORWARD-PRESSURE",
    "reaction_name": "Forward pressure",
    "description": "Opponent drives weight into you.",
    "reaction_type": "offensive",
    "typical_positions": "Any",
    "often_paired_with": "R-POSTURE-UP;R-PULLS-AWAY"
  },
  {
    "reaction_id": "R-POSTS-HAND",
    "reaction_name": "Posts hand",
    "description": "Opponent bases out with a hand to defend a sweep/drag.",
    "reaction_type": "defensive",
    "typical_positions": "Closed guard;Half guard",
    "often_paired_with": "R-HIDES-HAND"
  },
  {
    "reaction_id": "R-POSTS-HANDS",
    "reaction_name": "Posts both hands",
    "description": "Opponent drops hands to mat during stand-up/snapdown.",
    "reaction_type": "defensive",
    "typical_positions": "Standing",
    "often_paired_with": "R-POSTURE-UP"
  },
  {
    "reaction_id": "R-HIDES-HAND",
    "reaction_name": "Hides hand",
    "description": "Opponent tucks wrist/hand to prevent grip.",
    "reaction_type": "defensive",
    "typical_positions": "Any",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-STRAIGHTENS-ARM",
    "reaction_name": "Straightens arm",
    "description": "Opponent extends arm to escape bent-arm submission.",
    "reaction_type": "defensive",
    "typical_positions": "Mount;Side control",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-PULLS-ARM-OUT",
    "reaction_name": "Pulls arm out",
    "description": "Opponent withdraws trapped arm to escape armbar/triangle.",
    "reaction_type": "defensive",
    "typical_positions": "Closed guard",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-STACK",
    "reaction_name": "Stack",
    "description": "Opponent drives hips forward/up over yours to pass or escape.",
    "reaction_type": "offensive",
    "typical_positions": "Closed guard",
    "often_paired_with": "R-POSTURE-UP"
  },
  {
    "reaction_id": "R-WIDE-BASE",
    "reaction_name": "Wide base",
    "description": "Opponent widens stance from passing position.",
    "reaction_type": "defensive",
    "typical_positions": "Closed guard;Half guard",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-OVER-ROTATE",
    "reaction_name": "Over-rotates",
    "description": "Opponent turns too far past centerline exposing the back.",
    "reaction_type": "offensive",
    "typical_positions": "Standing",
    "often_paired_with": "R-POSTS-HAND"
  },
  {
    "reaction_id": "R-HOP",
    "reaction_name": "Hops on one foot",
    "description": "Opponent hops to maintain balance during a single leg.",
    "reaction_type": "defensive",
    "typical_positions": "Standing",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-BAL-BROKEN",
    "reaction_name": "Balance broken",
    "description": "Opponent off-balance / weight captured.",
    "reaction_type": "offensive",
    "typical_positions": "Standing",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-WEIGHT-LOADED",
    "reaction_name": "Weight loaded on foot",
    "description": "Opponent has weight on target foot.",
    "reaction_type": "offensive",
    "typical_positions": "Standing",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-FOLLOWS-DOWN",
    "reaction_name": "Follows to knees",
    "description": "Opponent follows you down after a guard pull.",
    "reaction_type": "offensive",
    "typical_positions": "Standing",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-STAYS-STANDING",
    "reaction_name": "Stays standing",
    "description": "Opponent remains upright after your guard pull.",
    "reaction_type": "neutral",
    "typical_positions": "Standing",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-GIVES-UNDERHOOK",
    "reaction_name": "Gives underhook",
    "description": "Opponent allows you to win inside position.",
    "reaction_type": "offensive",
    "typical_positions": "Half guard",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-CROSSFACE",
    "reaction_name": "Crossface",
    "description": "Forearm pressure across jaw/neck.",
    "reaction_type": "offensive",
    "typical_positions": "Half guard;Passing",
    "often_paired_with": "R-GIVES-UNDERHOOK"
  },
  {
    "reaction_id": "R-NO-POST",
    "reaction_name": "No post",
    "description": "Opponent fails to base out during a sweep.",
    "reaction_type": "offensive",
    "typical_positions": "Closed guard",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-PULLS-AWAY",
    "reaction_name": "Pulls away",
    "description": "Opponent retreats hips/body.",
    "reaction_type": "defensive",
    "typical_positions": "Open guard;Half guard",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-KNEE-IN",
    "reaction_name": "Knee presses inward",
    "description": "Opponent collapses your DLR hook.",
    "reaction_type": "offensive",
    "typical_positions": "Open guard",
    "often_paired_with": "R-KNEE-OUT"
  },
  {
    "reaction_id": "R-KNEE-OUT",
    "reaction_name": "Knee turns outward",
    "description": "Opponent steps knee wide to clear hook.",
    "reaction_type": "offensive",
    "typical_positions": "Open guard",
    "often_paired_with": "R-KNEE-IN"
  },
  {
    "reaction_id": "R-STEPS-BACK",
    "reaction_name": "Steps foot back",
    "description": "Opponent retreats foot to defend a tripod sweep.",
    "reaction_type": "defensive",
    "typical_positions": "Open guard",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-STRIPS-FOOT",
    "reaction_name": "Strips foot from hip",
    "description": "Opponent removes your foot from their hip.",
    "reaction_type": "offensive",
    "typical_positions": "Open guard",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-ROLLS-FORWARD",
    "reaction_name": "Rolls forward",
    "description": "Opponent rolls to escape omoplata.",
    "reaction_type": "defensive",
    "typical_positions": "Open guard",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-FLAT",
    "reaction_name": "Stays flat",
    "description": "Opponent stays flat on back during passing.",
    "reaction_type": "defensive",
    "typical_positions": "Half guard passing",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-TURNS-AWAY",
    "reaction_name": "Turns away",
    "description": "Opponent turns hips/shoulders away.",
    "reaction_type": "defensive",
    "typical_positions": "Side control;Mount",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-FRAMES",
    "reaction_name": "Frames",
    "description": "Opponent creates frames to stop passing or pinning.",
    "reaction_type": "defensive",
    "typical_positions": "Any",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-GETS-UNDERHOOK",
    "reaction_name": "Gets underhook (bottom)",
    "description": "Bottom player wins inside arm position.",
    "reaction_type": "offensive",
    "typical_positions": "Half guard",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-KNEE-SHIELD",
    "reaction_name": "Keeps knee shield",
    "description": "Bottom player maintains shin block.",
    "reaction_type": "defensive",
    "typical_positions": "Half guard",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-EXPOSES-KNEE",
    "reaction_name": "Exposes far knee",
    "description": "Bottom player opens the knee line.",
    "reaction_type": "offensive",
    "typical_positions": "Half guard passing",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-BENDS-ARM",
    "reaction_name": "Bends arm defensively",
    "description": "Opponent tucks forearm to defend Americana.",
    "reaction_type": "defensive",
    "typical_positions": "Side control",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-PUSHES-KNEE",
    "reaction_name": "Pushes knee",
    "description": "Opponent pushes knee-on-belly with hands.",
    "reaction_type": "defensive",
    "typical_positions": "Side control",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-COLLAR-EXPOSED",
    "reaction_name": "Collar exposed",
    "description": "Opponent leaves gi collar accessible.",
    "reaction_type": "offensive",
    "typical_positions": "Any",
    "often_paired_with": "R-DEFENDS-NECK"
  },
  {
    "reaction_id": "R-ELBOWS-LOW",
    "reaction_name": "Elbows low",
    "description": "Opponent keeps elbows tight to prevent arm isolation.",
    "reaction_type": "defensive",
    "typical_positions": "Mount",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-DEFENDS-NECK",
    "reaction_name": "Defends neck",
    "description": "Opponent uses hands to protect neck/collar.",
    "reaction_type": "defensive",
    "typical_positions": "Mount;Back",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-ELBOW-EXPOSED",
    "reaction_name": "Elbow exposed",
    "description": "Opponent elbow accessible from mount/S-mount.",
    "reaction_type": "offensive",
    "typical_positions": "Mount",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-BRIDGE",
    "reaction_name": "Bridges",
    "description": "Opponent bridges hard to escape pin.",
    "reaction_type": "defensive",
    "typical_positions": "Mount",
    "often_paired_with": "R-TURNS-AWAY"
  },
  {
    "reaction_id": "R-FIGHTS-HAND",
    "reaction_name": "Fights top hand",
    "description": "Opponent fights the choking-hand wrist.",
    "reaction_type": "defensive",
    "typical_positions": "Back control",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-HIPS-TO-FLOOR",
    "reaction_name": "Gets shoulders/hips to floor",
    "description": "Back escape in progress.",
    "reaction_type": "defensive",
    "typical_positions": "Back control",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-TURNS-TO-CHOKE-ARM",
    "reaction_name": "Turns toward choke arm",
    "description": "Opponent turns into strong-side shoulder to escape back.",
    "reaction_type": "defensive",
    "typical_positions": "Back control",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-OVER-DEFENDS",
    "reaction_name": "Over-defends choke arm",
    "description": "Opponent commits two hands to defending choke.",
    "reaction_type": "defensive",
    "typical_positions": "Back control",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-NECK-EXPOSED",
    "reaction_name": "Neck exposed",
    "description": "Opponent leaves neck open.",
    "reaction_type": "offensive",
    "typical_positions": "Front headlock",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-DEFENDS-HANDS",
    "reaction_name": "Defends hands (guillotine)",
    "description": "Opponent grips your choking arm with two hands.",
    "reaction_type": "defensive",
    "typical_positions": "Front headlock",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-POSTS-ARM-ACROSS",
    "reaction_name": "Posts arm across",
    "description": "Opponent reaches across body to base.",
    "reaction_type": "defensive",
    "typical_positions": "Front headlock",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-REACHES-UNDERHOOK",
    "reaction_name": "Reaches underhook",
    "description": "Opponent attempts underhook from turtle/half.",
    "reaction_type": "offensive",
    "typical_positions": "Front headlock",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-SHELLS-UP",
    "reaction_name": "Shells up (turtle)",
    "description": "Opponent rounds into turtle defensively.",
    "reaction_type": "defensive",
    "typical_positions": "Front headlock",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-PULLS-GUARD",
    "reaction_name": "Pulls guard",
    "description": "Opponent pulls you into their guard.",
    "reaction_type": "offensive",
    "typical_positions": "Standing;Front headlock",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-COLLAR-TIE",
    "reaction_name": "Establishes collar tie",
    "description": "Opponent gets hand behind your neck.",
    "reaction_type": "offensive",
    "typical_positions": "Standing",
    "often_paired_with": "R-UNDERHOOK-FIGHT"
  },
  {
    "reaction_id": "R-UNDERHOOK-FIGHT",
    "reaction_name": "Underhook battle",
    "description": "Both players fighting for inside arm position.",
    "reaction_type": "neutral",
    "typical_positions": "Standing;Half guard",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-HIGH-C",
    "reaction_name": "Shoots high crotch",
    "description": "Opponent attacks inside leg high.",
    "reaction_type": "offensive",
    "typical_positions": "Standing",
    "often_paired_with": "R-SPRAWL"
  },
  {
    "reaction_id": "R-DUCK-UNDER",
    "reaction_name": "Ducks under",
    "description": "Opponent slips under your arm to back.",
    "reaction_type": "offensive",
    "typical_positions": "Standing",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-HEAD-OUTSIDE",
    "reaction_name": "Head outside on single",
    "description": "Opponent leaves head on outside of leg.",
    "reaction_type": "defensive",
    "typical_positions": "Standing",
    "often_paired_with": "R-GUILLOTINE-SETUP"
  },
  {
    "reaction_id": "R-GUILLOTINE-SETUP",
    "reaction_name": "Sets up guillotine",
    "description": "Opponent wraps your neck during scramble.",
    "reaction_type": "offensive",
    "typical_positions": "Standing;Front headlock",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-RUNS-PIPE",
    "reaction_name": "Runs the pipe on you",
    "description": "Opponent finishes single by circling.",
    "reaction_type": "offensive",
    "typical_positions": "Standing",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-LIFTS-LEG",
    "reaction_name": "Lifts your leg",
    "description": "Opponent elevates captured leg.",
    "reaction_type": "offensive",
    "typical_positions": "Standing",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-STANDS-IN-GUARD",
    "reaction_name": "Stands in your guard",
    "description": "Opponent stands up to break closed guard.",
    "reaction_type": "defensive",
    "typical_positions": "Closed guard",
    "often_paired_with": "R-BREAKS-GUARD"
  },
  {
    "reaction_id": "R-BREAKS-GUARD",
    "reaction_name": "Breaks closed guard",
    "description": "Opponent opens your locked legs.",
    "reaction_type": "offensive",
    "typical_positions": "Closed guard",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-KNEE-PIN",
    "reaction_name": "Knee pin (combat base)",
    "description": "Opponent postures on one knee in combat base.",
    "reaction_type": "defensive",
    "typical_positions": "Closed guard",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-HEADQUARTERS",
    "reaction_name": "Establishes headquarters",
    "description": "Opponent controls your far knee while outside DLR/SLX.",
    "reaction_type": "offensive",
    "typical_positions": "Open guard",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-LEG-DRAG",
    "reaction_name": "Leg drag pass",
    "description": "Opponent crosses your leg to opposite side to pass.",
    "reaction_type": "offensive",
    "typical_positions": "Open guard",
    "often_paired_with": "R-GRAB-UNDERHOOK"
  },
  {
    "reaction_id": "R-GRAB-UNDERHOOK",
    "reaction_name": "Grabs underhook to recover",
    "description": "Bottom player reaches for underhook during leg drag.",
    "reaction_type": "defensive",
    "typical_positions": "Open guard",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-TORREANDO",
    "reaction_name": "Torreando/bullfighter pass",
    "description": "Opponent pushes legs aside and sprints around.",
    "reaction_type": "offensive",
    "typical_positions": "Open guard",
    "often_paired_with": "R-RECOVER-GUARD"
  },
  {
    "reaction_id": "R-RECOVER-GUARD",
    "reaction_name": "Recovers guard",
    "description": "Bottom player re-establishes guard.",
    "reaction_type": "defensive",
    "typical_positions": "Any",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-OVER-UNDER",
    "reaction_name": "Over-under pass",
    "description": "Opponent stacks one leg, underhooks the other.",
    "reaction_type": "offensive",
    "typical_positions": "Open guard",
    "often_paired_with": "R-GRAB-UNDERHOOK"
  },
  {
    "reaction_id": "R-FOLDS-LEG",
    "reaction_name": "Folds your leg",
    "description": "Opponent folds your leg during pass/entry.",
    "reaction_type": "offensive",
    "typical_positions": "Any",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-TRIPODS-UP",
    "reaction_name": "Tripods up",
    "description": "Opponent posts on one hand + both feet to defend/reposition.",
    "reaction_type": "defensive",
    "typical_positions": "Guard",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-TURTLE",
    "reaction_name": "Goes to turtle",
    "description": "Opponent shells up on hands/knees.",
    "reaction_type": "defensive",
    "typical_positions": "Any",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-ROLLS-THROUGH",
    "reaction_name": "Rolls through",
    "description": "Opponent rolls forward/side to escape.",
    "reaction_type": "defensive",
    "typical_positions": "Any",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-FRAMES-KNEE",
    "reaction_name": "Frames on knee",
    "description": "Opponent places hand/arm on your knee to stop you.",
    "reaction_type": "defensive",
    "typical_positions": "Any",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-LEG-PUMMEL",
    "reaction_name": "Leg pummels",
    "description": "Opponent pummels inside leg position in leg entanglement.",
    "reaction_type": "offensive",
    "typical_positions": "Leg entanglement",
    "often_paired_with": "R-KICK-FREE"
  },
  {
    "reaction_id": "R-KICK-FREE",
    "reaction_name": "Kicks leg free",
    "description": "Opponent frees leg from entanglement.",
    "reaction_type": "defensive",
    "typical_positions": "Leg entanglement",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-ROTATES-OUT",
    "reaction_name": "Rotates out of leg lock",
    "description": "Opponent rotates hips to defend heel hook/ankle lock.",
    "reaction_type": "defensive",
    "typical_positions": "Leg entanglement",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-BOOTS-UP",
    "reaction_name": "Boots up / pulls foot up",
    "description": "Opponent defends by pulling foot up and away from heel hook.",
    "reaction_type": "defensive",
    "typical_positions": "Leg entanglement",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-CROSSES-KNEE",
    "reaction_name": "Crosses knee line",
    "description": "Opponent clears your knee line during a pass.",
    "reaction_type": "offensive",
    "typical_positions": "Passing",
    "often_paired_with": "R-FRAMES"
  },
  {
    "reaction_id": "R-LONG-STEP",
    "reaction_name": "Long-step pass",
    "description": "Opponent long-steps around legs.",
    "reaction_type": "offensive",
    "typical_positions": "Half guard;SLX",
    "often_paired_with": "R-COME-UP"
  },
  {
    "reaction_id": "R-COME-UP",
    "reaction_name": "Comes up on you",
    "description": "Bottom player climbs to single/dogfight during passing.",
    "reaction_type": "defensive",
    "typical_positions": "Half guard",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-RE-GUARDS",
    "reaction_name": "Re-guards",
    "description": "Bottom player recovers from near-pass.",
    "reaction_type": "defensive",
    "typical_positions": "Passing",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-CIRCLES",
    "reaction_name": "Circles to escape",
    "description": "Opponent circles hips/body to escape pin/position.",
    "reaction_type": "defensive",
    "typical_positions": "Any",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-DOUBLE-WRIST",
    "reaction_name": "Double-wrist control",
    "description": "Opponent two-hand-grips your wrist to defend choke.",
    "reaction_type": "defensive",
    "typical_positions": "Back;Front headlock",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-FIGHTS-GRIPS",
    "reaction_name": "Fights/strips grips",
    "description": "Opponent actively strips your grips.",
    "reaction_type": "defensive",
    "typical_positions": "Any",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-OPENS-ELBOW",
    "reaction_name": "Opens elbow",
    "description": "Opponent elbow moves off body, exposing arm.",
    "reaction_type": "offensive",
    "typical_positions": "Mount;Back",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-SIT-OUT",
    "reaction_name": "Sit-out",
    "description": "Opponent sits through from turtle/front headlock.",
    "reaction_type": "defensive",
    "typical_positions": "Front headlock;Turtle",
    "often_paired_with": "R-BACK-TO-GUARD"
  },
  {
    "reaction_id": "R-BACK-TO-GUARD",
    "reaction_name": "Back to guard",
    "description": "Opponent regains guard from turtle.",
    "reaction_type": "defensive",
    "typical_positions": "Turtle",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-GRANBY",
    "reaction_name": "Granby roll",
    "description": "Opponent rolls over shoulder to escape back/turtle.",
    "reaction_type": "defensive",
    "typical_positions": "Back;Turtle",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-STANDS-UP",
    "reaction_name": "Stands up",
    "description": "Opponent stands up from position.",
    "reaction_type": "defensive",
    "typical_positions": "Any",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-SWIMS-INSIDE",
    "reaction_name": "Swims inside",
    "description": "Opponent pummels arm inside for underhook.",
    "reaction_type": "offensive",
    "typical_positions": "Any",
    "often_paired_with": "R-UNDERHOOK-FIGHT"
  },
  {
    "reaction_id": "R-2-ON-1",
    "reaction_name": "Two-on-one",
    "description": "Opponent wins a 2-on-1 grip.",
    "reaction_type": "offensive",
    "typical_positions": "Standing;Guard",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-HAND-FIGHT",
    "reaction_name": "Hand fighting",
    "description": "Active grip exchange; no clear winner yet.",
    "reaction_type": "neutral",
    "typical_positions": "Standing;Back",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-BASES-POSTS",
    "reaction_name": "Bases and posts",
    "description": "Opponent distributes weight wide with posts after being swept partially.",
    "reaction_type": "defensive",
    "typical_positions": "Guard",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-WAITS",
    "reaction_name": "Passive/waits",
    "description": "Opponent stalls without committing.",
    "reaction_type": "neutral",
    "typical_positions": "Any",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-SPINS-OUT",
    "reaction_name": "Spins out",
    "description": "Opponent spins out of position/scramble.",
    "reaction_type": "defensive",
    "typical_positions": "Any",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-OVERHOOKS",
    "reaction_name": "Overhooks your arm",
    "description": "Opponent takes overhook on you.",
    "reaction_type": "defensive",
    "typical_positions": "Guard passing",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-ROTATES-AWAY",
    "reaction_name": "Rotates shoulder/hips away",
    "description": "Subtle rotational escape from pins.",
    "reaction_type": "defensive",
    "typical_positions": "Side control;Mount",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-LEG-STAPLE",
    "reaction_name": "Staples your leg",
    "description": "Opponent pins one of your legs for passing.",
    "reaction_type": "offensive",
    "typical_positions": "Open guard",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-CROSS-GRIPS",
    "reaction_name": "Cross-grips",
    "description": "Opponent uses cross grip (opposite-side grip).",
    "reaction_type": "offensive",
    "typical_positions": "Open guard",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-KNEE-CUT-THREAT",
    "reaction_name": "Knee cut threat",
    "description": "Opponent loads knee cut.",
    "reaction_type": "offensive",
    "typical_positions": "Half guard",
    "often_paired_with": "R-UNDERHOOK-FIGHT"
  },
  {
    "reaction_id": "R-GUARD-RETENTION",
    "reaction_name": "Retains guard",
    "description": "Opponent actively frames/resets to keep guard.",
    "reaction_type": "defensive",
    "typical_positions": "Passing",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-ELBOW-ESCAPE",
    "reaction_name": "Elbow escape",
    "description": "Opponent shrimps and recovers guard from mount.",
    "reaction_type": "defensive",
    "typical_positions": "Mount",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-UPA",
    "reaction_name": "Upa / trap-and-roll",
    "description": "Opponent bridges to escape mount.",
    "reaction_type": "defensive",
    "typical_positions": "Mount",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-PANTS-GRIP-DEFENSE",
    "reaction_name": "Controls your pants",
    "description": "Opponent grips your pants to defend pass.",
    "reaction_type": "defensive",
    "typical_positions": "Passing",
    "often_paired_with": "R-STRIP-GRIPS"
  },
  {
    "reaction_id": "R-STRIP-GRIPS",
    "reaction_name": "Strips grips",
    "description": "Opponent strips your grips before you can attack.",
    "reaction_type": "defensive",
    "typical_positions": "Any",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-HAND-ON-BELT",
    "reaction_name": "Hand in belt/waistband",
    "description": "Opponent controls your belt during scramble.",
    "reaction_type": "defensive",
    "typical_positions": "Turtle;Scramble",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-MATRIX",
    "reaction_name": "Matrixes away",
    "description": "Opponent leans backward to avoid choke/grip.",
    "reaction_type": "defensive",
    "typical_positions": "Any",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-CROSS-FACE-ESCAPE",
    "reaction_name": "Clears crossface",
    "description": "Opponent clears your crossface.",
    "reaction_type": "defensive",
    "typical_positions": "Passing",
    "often_paired_with": "R-GETS-UNDERHOOK"
  },
  {
    "reaction_id": "R-INVERTS",
    "reaction_name": "Inverts",
    "description": "Opponent inverts under you (upside down guard).",
    "reaction_type": "defensive",
    "typical_positions": "Passing",
    "often_paired_with": null
  },
  {
    "reaction_id": "R-PASSIVE-BOTTOM",
    "reaction_name": "Stalling on bottom",
    "description": "Bottom player playing defensively only.",
    "reaction_type": "neutral",
    "typical_positions": "Any",
    "often_paired_with": null
  }
];
