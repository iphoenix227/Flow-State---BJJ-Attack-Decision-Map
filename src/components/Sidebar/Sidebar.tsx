import { useMemo, type MouseEvent } from "react";
import { positions } from "@/data/positions";
import { useAppStore } from "@/store/useAppStore";
import { allChainFamilies, rowsForPosition } from "@/lib/bjj";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import type { GiRuleset, PriorityLevel, SkillLevel } from "@/types";
import {
  Sheet,
  SheetContent,
} from "@/components/ui/sheet";
import {
  Map,
  Library,
  BookOpen,
  BarChart3,
  Hand,
  Grip as GripIcon,
  NotebookPen,
} from "lucide-react";
import { DataBackup } from "@/components/DataBackup/DataBackup";

const familyOrder = [
  ["standing", "Standing"],
  ["guard_bottom", "Guard (Bottom)"],
  ["passing_top", "Passing"],
  ["pin_top", "Pins"],
  ["back_control", "Back"],
  ["front_headlock", "Front Headlock"],
  ["turtle", "Turtle"],
  ["leg_entanglement", "Leg Entanglement"],
];

const formatChainFamilyLabel = (value: string) =>
  value
    .split("_")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

type SidebarProps = {
  mobileOpen?: boolean;
  onMobileOpenChange?: (open: boolean) => void;
};

