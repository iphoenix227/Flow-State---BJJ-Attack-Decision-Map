import { create } from "zustand";
import type { AppFilters } from "@/types";
import { seedTrainingLog, type TrainingLogEntry } from "@/data/trainingLog";

export type View =
  | "tree"
  | "glossary"
  | "concepts"
  | "dashboard"
  | "overview"
  | "reactions"
  | "grips"
  | "training_log";

export interface DrillRecord {
  date: string;
}

interface AppState {
  view: View;
  setView: (v: View) => void;
  positionId: string;
  setPositionId: (id: string) => void;
  selectedNodeId: string | null;
  setSelectedNodeId: (id: string | null) => void;
  filters: AppFilters;
  setFilters: (f: Partial<AppFilters>) => void;
  showMistakeReactions: boolean;
  setShowMistakeReactions: (show: boolean) => void;
  mistakesOnly: boolean;
  setMistakesOnly: (only: boolean) => void;

  // Drill progress (persisted)
  drilledNodes: Record<string, DrillRecord>;
  toggleDrilled: (id: string) => void;
  resetDrilled: () => void;

  // Chain navigation: tree subscribes to this to auto-expand a target action.
  pendingExpandAction: string | null;
  setPendingExpandAction: (id: string | null) => void;

  videoUrls: Record<string, string>;
  setVideoUrl: (slot: string, url: string) => void;
  trainingLog: TrainingLogEntry[];
  addTrainingEntry: (e: TrainingLogEntry) => void;
  updateTrainingEntry: (id: string, patch: Partial<TrainingLogEntry>) => void;
  deleteTrainingEntry: (id: string) => void;
}

const DRILL_KEY = "bjj_drilled_nodes";
const VIDEO_KEY = "bjj_videos_v1";
const POS_KEY = "bjj_last_position_v1";
const LOG_KEY = "bjj_training_log";
const MISTAKES_KEY = "bjj_show_mistakes_v1";
const MISTAKES_ONLY_KEY = "bjj_mistakes_only_v1";

const load = <T>(k: string, fallback: T): T => {
  try {
    const v = localStorage.getItem(k);
    return v ? JSON.parse(v) : fallback;
  } catch {
    return fallback;
  }
};

// Migrate old `bjj_studied_v1` boolean map → new dated drill map (one-time).
const initialDrilled = (() => {
  const fresh = load<Record<string, DrillRecord> | null>(DRILL_KEY, null);
  if (fresh) return fresh;
  const legacy = load<Record<string, boolean>>("bjj_studied_v1", {});
  const today = new Date().toISOString().slice(0, 10);
  const migrated: Record<string, DrillRecord> = {};
  Object.entries(legacy).forEach(([k, v]) => {
    if (v) migrated[k] = { date: today };
  });
  if (Object.keys(migrated).length)
    localStorage.setItem(DRILL_KEY, JSON.stringify(migrated));
  return migrated;
})();

const initialLog = (() => {
  const stored = load<TrainingLogEntry[] | null>(LOG_KEY, null);
  if (stored && Array.isArray(stored)) return stored;
  return [...seedTrainingLog];
})();

const persistLog = (l: TrainingLogEntry[]) =>
  localStorage.setItem(LOG_KEY, JSON.stringify(l));
const persistDrill = (d: Record<string, DrillRecord>) =>
  localStorage.setItem(DRILL_KEY, JSON.stringify(d));

export const useAppStore = create<AppState>((set, get) => ({
  view: "overview",
  setView: (v) => set({ view: v }),
  positionId: load<string>(POS_KEY, "CG-ROOT"),
  setPositionId: (id) => {
    localStorage.setItem(POS_KEY, JSON.stringify(id));
    set({ positionId: id, selectedNodeId: null });
  },
  selectedNodeId: null,
  setSelectedNodeId: (id) => set({ selectedNodeId: id }),
  filters: { gi: ["gi"], skills: ["White"], priorities: [], chains: [] },
  setFilters: (f) => set({ filters: { ...get().filters, ...f } }),
  showMistakeReactions: load<boolean>(MISTAKES_KEY, false),
  setShowMistakeReactions: (show) => {
    localStorage.setItem(MISTAKES_KEY, JSON.stringify(show));
    const next = { showMistakeReactions: show };
    if (!show && get().mistakesOnly) {
      localStorage.setItem(MISTAKES_ONLY_KEY, JSON.stringify(false));
      set({ ...next, mistakesOnly: false });
      return;
    }
    set(next);
  },
  mistakesOnly: load<boolean>(MISTAKES_ONLY_KEY, false),
  setMistakesOnly: (only) => {
    localStorage.setItem(MISTAKES_ONLY_KEY, JSON.stringify(only));
    if (only) {
      localStorage.setItem(MISTAKES_KEY, JSON.stringify(true));
      set({ mistakesOnly: true, showMistakeReactions: true });
      return;
    }
    set({ mistakesOnly: false });
  },

  drilledNodes: initialDrilled,
  toggleDrilled: (id) => {
    const cur = get().drilledNodes;
    const next = { ...cur };
    if (next[id]) delete next[id];
    else next[id] = { date: new Date().toISOString().slice(0, 10) };
    persistDrill(next);
    set({ drilledNodes: next });
  },
  resetDrilled: () => {
    persistDrill({});
    set({ drilledNodes: {} });
  },

  pendingExpandAction: null,
  setPendingExpandAction: (id) => set({ pendingExpandAction: id }),

  videoUrls: load<Record<string, string>>(VIDEO_KEY, {}),
  setVideoUrl: (slot, url) => {
    const next = { ...get().videoUrls, [slot]: url };
    localStorage.setItem(VIDEO_KEY, JSON.stringify(next));
    set({ videoUrls: next });
  },
  trainingLog: initialLog,
  addTrainingEntry: (e) => {
    const next = [e, ...get().trainingLog];
    persistLog(next);
    set({ trainingLog: next });
  },
  updateTrainingEntry: (id, patch) => {
    const next = get().trainingLog.map((t) =>
      t.id === id ? { ...t, ...patch } : t,
    );
    persistLog(next);
    set({ trainingLog: next });
  },
  deleteTrainingEntry: (id) => {
    const next = get().trainingLog.filter((t) => t.id !== id);
    persistLog(next);
    set({ trainingLog: next });
  },
}));
