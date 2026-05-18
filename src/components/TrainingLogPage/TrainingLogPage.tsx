import { useMemo, useState } from 'react';
import { useAppStore } from '@/store/useAppStore';
import { attackingMap } from '@/lib/bjj';
import { positions } from '@/data/positions';
import { findPositionIdForRow } from '@/lib/bjj';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Trash2, Pencil, Star, Plus, ChevronDown, ChevronUp, Download } from 'lucide-react';
import { cn } from '@/lib/utils';
import { scrollPageClass, scrollPageInnerClass, touchInputClass } from '@/lib/layout';
import type { TrainingLogEntry } from '@/data/trainingLog';

const RESULT_TONES: Record<string, string> = {
  Success: 'bg-followup/20 text-followup border-followup/40',
  'Fail (partial)': 'bg-amber-500/20 text-amber-400 border-amber-500/40',
  Fail: 'bg-terminal/20 text-terminal border-terminal/40',
  'Tapped out': 'bg-purple-500/20 text-purple-400 border-purple-500/40',
};

const RESULTS = ['Success', 'Fail (partial)', 'Fail', 'Tapped out'];
const LEVELS = ['White', 'Blue', 'Purple', 'Brown', 'Black'];

const blank = (): TrainingLogEntry => ({
  id: crypto.randomUUID(),
  date: new Date().toISOString().slice(0, 10),
  partner: '', position_context: '', node_id: '', your_action: '',
  partner_response: '', follow_up: '', what_happened: '',
  result: 'Success', rating_1_to_5: 3, partner_level: 'White',
  gi_no_gi: 'Both', notes: '',
});

