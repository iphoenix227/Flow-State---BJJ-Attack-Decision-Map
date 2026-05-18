import { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { attackingMap } from '@/lib/bjj';
import { positions } from '@/data/positions';
import { allChainFamilies, positionProgress, findPositionIdForRow } from '@/lib/bjj';
import { useAppStore } from '@/store/useAppStore';
import { cn } from '@/lib/utils';

const goldPalette = ['hsl(41 78% 47%)', 'hsl(210 70% 55%)', 'hsl(142 60% 45%)', 'hsl(32 90% 55%)', 'hsl(0 75% 55%)', 'hsl(280 60% 60%)'];

export const Dashboard = () => {
  const movesPerPosition = useMemo(() => positions.map(p => ({
    name: p.position_name.replace(/ \/ .*/, '').slice(0, 14),
    count: attackingMap.filter(r => r.from_node_id === p.position_id).length,
  })), []);

  const giSplit = useMemo(() => {
    const m: Record<string, number> = {};
    attackingMap.forEach(r => {
      const k = String(r.gi_no_gi || 'Unknown');
      m[k] = (m[k] || 0) + 1;
    });
    return Object.entries(m).map(([name, value]) => ({ name, value }));
  }, []);

  const skillSplit = useMemo(() => {
    const m: Record<string, number> = {};
    attackingMap.forEach(r => {
      const k = String(r.skill_level || 'Unknown');
      m[k] = (m[k] || 0) + 1;
    });
    return Object.entries(m).map(([name, value]) => ({ name, value }));
  }, []);

  const chainCounts = useMemo(() => allChainFamilies.map(c => ({
    name: c, count: attackingMap.filter(r => r.chain_family === c).length,
  })).sort((a, b) => b.count - a.count), []);

  return (
    <div className="h-full overflow-y-auto scrollbar-thin">
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="font-display text-3xl text-gold mb-1">Stats Dashboard</h1>
        <p className="text-muted-foreground text-xs uppercase tracking-widest mb-6">{attackingMap.length} attacks across {positions.length} positions</p>

        <MyProgress />

        <div className="grid lg:grid-cols-2 gap-4 mt-6">
          <Card title="Attacks per Position">
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={movesPerPosition}>
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={10} angle={-20} textAnchor="end" height={60} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={10} />
                <Tooltip contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', fontSize: 12 }} />
                <Bar dataKey="count" fill="hsl(var(--gold))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          <Card title="Gi vs No-Gi">
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie data={giSplit} dataKey="value" nameKey="name" innerRadius={50} outerRadius={90} paddingAngle={3}>
                  {giSplit.map((_, i) => <Cell key={i} fill={goldPalette[i % goldPalette.length]} />)}
                </Pie>
                <Legend wrapperStyle={{ fontSize: 11 }} />
                <Tooltip contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', fontSize: 12 }} />
              </PieChart>
            </ResponsiveContainer>
          </Card>

          <Card title="Skill Level">
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie data={skillSplit} dataKey="value" nameKey="name" innerRadius={50} outerRadius={90} paddingAngle={3}>
                  {skillSplit.map((_, i) => <Cell key={i} fill={goldPalette[i % goldPalette.length]} />)}
                </Pie>
                <Legend wrapperStyle={{ fontSize: 11 }} />
                <Tooltip contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', fontSize: 12 }} />
              </PieChart>
            </ResponsiveContainer>
          </Card>

          <Card title="Chain Families">
            <div className="flex flex-wrap gap-2">
              {chainCounts.map(c => (
                <div key={c.name} className="px-2.5 py-1 rounded-full border border-gold/40 bg-gold/5 text-xs">
                  <span className="text-foreground">{c.name}</span>{' '}
                  <span className="text-gold font-semibold">{c.count}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, children }: any) => (
  <div className="bg-card border border-border rounded-lg p-4">
    <div className="text-[10px] uppercase tracking-widest text-gold/70 mb-3">{title}</div>
    {children}
  </div>
);

const barColor = (pct: number, total: number) => {
  if (total === 0 || pct === 0) return 'bg-muted-foreground/40';
  if (pct === 100) return 'bg-followup';
  if (pct >= 50) return 'bg-[hsl(210_70%_55%)]';
  return 'bg-gold';
};

const MyProgress = () => {
  const drilledNodes = useAppStore(s => s.drilledNodes);
  const resetDrilled = useAppStore(s => s.resetDrilled);
  const setPositionId = useAppStore(s => s.setPositionId);
  const setView = useAppStore(s => s.setView);
  const setSelectedNodeId = useAppStore(s => s.setSelectedNodeId);

  const total = attackingMap.length;
  const drilledIds = Object.keys(drilledNodes);
  const drilledCount = drilledIds.length;
  const pctOverall = total === 0 ? 0 : Math.round((drilledCount / total) * 100);

  const perPos = useMemo(() => positions
    .map(p => ({ ...p, ...positionProgress(p.position_id, drilledNodes) }))
    .filter(p => p.total > 0)
    .sort((a, b) => b.pct - a.pct), [drilledNodes]);

  const positionsStarted = perPos.filter(p => p.done > 0).length;

  const recent = useMemo(() => {
    return drilledIds
      .map(id => ({ id, row: attackingMap.find(r => String(r.node_id) === id), date: drilledNodes[id].date }))
      .filter(x => x.row)
      .sort((a, b) => (a.date < b.date ? 1 : -1))
      .slice(0, 5);
  }, [drilledIds, drilledNodes]);

  const formatDate = (iso: string) => {
    try { return new Date(iso).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }); }
    catch { return iso; }
  };

  const goNode = (rowId: string) => {
    const row = attackingMap.find(r => String(r.node_id) === rowId);
    if (!row) return;
    setPositionId(findPositionIdForRow(row));
    setView('tree');
    setTimeout(() => setSelectedNodeId(rowId), 80);
  };

  const handleReset = () => {
    if (window.confirm('This will clear all drilled records. Are you sure?')) resetDrilled();
  };

  return (
    <div className="bg-card border border-gold/30 rounded-lg p-5 mb-2">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display text-xl text-gold">My Progress</h2>
        <button onClick={handleReset} className="text-[10px] uppercase tracking-wider text-muted-foreground hover:text-terminal transition-colors">
          🗑 Reset All Progress
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-5">
        <Stat value={drilledCount} label="Drilled Moves" />
        <Stat value={total} label="Total Moves" />
        <Stat value={`${pctOverall}%`} label="Complete" />
        <Stat value={positionsStarted} label="Positions Started" />
      </div>

      <div className="text-[10px] uppercase tracking-widest text-gold/70 mb-2">Position Breakdown</div>
      <div className="space-y-1 mb-5">
        {perPos.map(p => (
          <button
            key={p.position_id}
            onClick={() => { setPositionId(p.position_id); setView('tree'); }}
            className="w-full text-left grid grid-cols-[1fr_2fr_auto_auto] items-center gap-3 px-2 py-1.5 rounded hover:bg-secondary/60 transition-colors text-xs"
          >
            <span className="truncate">{p.position_name}</span>
            <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
              <div className={cn('h-full transition-all', barColor(p.pct, p.total))} style={{ width: `${p.pct}%` }} />
            </div>
            <span className="tabular-nums text-muted-foreground">{p.done}/{p.total}</span>
            <span className={cn('tabular-nums w-12 text-right', p.pct === 100 ? 'text-followup' : 'text-gold')}>
              {p.pct === 100 ? '🏆' : `${p.pct}%`}
            </span>
          </button>
        ))}
      </div>

      <div className="text-[10px] uppercase tracking-widest text-gold/70 mb-2">Recently Drilled</div>
      {recent.length === 0 ? (
        <div className="text-xs text-muted-foreground italic">Nothing drilled yet — open a node and tap "Mark as Drilled".</div>
      ) : (
        <div className="space-y-1">
          {recent.map(r => (
            <button
              key={r.id}
              onClick={() => goNode(r.id)}
              className="w-full text-left flex items-center gap-2 px-2 py-1.5 rounded hover:bg-secondary/60 text-xs transition-colors"
            >
              <span className="text-followup">✅</span>
              <span className="text-muted-foreground tabular-nums">[{r.id}]</span>
              <span className="flex-1 truncate text-foreground">{r.row!.your_action}</span>
              <span className="text-muted-foreground text-[10px]">{formatDate(r.date)}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const Stat = ({ value, label }: { value: any; label: string }) => (
  <div className="bg-background border border-border rounded p-3 text-center">
    <div className="font-display text-2xl text-gold leading-none">{value}</div>
    <div className="text-[9px] uppercase tracking-widest text-muted-foreground mt-1">{label}</div>
  </div>
);

