import { useMemo, useState } from 'react';
import { grips, type Grip } from '@/data/grips';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const GRIP_BORDERS: Record<string, string> = {
  'Gi grip': 'border-blue-500/60',
  'Tie-up': 'border-amber-500/60',
  'Control': 'border-green-500/60',
  'Frame': 'border-purple-500/60',
  'Hook': 'border-red-500/60',
  '-': 'border-zinc-500/40',
};

const GRIP_TYPES = ['all', 'Gi grip', 'Tie-up', 'Control', 'Frame', 'Hook', '-'];

export const GripsPage = () => {
  const [q, setQ] = useState('');
  const [type, setType] = useState<string>('all');
  const [gi, setGi] = useState<'All' | 'Gi' | 'No-gi' | 'Both'>('All');

  const list = useMemo(() => {
    const ql = q.toLowerCase().trim();
    return grips.filter(g => {
      if (type !== 'all' && g.grip_type !== type) return false;
      if (gi !== 'All' && g.gi_no_gi !== gi && g.gi_no_gi !== 'Both') return false;
      if (!ql) return true;
      return [g.grip_id, g.grip_name, g.description, g.typical_positions].some(v => String(v).toLowerCase().includes(ql));
    });
  }, [q, type, gi]);

  return (
    <div className="w-full h-full overflow-y-auto bg-background p-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-6">
          <h2 className="font-display text-2xl text-gold tracking-wider">✊ Grips Library</h2>
          <p className="text-xs text-muted-foreground mt-1">{grips.length} grips, frames, hooks and ties — color-coded by type.</p>
        </header>
        <div className="flex flex-wrap gap-2 mb-5">
          <Input value={q} onChange={e => setQ(e.target.value)} placeholder="Search grips…" className="max-w-xs" />
          <select value={type} onChange={e => setType(e.target.value)} className="bg-card border border-border rounded px-2 py-1 text-xs text-foreground">
            {GRIP_TYPES.map(t => <option key={t} value={t}>{t === 'all' ? 'All types' : t}</option>)}
          </select>
          <div className="flex gap-1">
            {(['All', 'Gi', 'No-gi', 'Both'] as const).map(g => (
              <button key={g} onClick={() => setGi(g)} className={cn(
                'px-2 py-1 text-[10px] uppercase tracking-wider rounded border transition-colors',
                gi === g ? 'border-gold bg-gold text-background' : 'border-border text-muted-foreground hover:border-gold/60'
              )}>{g}</button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {list.map(g => <GripCard key={g.grip_id} g={g} />)}
        </div>
      </div>
    </div>
  );
};

export const GripCard = ({ g }: { g: Grip }) => {
  const positions = String(g.typical_positions || '').split(/[;,]/).map(s => s.trim()).filter(Boolean);
  return (
    <div className={cn('border-2 rounded-md p-3 bg-card', GRIP_BORDERS[g.grip_type] || 'border-border')}>
      <div className="flex items-start justify-between gap-2">
        <div className="font-display text-base text-foreground leading-tight">{g.grip_name}</div>
        <div className="flex flex-col items-end gap-1 shrink-0">
          <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded border border-border text-muted-foreground">{g.grip_type}</span>
          <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-secondary text-muted-foreground">{g.gi_no_gi}</span>
        </div>
      </div>
      <div className="text-[10px] text-muted-foreground mt-0.5">{g.grip_id}</div>
      <p className="text-xs text-foreground/80 mt-2">{g.description}</p>
      {positions.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-2">
          {positions.map(p => <span key={p} className="text-[10px] px-1.5 py-0.5 rounded bg-secondary text-muted-foreground">{p}</span>)}
        </div>
      )}
    </div>
  );
};
