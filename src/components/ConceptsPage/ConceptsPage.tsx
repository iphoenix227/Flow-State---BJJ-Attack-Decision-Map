import { concepts } from '@/data/concepts';
import { cn } from '@/lib/utils';

const typeTone = (t: string) => {
  const v = t.toLowerCase();
  if (v.includes('principle')) return 'border-gold/60 bg-gold/5';
  if (v.includes('strategy')) return 'border-action/60 bg-action/5';
  if (v.includes('mechanic')) return 'border-followup/60 bg-followup/5';
  if (v.includes('mindset')) return 'border-response/60 bg-response/5';
  return 'border-border';
};

export const ConceptsPage = () => (
  <div className="h-full overflow-y-auto scrollbar-thin">
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="font-display text-3xl text-gold mb-1">Concepts</h1>
      <p className="text-muted-foreground text-xs uppercase tracking-widest mb-6">{concepts.length} guiding principles</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {concepts.map(c => (
          <div key={c.concept_id} className={cn('rounded-md p-4 border-2 bg-card transition-colors hover:bg-secondary', typeTone(c.type))}>
            <div className="flex items-center justify-between gap-2">
              <div className="font-display text-lg text-foreground leading-tight">{c.concept_name}</div>
              <span className="text-[9px] uppercase tracking-widest text-muted-foreground border border-border px-1.5 py-0.5 rounded">{c.type}</span>
            </div>
            <div className="text-xs text-foreground/80 mt-2 leading-relaxed">{c.description}</div>
            {c.applies_to && (
              <div className="text-[11px] mt-2"><span className="text-gold/70 uppercase tracking-wider">Applies:</span> <span className="text-muted-foreground">{c.applies_to}</span></div>
            )}
            {c.anti_pattern && (
              <div className="text-[11px] mt-1 text-terminal"><span className="uppercase tracking-wider">⚠ Anti:</span> {c.anti_pattern}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
);
