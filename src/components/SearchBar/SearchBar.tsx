import { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";
import { useAppStore } from "@/store/useAppStore";
import { searchRows, findPositionIdForRow } from "@/lib/bjj";
import { touchInputClass } from "@/lib/layout";
import { cn } from "@/lib/utils";

export const SearchBar = () => {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { setPositionId, setSelectedNodeId, setView } = useAppStore();
  const results = searchRows(q);
  const trimmed = q.trim();

  useEffect(() => {
    const close = (e: Event) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    document.addEventListener("touchstart", close);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("touchstart", close);
    };
  }, []);

  return (
    <div ref={ref} className="relative w-full max-w-md">
      <div className="relative">
        <Search
          size={14}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
        />
        <input
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder="Search moves, responses, notes…"
          enterKeyHint="search"
          autoComplete="off"
          autoCorrect="off"
          className={cn(
            "w-full bg-secondary border border-border rounded-md pl-9 pr-8 py-2.5 md:py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors",
            touchInputClass,
          )}
        />
        {q && (
          <button
            type="button"
            onClick={() => {
              setQ("");
              setOpen(false);
            }}
            aria-label="Clear search"
            className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-1"
          >
            <X size={14} />
          </button>
        )}
      </div>
      {open && trimmed.length > 0 && (
        <div className="absolute top-full mt-1 w-full bg-card border border-border rounded-md shadow-2xl z-[1200] max-h-[min(24rem,50dvh)] overflow-y-auto scrollbar-thin overscroll-contain">
          {results.length === 0 ? (
            <p className="p-3 text-xs text-muted-foreground">No matches for “{trimmed}”</p>
          ) : (
            results.map((r) => (
              <button
                key={String(r.node_id)}
                type="button"
                onClick={() => {
                  setView("tree");
                  setPositionId(findPositionIdForRow(r));
                  setTimeout(() => setSelectedNodeId(String(r.node_id)), 50);
                  setOpen(false);
                  setQ("");
                }}
                className="w-full text-left p-3 border-b border-border hover:bg-secondary active:bg-secondary/80 group min-h-[48px]"
              >
                <div className="text-xs font-medium text-foreground group-hover:text-gold">
                  {r.your_action}
                </div>
                <div className="text-[10px] text-muted-foreground">
                  {r.start_position} · {r.partner_response}
                </div>
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
};