export const Sidebar = ({ mobileOpen, onMobileOpenChange }: SidebarProps) => {
  const isMobile = useIsMobile();
  const content = (
    <SidebarContent onNavigate={() => onMobileOpenChange?.(false)} />
  );

  if (isMobile) {
    return (
      <Sheet open={mobileOpen} onOpenChange={onMobileOpenChange}>
        <SheetContent
          side="left"
          className="w-[min(100vw,320px)] max-w-[320px] p-0 gap-0 border-r border-border bg-sidebar z-[1200] pt-[env(safe-area-inset-top,0px)]"
        >
          {content}
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <aside className="w-[280px] shrink-0 border-r border-border bg-sidebar h-full flex flex-col overflow-hidden">
      {content}
    </aside>
  );
};

const SidebarContent = ({ onNavigate }: { onNavigate?: () => void }) => {
  const isMobile = useIsMobile();
  const {
    positionId,
    setPositionId,
    view,
    setView,
    filters,
    setFilters,
    showMistakeReactions,
    setShowMistakeReactions,
    mistakesOnly,
    setMistakesOnly,
    drilledNodes,
  } = useAppStore();

  const grouped = useMemo(() => {
    const g: Record<string, typeof positions> = {};
    positions.forEach((p) => {
      (g[p.position_family] ||= []).push(p);
    });
    return g;
  }, []);

  const progress = (pid: string) => {
    const rows = rowsForPosition(pid);
    const total = rows.length;
    const done = rows.filter((r) => !!drilledNodes[String(r.node_id)]).length;
    const pct = total === 0 ? 0 : Math.round((done / total) * 100);
    return { done, total, pct };
  };

  const barColor = (pct: number, total: number) => {
    if (total === 0 || pct === 0) return "bg-muted-foreground/40";
    if (pct === 100) return "bg-followup";
    if (pct >= 50) return "bg-[hsl(210_70%_55%)]";
    return "bg-gold";
  };

  const goToView = (v: string) => {
    setView(v as Parameters<typeof setView>[0]);
    onNavigate?.();
  };

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="p-4 border-b border-sidebar-border shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-gold flex items-center justify-center text-background font-display font-bold">
            柔
          </div>
          <div>
            <div className="font-display text-lg leading-none">FLOW STATE</div>
            <div className="text-[10px] text-muted-foreground tracking-widest">
              BJJ ATTACK DECISION MAP
            </div>
          </div>
        </div>
      </div>

      <nav className="grid grid-cols-4 gap-1 p-2 border-b border-sidebar-border text-[10px] shrink-0">
        {[
          { v: "tree", label: "Tree", icon: Map },
          { v: "reactions", label: "Reactions", icon: Hand },
          { v: "grips", label: "Grips", icon: GripIcon },
          { v: "training_log", label: "Log", icon: NotebookPen },
          { v: "glossary", label: "Glossary", icon: BookOpen },
          { v: "concepts", label: "Concepts", icon: Library },
          { v: "dashboard", label: "Stats", icon: BarChart3 },
        ].map(({ v, label, icon: Icon }) => (
          <button
            key={v}
            onClick={() => goToView(v)}
            className={cn(
              "flex flex-col items-center gap-1 p-2 rounded transition-colors min-h-[52px]",
              view === v
                ? "bg-gold text-background"
                : "text-muted-foreground hover:bg-sidebar-accent hover:text-foreground",
            )}
          >
            <Icon size={14} />
            <span className="uppercase tracking-wider">{label}</span>
          </button>
        ))}
      </nav>

      <div className="flex-1 overflow-y-auto scrollbar-thin overscroll-contain">
        <div className="p-3">
          <button
            onClick={() => {
              setView("overview");
              onNavigate?.();
            }}
            className={cn(
              "w-full text-left p-2 rounded border text-xs uppercase tracking-wider mb-3 transition-colors min-h-[40px]",
              view === "overview"
                ? "border-gold bg-gold/10 text-gold"
                : "border-border text-muted-foreground hover:border-gold/60 hover:text-gold",
            )}
          >
            ◆ Position Map Overview
          </button>

          <div className="text-[10px] text-muted-foreground uppercase tracking-widest mb-2">
            Positions
          </div>
          {familyOrder.map(
            ([key, label]) =>
              grouped[key] && (
                <div key={key} className="mb-3">
                  <div className="text-[10px] text-gold/70 uppercase tracking-wider mb-1">
                    {label}
                  </div>
                  <div className="space-y-1">
                    {grouped[key].map((p) => {
                      const { done, total, pct } = progress(p.position_id);
                      const active =
                        positionId === p.position_id && view === "tree";
                      const complete = total > 0 && pct === 100;
                      return (
                        <button
                          key={p.position_id}
                          onClick={() => {
                            setPositionId(p.position_id);
                            setView("tree");
                            onNavigate?.();
                          }}
                          className={cn(
                            "w-full text-left px-2.5 py-2 rounded border text-xs transition-all min-h-[44px]",
                            active
                              ? "border-gold bg-gold/15 text-foreground glow-gold"
                              : "border-border bg-card hover:border-gold/50",
                          )}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-medium truncate">
                              {p.position_name}
                            </span>
                            {complete && (
                              <span className="text-[9px] px-1 rounded bg-followup/20 text-followup shrink-0">
                                🏆
                              </span>
                            )}
                          </div>
                          {total > 0 && (
                            <div className="mt-1.5 flex items-center gap-1.5">
                              <div className="flex-1 h-1.5 rounded-full bg-secondary overflow-hidden">
                                <div
                                  className={cn(
                                    "h-full transition-all",
                                    barColor(pct, total),
                                  )}
                                  style={{ width: `${pct}%` }}
                                />
                              </div>
                              <span className="text-[9px] text-muted-foreground tabular-nums shrink-0">
                                {done}/{total}
                              </span>
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ),
          )}
        </div>

        <div className="p-3 border-t border-sidebar-border pb-[max(0.75rem,env(safe-area-inset-bottom))]">
          <div className="flex items-center justify-between mb-2">
            <div className="text-[10px] text-muted-foreground uppercase tracking-widest">
              Filters
            </div>
            <button
              onClick={() =>
                setFilters({
                  gi: [],
                  skills: [],
                  priorities: [],
                  chains: [],
                })
              }
              className="text-[10px] uppercase tracking-wider text-muted-foreground hover:text-gold transition-colors min-h-[32px] px-1"
            >
              ✕ Clear
            </button>
          </div>
          <p className="text-[9px] text-muted-foreground/80 mb-2 leading-snug">
            {isMobile
              ? "Tap pills to combine filters"
              : "Ctrl+click to combine filters"}
          </p>

          <FilterRow label="Ruleset">
            {(["both", "gi", "no_gi"] as const).map((v) => (
              <Pill
                key={v}
                active={
                  v === "both"
                    ? filters.gi.length === 0
                    : filters.gi.includes(v)
                }
                onClick={(e) =>
                  setFilters({
                    gi: pillSelection(
                      filters.gi,
                      v === "both" ? null : v,
                      e,
                      isMobile,
                    ) as GiRuleset[],
                  })
                }
              >
                {v === "both" ? "Both" : v === "gi" ? "Gi" : "No-Gi"}
              </Pill>
            ))}
          </FilterRow>

          <FilterRow label="Skill">
            {(
              ["All", "White", "Blue", "Purple", "Brown", "Black"] as const
            ).map((v) => (
              <Pill
                key={v}
                active={
                  v === "All"
                    ? filters.skills.length === 0
                    : filters.skills.includes(v)
                }
                onClick={(e) =>
                  setFilters({
                    skills: pillSelection(
                      filters.skills,
                      v === "All" ? null : v,
                      e,
                      isMobile,
                    ) as SkillLevel[],
                  })
                }
              >
                {v}
              </Pill>
            ))}
          </FilterRow>

          <FilterRow label="Priority">
            {(["All", "A-game", "Common", "Optional"] as const).map((v) => (
              <Pill
                key={v}
                active={
                  v === "All"
                    ? filters.priorities.length === 0
                    : filters.priorities.includes(v)
                }
                onClick={(e) =>
                  setFilters({
                    priorities: pillSelection(
                      filters.priorities,
                      v === "All" ? null : v,
                      e,
                      isMobile,
                    ) as PriorityLevel[],
                  })
                }
              >
                {v}
              </Pill>
            ))}
          </FilterRow>

          <div className="mt-2 mb-2 pt-2 border-t border-sidebar-border/60">
            <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1.5">
              Tree legend
            </div>
            <div className="flex flex-col gap-1 mb-2">
              <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                <span className="w-2.5 h-2.5 rounded-sm border border-response bg-response/20 shrink-0" />
                Partner response
              </div>
              <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                <span className="w-2.5 h-2.5 rounded-sm border border-response-mistake bg-response-mistake/20 shrink-0" />
                Partner mistake
              </div>
            </div>
            <label className="flex items-center gap-2 text-[10px] cursor-pointer text-muted-foreground hover:text-foreground min-h-[36px]">
              <input
                type="checkbox"
                checked={showMistakeReactions}
                onChange={(e) => setShowMistakeReactions(e.target.checked)}
                disabled={mistakesOnly}
                className="accent-gold w-4 h-4 disabled:opacity-40"
              />
              Show partner mistakes
            </label>
            <label className="flex items-center gap-2 text-[10px] cursor-pointer text-muted-foreground hover:text-foreground min-h-[36px]">
              <input
                type="checkbox"
                checked={mistakesOnly}
                onChange={(e) => setMistakesOnly(e.target.checked)}
                className="accent-response-mistake w-4 h-4"
              />
              Mistakes only
            </label>
          </div>

          <div className="mt-3">
            <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">
              Chain Family
            </div>
            <div className="max-h-32 overflow-y-auto scrollbar-thin space-y-1">
              {allChainFamilies.map((c) => {
                const checked = filters.chains.includes(c);
                return (
                  <label
                    key={c}
                    className="flex items-center gap-2 text-[11px] cursor-pointer hover:text-foreground text-muted-foreground min-h-[36px]"
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => {
                        const next = checked
                          ? filters.chains.filter((x) => x !== c)
                          : [...filters.chains, c];
                        setFilters({ chains: next });
                      }}
                      className="accent-gold w-4 h-4"
                    />
                    {formatChainFamilyLabel(c)}
                  </label>
                );
              })}
            </div>
          </div>

          <DataBackup />
        </div>
      </div>
    </div>
  );
};

const FilterRow = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <div className="mb-2">
    <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">
      {label}
    </div>
    <div className="flex flex-wrap gap-1">{children}</div>
  </div>
);

function pillSelection<T extends string>(
  current: T[],
  value: T | null,
  e: MouseEvent,
  touchMulti = false,
): T[] {
  if (value === null) return [];
  const multi = touchMulti || e.ctrlKey || e.metaKey;
  if (multi) {
    return current.includes(value)
      ? current.filter((x) => x !== value)
      : [...current, value];
  }
  if (current.length === 1 && current[0] === value) return [];
  return [value];
}

const Pill = ({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}) => (
  <button
    onClick={onClick}
    className={cn(
      "px-2.5 py-1.5 rounded text-[10px] uppercase tracking-wider border transition-colors min-h-[36px]",
      active
        ? "border-gold bg-gold text-background"
        : "border-border text-muted-foreground hover:border-gold/60 hover:text-foreground",
    )}
  >
    {children}
  </button>
);
