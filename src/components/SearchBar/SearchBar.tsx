import { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";
import { useAppStore } from "@/store/useAppStore";
import { searchRows, findPositionIdForRow } from "@/lib/bjj";

export const SearchBar = () => {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { setPositionId, setSelectedNodeId, setView } = useAppStore();
  const results = searchRows(q);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div ref={ref} className="relative w-full max-w-md">
      <div className="relative">
        <Search
          size={14}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
        />
        <input
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder="Search moves, responses, notes…"
          className="w-full bg-secondary border border-border rounded-md pl-9 pr-8 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
        />
        {q && (
          <button
            onClick={() => {
              setQ("");
              setOpen(false);
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X size={14} />
          </button>
        )}
      </div>
      {open && results.length > 0 && (
        <div className="absolute top-full mt-1 w-full bg-card border border-border rounded-md shadow-2xl z-[1200] max-h-96 overflow-y-auto scrollbar-thin">
          {results.map((r) => (
            <button
              key={String(r.node_id)}
              onClick={() => {
                setView("tree");
                setPositionId(findPositionIdForRow(r));
                setTimeout(() => setSelectedNodeId(String(r.node_id)), 50);
                setOpen(false);
                setQ("");
              }}
              className="w-full text-left p-2.5 border-b border-border hover:bg-secondary group"
            >
              <div className="text-xs font-medium text-foreground group-hover:text-gold">
                {r.your_action}
              </div>
              <div className="text-[10px] text-muted-foreground">
                {r.start_position} · {r.partner_response}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
