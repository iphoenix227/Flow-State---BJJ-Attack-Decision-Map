import { useState, useMemo } from 'react';
import { glossary } from '@/data/glossary';
import { Input } from '@/components/ui/input';
import { scrollPageClass, scrollPageInnerClass, touchInputClass } from '@/lib/layout';
import { cn } from '@/lib/utils';

export const GlossaryPage = () => {
  const [q, setQ] = useState('');
  const filtered = useMemo(() => glossary.filter(g =>
    g.term.toLowerCase().includes(q.toLowerCase()) || g.definition.toLowerCase().includes(q.toLowerCase())
  ), [q]);

  return (
    <div className={scrollPageClass}>
      <div className={`${scrollPageInnerClass} max-w-5xl`}>
        <h1 className="font-display text-3xl text-gold mb-1">Glossary</h1>
        <p className="text-muted-foreground text-xs uppercase tracking-widest mb-4">{glossary.length} BJJ terms</p>
        <Input value={q} onChange={e => setQ(e.target.value)} placeholder="Search terms or definitions…" className={cn('mb-6 bg-secondary', touchInputClass)} />
        <div className="grid sm:grid-cols-2 gap-3">
          {filtered.length === 0 && (
            <p className="text-sm text-muted-foreground col-span-full">No terms match your search.</p>
          )}
          {filtered.map(g => (
            <div key={g.term} className="border border-border rounded-md p-4 bg-card hover:border-gold/50 transition-colors">
              <div className="font-display text-lg text-gold leading-tight">{g.term}</div>
              <div className="text-xs text-foreground/80 mt-1.5 leading-relaxed">{g.definition}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
