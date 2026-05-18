import type { AppFilters } from "@/types";
import type { DrillRecord } from "@/store/useAppStore";
import type { TrainingLogEntry } from "@/data/trainingLog";

export const BACKUP_VERSION = 1;

export type FlowStateBackup = {
  version: number;
  exportedAt: string;
  drills: Record<string, DrillRecord>;
  videos: Record<string, string>;
  lastPosition: string;
  trainingLog: TrainingLogEntry[];
  showMistakes: boolean;
  mistakesOnly: boolean;
  filters: AppFilters;
};

const KEYS = {
  drills: "bjj_drilled_nodes",
  videos: "bjj_videos_v1",
  lastPosition: "bjj_last_position_v1",
  trainingLog: "bjj_training_log",
  showMistakes: "bjj_show_mistakes_v1",
  mistakesOnly: "bjj_mistakes_only_v1",
  filters: "bjj_filters_v1",
} as const;

const loadJson = <T>(key: string, fallback: T): T => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
};

const defaultFilters: AppFilters = {
  gi: ["gi"],
  skills: ["White"],
  priorities: [],
  chains: [],
};

export function buildBackup(): FlowStateBackup {
  return {
    version: BACKUP_VERSION,
    exportedAt: new Date().toISOString(),
    drills: loadJson(KEYS.drills, {}),
    videos: loadJson(KEYS.videos, {}),
    lastPosition: loadJson(KEYS.lastPosition, "CG-ROOT"),
    trainingLog: loadJson(KEYS.trainingLog, []),
    showMistakes: loadJson(KEYS.showMistakes, false),
    mistakesOnly: loadJson(KEYS.mistakesOnly, false),
    filters: loadJson(KEYS.filters, defaultFilters),
  };
}

export function applyBackup(data: FlowStateBackup): void {
  localStorage.setItem(KEYS.drills, JSON.stringify(data.drills ?? {}));
  localStorage.setItem(KEYS.videos, JSON.stringify(data.videos ?? {}));
  localStorage.setItem(
    KEYS.lastPosition,
    JSON.stringify(data.lastPosition ?? "CG-ROOT"),
  );
  localStorage.setItem(
    KEYS.trainingLog,
    JSON.stringify(data.trainingLog ?? []),
  );
  localStorage.setItem(
    KEYS.showMistakes,
    JSON.stringify(!!data.showMistakes),
  );
  localStorage.setItem(
    KEYS.mistakesOnly,
    JSON.stringify(!!data.mistakesOnly),
  );
  localStorage.setItem(
    KEYS.filters,
    JSON.stringify(data.filters ?? defaultFilters),
  );
}

export function downloadBackup(): void {
  const payload = buildBackup();
  const blob = new Blob([JSON.stringify(payload, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `flow-state-backup-${payload.exportedAt.slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

export function parseBackupFile(file: File): Promise<FlowStateBackup> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(String(reader.result)) as FlowStateBackup;
        if (!data || typeof data !== "object") {
          reject(new Error("Invalid backup file"));
          return;
        }
        resolve(data);
      } catch {
        reject(new Error("Could not parse backup file"));
      }
    };
    reader.onerror = () => reject(new Error("Could not read file"));
    reader.readAsText(file);
  });
}
