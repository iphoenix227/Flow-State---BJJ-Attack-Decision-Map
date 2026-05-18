import { useMemo, useState, useRef } from 'react';
import { reactions, type Reaction } from '@/data/reactions';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const TYPE_TONES: Record<string, string> = {
  offensive: 'bg-amber-500/15 text-amber-400 border-amber-500/40',
  defensive: 'bg-blue-500/15 text-blue-400 border-blue-500/40',
  neutral: 'bg-zinc-500/15 text-zinc-400 border-zinc-500/40',
};

export const ReactionsPage = () => {
  const [q, setQ] = useState('');
  const [type, setType] = useState<'all' | 'offensive' | 'defensive' | 'neutral'>('all');
  const refs = useRef<Record<string, HTMLDivElement | null>>({});

  const list = useMemo(() => {
    const ql = q.toLowerCase().trim();
    return reactions.filter(r => {
      if (type !== 'all' && r.reaction_type !== type) return false;
      if (!ql) return true;
      return [r.reaction_id, r.reaction_name, r.description, r.typical_positions].some(v => String(v).toLowerCase().includes(ql));
    });
  }, [q, type]);

  const scrollTo = (id: string) => {
    const el = refs.current[id];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.classList.add('ring-2', 'ring-gold');
      setTimeout(() => el.classList.remove('ring-2', 'ring-gold'), 1500);
    }
  };

  return (
    <div className="w-full h-full overflow-y-auto bg-background p-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-6">
          <h2 className="font-display text-2xl text-gold tracking-wider">🤜 Reactions Library</h2>
          <p className="text-xs text-muted-foreground mt-1">{reactions.length} partner reactions catalogued. Use these to predict the next decision branch.</p>
        </header>
        <div className="flex flex-wrap gap-2 mb-5">
          <Input value={q} onChange={e => setQ(e.target.value)} placeholder="Search reactions…" className="max-w-xs" />
          {(['all', 'offensive', 'defensive', 'neutral'] as const).map(t => (
            <button key={t} onClick={() => setType(t)} className={cn(
              'px-3 py-1 text-[11px] uppercase tracking-wider rounded border transition-colors',
              type === t ? 'border-gold bg-gold text-background' : 'border-border text-muted-foreground hover:border-gold/60'
            )}>{t}</button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {list.map(r => <ReactionCard key={r.reaction_id} r={r} setRef={el => refs.current[r.reaction_id] = el} onPairClick={scrollTo} />)}
        </div>
      </div>
    </div>
  );
};

export const ReactionCard = ({ r, setRef, onPairClick }: { r: Reaction; setRef?: (el: HTMLDivElement | null) => void; onPairClick?: (id: string) => void }) => {
  const positions = String(r.typical_positions || '').split(/[;,]/).map(s => s.trim()).filter(Boolean);
  const paired = String(r.often_paired_with || '').split(/[;,]/).map(s => s.trim()).filter(Boolean);
  return (
    <div ref={setRef} className="border border-border rounded-md p-3 bg-card transition-all">
      <div className="flex items-start justify-between gap-2">
        <div className="font-display text-base text-foreground leading-tight">{r.reaction_name}</div>
        <span className={cn('text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded border', TYPE_TONES[r.reaction_type] || TYPE_TONES.neutral)}>{r.reaction_type}</span>
      </div>
      <div className="text-[10px] text-muted-foreground mt-0.5">{r.reaction_id}</div>
      <p className="text-xs text-foreground/80 mt-2">{r.description}</p>
      {positions.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-2">
          {positions.map(p => <span key={p} className="text-[10px] px-1.5 py-0.5 rounded bg-secondary text-muted-foreground">{p}</span>)}
        </div>
      )}
      {paired.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1 items-center">
          <span className="text-[9px] text-muted-foreground uppercase tracking-wider">Pairs:</span>
          {paired.map(p => (
            <button key={p} onClick={() => onPairClick?.(p)} className="text-[10px] px-1.5 py-0.5 rounded border border-gold/40 text-gold hover:bg-gold/10">{p}</button>
          ))}
        </div>
      )}
    </div>
  );
};
