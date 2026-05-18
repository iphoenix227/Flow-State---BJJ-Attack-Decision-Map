import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Youtube, BookmarkCheck, Bookmark } from 'lucide-react';
import { useAppStore } from '@/store/useAppStore';
import { attackingMap } from '@/lib/bjj';
import { concepts } from '@/data/concepts';
import { reactions } from '@/data/reactions';
import { grips } from '@/data/grips';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ReactionCard } from '@/components/ReactionsPage/ReactionsPage';
import { GripCard } from '@/components/GripsPage/GripsPage';

const Pill = ({ children, tone = 'default' }: any) => (
  <span className={cn(
    'text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border',
    tone === 'gold' && 'border-gold text-gold bg-gold/10',
    tone === 'red' && 'border-terminal text-terminal bg-terminal/10',
    tone === 'green' && 'border-followup text-followup bg-followup/10',
    tone === 'orange' && 'border-response text-response bg-response/10',
    tone === 'mistake' && 'border-response-mistake text-response-mistake bg-response-mistake/10',
    tone === 'default' && 'border-border text-muted-foreground'
  )}>{children}</span>
);

export const NodeDetailPanel = () => {
  const { selectedNodeId, setSelectedNodeId, drilledNodes, toggleDrilled, videoUrls, setVideoUrl } = useAppStore();
  const row = attackingMap.find(r => String(r.node_id) === selectedNodeId);
  const [videoInput, setVideoInput] = useState('');

  useEffect(() => {
    if (row) setVideoInput(videoUrls[String(row.video_ref_slot)] || '');
  }, [row?.node_id]);

  const open = !!row;

  const energyTone = (e: string) => {
    const v = String(e || '').toLowerCase();
    if (v.includes('low')) return 'green'; if (v.includes('high')) return 'red'; return 'orange';
  };

  const splitList = (s: any) => String(s || '').split(/[;]+/).map(x => x.trim()).filter(Boolean);

  const splitTags = (s: any) => String(s || '').split(/[;,]+/).map(t => t.trim()).filter(Boolean);
  const conceptTags = row ? splitTags(row.concept_tags) : [];
  const matchedConcepts = conceptTags
    .map(tag => concepts.find(c => c.concept_id === tag || c.concept_name.toLowerCase() === tag.toLowerCase()))
    .filter(Boolean) as typeof concepts;

  const reactionTags = row ? splitTags(row.reaction_tags) : [];
  const matchedReactions = reactionTags.map(t => reactions.find(r => r.reaction_id === t)).filter(Boolean) as typeof reactions;
  const gripTags = row ? splitTags(row.grip_tags) : [];
  const matchedGrips = gripTags.map(t => grips.find(g => g.grip_id === t)).filter(Boolean) as typeof grips;

  const ytId = (() => {
    const u = videoUrls[String(row?.video_ref_slot || '')] || '';
    if (!u) return null;
    const m = u.match(/(?:v=|youtu\.be\/|embed\/|shorts\/)([\w-]{11})/);
    return m ? m[1] : (u.length === 11 ? u : null);
  })();

  const drillRecord = row ? drilledNodes[String(row.node_id)] : undefined;
  const isDrilled = !!drillRecord;

  const handleDrillToggle = () => {
    if (!row) return;
    if (isDrilled) {
      const ok = window.confirm(`Remove drill record for "${row.your_action}"?`);
      if (!ok) return;
    }
    toggleDrilled(String(row.node_id));
  };

  const formatDate = (iso: string) => {
    try { return new Date(iso).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' }); }
    catch { return iso; }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 400, opacity: 0 }}
          transition={{ type: 'spring', damping: 28, stiffness: 240 }}
          className="absolute md:relative right-0 top-0 h-full w-full md:w-[380px] bg-card border-l border-border shadow-2xl z-30 flex flex-col"
        >
          <div className="p-4 border-b border-border flex items-start gap-2">
            <div className="flex-1 min-w-0">
              <div className="text-[10px] uppercase tracking-widest text-gold/70">Move</div>
              <h3 className="font-display text-xl text-foreground leading-tight">{row!.your_action}</h3>
              <div className="text-xs text-muted-foreground mt-1">{row!.follow_up}</div>
              <div className="flex flex-wrap gap-1 mt-2">
                <Pill tone="gold">{row!.start_position}</Pill>
                {row!.end_position && <Pill tone="green">→ {row!.end_position}</Pill>}
              </div>
              <div className="flex flex-wrap gap-1 mt-1.5">
                <Pill>{row!.gi_no_gi}</Pill>
                <Pill>{row!.skill_level}</Pill>
                <Pill tone={String(row!.priority) === 'A-game' ? 'gold' : 'default'}>{row!.priority}</Pill>
                <Pill tone={energyTone(String(row!.energy_cost))}>⚡ {row!.energy_cost}</Pill>
                {String(row!.is_terminal).toLowerCase() === 'yes' && <Pill tone="red">Terminal</Pill>}
                {row!.partner_reaction_type === 'mistake' && <Pill tone="mistake">Partner mistake</Pill>}
              </div>
            </div>
            <button onClick={() => setSelectedNodeId(null)} className="text-muted-foreground hover:text-foreground p-1">
              <X size={18} />
            </button>
          </div>

          <div className="p-3 border-b border-border">
            <Button
              onClick={handleDrillToggle}
              variant={isDrilled ? 'default' : 'outline'}
              className={cn(
                'w-full uppercase tracking-wider text-xs',
                isDrilled ? 'bg-followup hover:bg-followup/90 text-background' : 'border-gold text-gold hover:bg-gold/10'
              )}
            >
              {isDrilled ? <><BookmarkCheck size={14} className="mr-1.5" /> Drilled!</> : <>🥋 <span className="ml-1.5">Mark as Drilled</span></>}
            </Button>
            {isDrilled && drillRecord && (
              <div className="text-[10px] text-muted-foreground mt-1.5 text-center">First drilled: {formatDate(drillRecord.date)}</div>
            )}
          </div>

          <Tabs defaultValue="overview" className="flex-1 flex flex-col overflow-hidden">
            <TabsList className="grid grid-cols-6 mx-3 mt-3 bg-secondary">
              <TabsTrigger value="overview" className="text-[10px]">Overview</TabsTrigger>
              <TabsTrigger value="detail" className="text-[10px]">Detail</TabsTrigger>
              <TabsTrigger value="reaction" className="text-[10px]">🤜</TabsTrigger>
              <TabsTrigger value="grips" className="text-[10px]">✊</TabsTrigger>
              <TabsTrigger value="concepts" className="text-[10px]">Concepts</TabsTrigger>
              <TabsTrigger value="video" className="text-[10px]">Video</TabsTrigger>
            </TabsList>

            <div className="flex-1 overflow-y-auto scrollbar-thin p-4 text-sm">
              <TabsContent value="overview" className="space-y-3 mt-0">
                <Section title="Notes">{row!.notes || '—'}</Section>
                <Section title="Outcome">{row!.outcome_type || '—'}</Section>
                <Section title="Success Condition" tone="green">{row!.success_condition || '—'}</Section>
                <Section title="Failure Risk" tone="red">{row!.failure_risk || '—'}</Section>
                {row!.partner_response && <Section title="Partner Response" tone="orange">{row!.partner_response}</Section>}
              </TabsContent>

              <TabsContent value="detail" className="space-y-3 mt-0">
                <BulletSection title="Key Details" items={splitList(row!.key_details)} tone="gold" />
                <BulletSection title="Common Mistakes" items={splitList(row!.common_mistakes)} tone="red" />
                <Section title="Counter If Fails">{row!.counter_if_fails || '—'}</Section>
                <Section title="Chain Family">{row!.chain_family || '—'}</Section>
              </TabsContent>

              <TabsContent value="reaction" className="space-y-3 mt-0">
                {matchedReactions.length === 0 && <div className="text-muted-foreground text-xs">No reaction tagged.</div>}
                {matchedReactions.map(r => <ReactionCard key={r.reaction_id} r={r} />)}
              </TabsContent>

              <TabsContent value="grips" className="space-y-3 mt-0">
                {matchedGrips.length === 0 && <div className="text-muted-foreground text-xs">No grips tagged.</div>}
                {matchedGrips.map(g => <GripCard key={g.grip_id} g={g} />)}
              </TabsContent>

              <TabsContent value="concepts" className="space-y-3 mt-0">
                {matchedConcepts.length === 0 && <div className="text-muted-foreground text-xs">No tagged concepts.</div>}
                {matchedConcepts.map(c => (
                  <div key={c.concept_id} className="border border-border rounded-md p-3 bg-background">
                    <div className="flex items-center justify-between">
                      <div className="font-display text-base text-gold">{c.concept_name}</div>
                      <Pill>{c.type}</Pill>
                    </div>
                    <div className="text-xs text-foreground mt-1.5">{c.description}</div>
                    {c.anti_pattern && (
                      <div className="text-[11px] text-terminal mt-2"><span className="uppercase tracking-wider">⚠ Anti-pattern:</span> {c.anti_pattern}</div>
                    )}
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="video" className="space-y-3 mt-0">
                <a
                  href={`https://www.youtube.com/results?search_query=${encodeURIComponent(String(row!.your_action) + ' BJJ tutorial')}`}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-3 py-2.5 rounded border border-terminal text-terminal hover:bg-terminal/10 text-xs uppercase tracking-wider"
                >
                  <Youtube size={14} /> Search YouTube <ExternalLink size={12} />
                </a>

                <div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Save Custom Video URL</div>
                  <div className="flex gap-2">
                    <Input
                      value={videoInput}
                      onChange={e => setVideoInput(e.target.value)}
                      placeholder="YouTube URL or 11-char ID"
                      className="text-xs h-8"
                    />
                    <Button
                      size="sm"
                      onClick={() => setVideoUrl(String(row!.video_ref_slot), videoInput)}
                      className="bg-gold text-background hover:bg-gold-glow text-xs h-8"
                    >Save</Button>
                  </div>
                  <div className="text-[10px] text-muted-foreground mt-1">Slot: {row!.video_ref_slot}</div>
                </div>

                {ytId ? (
                  <div className="aspect-video w-full rounded overflow-hidden border border-border">
                    <iframe
                      title="tutorial"
                      src={`https://www.youtube.com/embed/${ytId}`}
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                ) : (
                  <div className="aspect-video w-full rounded border border-dashed border-border bg-background flex items-center justify-center text-xs text-muted-foreground text-center px-4">
                    Paste a YouTube link above to embed it here.<br/>It saves locally per move.
                  </div>
                )}
              </TabsContent>
            </div>
          </Tabs>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

const Section = ({ title, tone, children }: any) => (
  <div>
    <div className={cn('text-[10px] uppercase tracking-widest mb-1',
      tone === 'green' && 'text-followup',
      tone === 'red' && 'text-terminal',
      tone === 'orange' && 'text-response',
      !tone && 'text-gold/70'
    )}>{title}</div>
    <div className="text-foreground/90 text-xs leading-relaxed">{children}</div>
  </div>
);

const BulletSection = ({ title, items, tone }: any) => (
  <div>
    <div className={cn('text-[10px] uppercase tracking-widest mb-1',
      tone === 'red' && 'text-terminal',
      tone === 'gold' && 'text-gold/70'
    )}>{title}</div>
    {items.length === 0 ? <div className="text-muted-foreground text-xs">—</div> : (
      <ul className="space-y-1 text-xs text-foreground/90">
        {items.map((it: string, i: number) => (
          <li key={i} className="flex gap-2"><span className={cn('shrink-0', tone === 'red' ? 'text-terminal' : 'text-gold')}>▸</span><span>{it}</span></li>
        ))}
      </ul>
    )}
  </div>
);