export const TrainingLogPage = () => {
  const { trainingLog, addTrainingEntry, updateTrainingEntry, deleteTrainingEntry, setPositionId, setView, setSelectedNodeId } = useAppStore();
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState<TrainingLogEntry>(blank());
  const [editingId, setEditingId] = useState<string | null>(null);
  const [expandedNotes, setExpandedNotes] = useState<Set<string>>(new Set());
  const [nodeFilter, setNodeFilter] = useState('');

  const sorted = useMemo(() => [...trainingLog].sort((a, b) => (b.date || '').localeCompare(a.date || '')), [trainingLog]);

  const stats = useMemo(() => {
    const total = sorted.length;
    const successes = sorted.filter(e => e.result === 'Success').length;
    const ratings = sorted.map(e => Number(e.rating_1_to_5) || 0).filter(Boolean);
    const avg = ratings.length ? (ratings.reduce((a, b) => a + b, 0) / ratings.length) : 0;
    const posCount: Record<string, number> = {};
    sorted.forEach(e => { if (e.position_context) posCount[e.position_context] = (posCount[e.position_context] || 0) + 1; });
    const topPos = Object.entries(posCount).sort((a, b) => b[1] - a[1])[0]?.[0] || '—';
    return { total, successRate: total ? Math.round((successes / total) * 100) : 0, topPos, avg };
  }, [sorted]);

  const matchingNodes = useMemo(() => {
    const q = nodeFilter.toLowerCase().trim();
    if (!q) return attackingMap.slice(0, 10);
    return attackingMap.filter(r =>
      String(r.your_action).toLowerCase().includes(q) ||
      String(r.node_id).toLowerCase().includes(q) ||
      String(r.start_position).toLowerCase().includes(q)
    ).slice(0, 12);
  }, [nodeFilter]);

  const submit = () => {
    if (editingId) {
      updateTrainingEntry(editingId, draft);
    } else {
      addTrainingEntry({ ...draft, id: crypto.randomUUID() });
    }
    setDraft(blank()); setEditingId(null); setOpen(false); setNodeFilter('');
  };

  const startEdit = (e: TrainingLogEntry) => {
    setDraft({ ...e }); setEditingId(e.id); setOpen(true);
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50);
  };

  const openNodeInTree = (nodeId: string) => {
    const row = attackingMap.find(r => String(r.node_id) === nodeId);
    if (!row) return;
    const pid = findPositionIdForRow(row);
    setPositionId(pid); setSelectedNodeId(nodeId); setView('tree');
  };

  const exportCsv = () => {
    if (sorted.length === 0) return;
    const cols: (keyof TrainingLogEntry)[] = ['date', 'partner', 'position_context', 'node_id', 'your_action', 'partner_response', 'follow_up', 'what_happened', 'result', 'rating_1_to_5', 'partner_level', 'gi_no_gi', 'notes'];
    const esc = (v: any) => `"${String(v ?? '').replace(/"/g, '""')}"`;
    const csv = [cols.join(','), ...sorted.map(r => cols.map(c => esc(r[c])).join(','))].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = 'bjj_training_log.csv'; a.click();
    URL.revokeObjectURL(url);
  };

  const pickNode = (nodeId: string) => {
    const row = attackingMap.find(r => String(r.node_id) === nodeId);
    if (!row) return;
    setDraft(d => ({
      ...d, node_id: nodeId, your_action: String(row.your_action || ''),
      partner_response: String(row.partner_response || d.partner_response),
      follow_up: String(row.follow_up || d.follow_up),
      position_context: String(row.start_position || d.position_context),
    }));
    setNodeFilter('');
  };

  return (
    <div className={scrollPageClass}>
      <div className={scrollPageInnerClass}>
        <header className="mb-4 flex items-end justify-between flex-wrap gap-3">
          <div>
            <h2 className="font-display text-2xl text-gold tracking-wider">📓 Training Log</h2>
            <p className="text-xs text-muted-foreground mt-1">Journal every roll. Track what's working and what isn't.</p>
          </div>
          <Button onClick={exportCsv} variant="outline" size="sm" className="text-xs"><Download size={12} className="mr-1.5" /> Export CSV</Button>
        </header>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
          <Stat label="Sessions" value={String(stats.total)} />
          <Stat label="Success rate" value={`${stats.successRate}%`} />
          <Stat label="Top position" value={stats.topPos} small />
          <Stat label="Avg rating" value={
            <span className="flex items-center gap-1">
              {stats.avg.toFixed(1)} <Star size={14} className="fill-gold text-gold" />
            </span>
          } />
        </div>

        {/* Form */}
        <div className="border border-border rounded-md bg-card mb-5">
          <button onClick={() => { setOpen(o => !o); if (open && editingId) { setEditingId(null); setDraft(blank()); } }} className="w-full flex items-center justify-between px-4 py-3 text-left">
            <div className="flex items-center gap-2 text-sm font-display text-gold uppercase tracking-wider">
              <Plus size={14} /> {editingId ? 'Edit roll entry' : 'Log a new roll'}
            </div>
            {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          {open && (
            <div className="p-4 border-t border-border grid grid-cols-1 md:grid-cols-2 gap-3">
              <Field label="Date">
                <Input type="date" value={draft.date} onChange={e => setDraft({ ...draft, date: e.target.value })} />
              </Field>
              <Field label="Partner">
                <Input value={draft.partner} onChange={e => setDraft({ ...draft, partner: e.target.value })} placeholder="Name" />
              </Field>
              <Field label="Position context">
                <select value={draft.position_context} onChange={e => setDraft({ ...draft, position_context: e.target.value })} className="w-full bg-background border border-border rounded px-2 py-1.5 text-sm">
                  <option value="">— select —</option>
                  {positions.map(p => <option key={p.position_id} value={p.position_name}>{p.position_name}</option>)}
                </select>
              </Field>
              <Field label="Node (search action)">
                <div className="relative">
                  <Input value={nodeFilter || draft.node_id} onChange={e => { setNodeFilter(e.target.value); setDraft({ ...draft, node_id: '' }); }} placeholder="Type to search…" />
                  {nodeFilter && (
                    <div className="absolute top-full left-0 right-0 mt-1 max-h-48 overflow-y-auto border border-border bg-card rounded shadow-lg z-10 scrollbar-thin">
                      {matchingNodes.map(r => (
                        <button key={String(r.node_id)} onClick={() => pickNode(String(r.node_id))} className="w-full text-left px-2 py-1.5 text-xs hover:bg-secondary border-b border-border last:border-b-0">
                          <span className="text-gold">{r.node_id}</span> · {r.your_action} <span className="text-muted-foreground">@ {r.start_position}</span>
                        </button>
                      ))}
                      {matchingNodes.length === 0 && <div className="px-2 py-1.5 text-xs text-muted-foreground">No matches</div>}
                    </div>
                  )}
                </div>
              </Field>
              <Field label="Your action">
                <Input value={draft.your_action} onChange={e => setDraft({ ...draft, your_action: e.target.value })} />
              </Field>
              <Field label="Partner response">
                <Input value={draft.partner_response} onChange={e => setDraft({ ...draft, partner_response: e.target.value })} />
              </Field>
              <Field label="Follow-up">
                <Input value={draft.follow_up} onChange={e => setDraft({ ...draft, follow_up: e.target.value })} />
              </Field>
              <Field label="Result">
                <select value={draft.result} onChange={e => setDraft({ ...draft, result: e.target.value })} className="w-full bg-background border border-border rounded px-2 py-1.5 text-sm">
                  {RESULTS.map(r => <option key={r}>{r}</option>)}
                </select>
              </Field>
              <Field label="Rating">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map(n => (
                    <button key={n} onClick={() => setDraft({ ...draft, rating_1_to_5: n })}>
                      <Star size={20} className={cn(n <= draft.rating_1_to_5 ? 'fill-gold text-gold' : 'text-muted-foreground')} />
                    </button>
                  ))}
                </div>
              </Field>
              <Field label="Partner level">
                <select value={draft.partner_level} onChange={e => setDraft({ ...draft, partner_level: e.target.value })} className="w-full bg-background border border-border rounded px-2 py-1.5 text-sm">
                  {LEVELS.map(l => <option key={l}>{l}</option>)}
                </select>
              </Field>
              <Field label="Gi / No-gi">
                <div className="flex gap-1">
                  {(['Gi', 'No-gi', 'Both'] as const).map(g => (
                    <button key={g} onClick={() => setDraft({ ...draft, gi_no_gi: g })} className={cn(
                      'px-2 py-1 text-[10px] uppercase tracking-wider rounded border',
                      draft.gi_no_gi === g ? 'border-gold bg-gold text-background' : 'border-border text-muted-foreground'
                    )}>{g}</button>
                  ))}
                </div>
              </Field>
              <Field label="What happened" full>
                <Textarea rows={2} value={draft.what_happened} onChange={e => setDraft({ ...draft, what_happened: e.target.value })} />
              </Field>
              <Field label="Notes" full>
                <Textarea rows={2} value={draft.notes} onChange={e => setDraft({ ...draft, notes: e.target.value })} />
              </Field>
              <div className="md:col-span-2 flex justify-end gap-2">
                {editingId && <Button variant="outline" onClick={() => { setEditingId(null); setDraft(blank()); }}>Cancel</Button>}
                <Button onClick={submit} className="bg-gold text-background hover:bg-gold-glow">📝 {editingId ? 'Save changes' : 'Log This Roll'}</Button>
              </div>
            </div>
          )}
        </div>

        {/* Table */}
        <div className="border border-border rounded-md bg-card overflow-hidden">
          <div className="grid grid-cols-12 px-3 py-2 text-[10px] uppercase tracking-wider text-muted-foreground border-b border-border bg-secondary/30">
            <div className="col-span-1">Date</div>
            <div className="col-span-2">Node</div>
            <div className="col-span-2">Action</div>
            <div className="col-span-2">Response</div>
            <div className="col-span-1">Result</div>
            <div className="col-span-1">Rate</div>
            <div className="col-span-1">Partner</div>
            <div className="col-span-1">Gi</div>
            <div className="col-span-1 text-right">Actions</div>
          </div>
          {sorted.length === 0 && <div className="p-6 text-center text-muted-foreground text-sm">No entries yet — log your first roll above.</div>}
          {sorted.map(e => {
            const expanded = expandedNotes.has(e.id);
            return (
              <div key={e.id} className="border-b border-border last:border-b-0">
                <div className="grid grid-cols-12 px-3 py-2 text-xs items-center hover:bg-secondary/20">
                  <div className="col-span-1 text-muted-foreground">{e.date}</div>
                  <div className="col-span-2">
                    <button onClick={() => openNodeInTree(e.node_id)} className="text-gold hover:underline">{e.node_id}</button>
                  </div>
                  <div className="col-span-2 truncate">{e.your_action}</div>
                  <div className="col-span-2 truncate text-muted-foreground">{e.partner_response}</div>
                  <div className="col-span-1">
                    <span className={cn('text-[9px] uppercase px-1.5 py-0.5 rounded border', RESULT_TONES[e.result] || 'border-border text-muted-foreground')}>{e.result}</span>
                  </div>
                  <div className="col-span-1 flex">
                    {[1, 2, 3, 4, 5].map(n => <Star key={n} size={10} className={cn(n <= e.rating_1_to_5 ? 'fill-gold text-gold' : 'text-muted-foreground/30')} />)}
                  </div>
                  <div className="col-span-1 truncate text-muted-foreground">{e.partner}</div>
                  <div className="col-span-1 text-muted-foreground">{e.gi_no_gi}</div>
                  <div className="col-span-1 flex justify-end gap-1">
                    <button onClick={() => setExpandedNotes(s => { const n = new Set(s); n.has(e.id) ? n.delete(e.id) : n.add(e.id); return n; })} title="Notes" className="p-1 text-muted-foreground hover:text-gold">{expanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}</button>
                    <button onClick={() => startEdit(e)} title="Edit" className="p-1 text-muted-foreground hover:text-gold"><Pencil size={12} /></button>
                    <button onClick={() => { if (confirm('Delete this entry?')) deleteTrainingEntry(e.id); }} title="Delete" className="p-1 text-muted-foreground hover:text-terminal"><Trash2 size={12} /></button>
                  </div>
                </div>
                {expanded && (
                  <div className="px-4 py-2 bg-background/50 text-xs space-y-1">
                    {e.what_happened && <div><span className="text-gold/70 uppercase tracking-wider text-[10px]">What happened: </span>{e.what_happened}</div>}
                    {e.notes && <div><span className="text-gold/70 uppercase tracking-wider text-[10px]">Notes: </span>{e.notes}</div>}
                    {e.follow_up && <div><span className="text-gold/70 uppercase tracking-wider text-[10px]">Follow-up: </span>{e.follow_up}</div>}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Stat = ({ label, value, small }: any) => (
  <div className="border border-border rounded p-3 bg-card">
    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
    <div className={cn('font-display text-gold mt-1', small ? 'text-sm leading-tight' : 'text-2xl')}>{value}</div>
  </div>
);

const Field = ({ label, children, full }: any) => (
  <div className={cn(full && 'md:col-span-2')}>
    <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">{label}</div>
    {children}
  </div>
);
