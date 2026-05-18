import { Handle, Position } from 'reactflow';
import { Star, Skull, ChevronRight, ArrowRight, Trophy, CheckCircle2 } from 'lucide-react';
import { useAppStore } from '@/store/useAppStore';
import { energyColor, resolveChainTarget } from '@/lib/bjj';
import { cn } from '@/lib/utils';

const EnergyDot = ({ energy }: { energy: string }) => (
  <span className="inline-block w-2 h-2 rounded-full ml-1" style={{ background: energyColor(energy) }} />
);

const PriStar = ({ rank }: { rank: any }) => (
  Number(rank) === 1 ? <Star size={11} className="fill-gold text-gold shrink-0" /> : null
);

const DrillBadge = () => (
  <span title="Drilled" className="absolute -top-1.5 -right-1.5 bg-followup text-background rounded-full w-4 h-4 flex items-center justify-center shadow">
    <CheckCircle2 size={11} />
  </span>
);

export const PositionNode = ({ data }: any) => (
  <div className="px-5 py-3 rounded-xl border-2 border-gold bg-gradient-to-br from-card to-background glow-gold min-w-[180px] text-center">
    <div className="text-[10px] uppercase tracking-widest text-gold/70">Position</div>
    <div className="font-display text-lg text-foreground">{data.label}</div>
    <Handle type="source" position={Position.Right} className="!bg-gold !border-0 !w-2 !h-2" />
  </div>
);

export const ActionNode = ({ data, selected }: any) => {
  const drilled = useAppStore(s => (data.rowIds as string[]).some(id => !!s.drilledNodes[id]));
  return (
    <div
      className={cn(
        'relative px-3 py-2 rounded-md border-2 bg-card min-w-[200px] max-w-[240px] cursor-pointer transition-all',
        'border-action/70 hover:border-action',
        selected && 'ring-2 ring-gold',
        data.matched && !selected && 'ring-1 ring-gold/50',
        data.dim && 'opacity-25 saturate-50',
        data.pulse && 'ring-4 ring-gold animate-pulse shadow-[0_0_30px_hsl(var(--gold))]'
      )}
      style={{ background: 'linear-gradient(135deg, hsl(var(--card)), hsl(210 40% 12%))' }}
    >
      {drilled && <DrillBadge />}
      <Handle type="target" position={Position.Left} className="!bg-action !border-0 !w-2 !h-2" />
      <div className="flex items-start gap-1.5">
        <ChevronRight size={12} className={cn('mt-0.5 text-action transition-transform shrink-0', data.expanded && 'rotate-90')} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1 text-[9px] uppercase tracking-wider text-action/80">
            Your Action <PriStar rank={data.priorityRank} /> <EnergyDot energy={data.energy} />
          </div>
          <div className="text-sm font-medium text-foreground leading-tight mt-0.5 break-words">{data.label}</div>
          {data.responseCounts &&
            data.responseCounts.correct + data.responseCounts.mistakes > 0 && (
              <div className="text-[9px] text-muted-foreground mt-1 leading-snug">
                <span className="text-response tabular-nums">{data.responseCounts.correct}</span>
                {data.responseCounts.correct === 1 ? " response" : " responses"}
                {data.responseCounts.mistakes > 0 && (
                  <>
                    {" · "}
                    <span className="text-response-mistake tabular-nums">
                      {data.responseCounts.mistakes}
                    </span>
                    {data.responseCounts.mistakes === 1 ? " mistake" : " mistakes"}
                    {data.responseCounts.hiddenMistakes > 0 && " hidden"}
                  </>
                )}
              </div>
            )}
        </div>
      </div>
      <Handle type="source" position={Position.Right} className="!bg-action !border-0 !w-2 !h-2" />
    </div>
  );
};

export const ResponseNode = ({ data, selected }: any) => {
  const drilled = useAppStore(s => !!s.drilledNodes[data.rowId]);
  const isMistake = data.reactionType === "mistake";
  return (
    <div
      className={cn(
        'relative px-3 py-2 border-2 rounded-sm bg-card min-w-[200px] max-w-[240px] cursor-pointer transition-all',
        isMistake
          ? 'border-response-mistake/70 hover:border-response-mistake'
          : 'border-response/70 hover:border-response',
        selected && 'ring-2 ring-gold',
        data.matched && !selected && 'ring-1 ring-gold/50',
        data.dim && 'opacity-25 saturate-50'
      )}
      style={{
        transform: 'skewX(-4deg)',
        ...(isMistake && {
          background: 'linear-gradient(135deg, hsl(var(--card)), hsl(0 35% 12%))',
        }),
      }}
    >
      {drilled && <DrillBadge />}
      <div style={{ transform: 'skewX(4deg)' }}>
        <Handle
          type="target"
          position={Position.Left}
          className={cn('!border-0 !w-2 !h-2', isMistake ? '!bg-response-mistake' : '!bg-response')}
        />
        <div className="flex items-center gap-1.5">
          <ChevronRight
            size={12}
            className={cn(
              'transition-transform shrink-0',
              isMistake ? 'text-response-mistake' : 'text-response',
              data.expanded && 'rotate-90',
            )}
          />
          <div className="flex-1 min-w-0">
            <div
              className={cn(
                'text-[9px] uppercase tracking-wider flex items-center gap-1 flex-wrap',
                isMistake ? 'text-response-mistake/85' : 'text-response/80',
              )}
            >
              {isMistake ? 'Partner Mistake' : 'Partner Response'}
              <PriStar rank={data.priorityRank} />
            </div>
            <div className="text-xs text-foreground leading-tight mt-0.5 break-words">{data.label}</div>
          </div>
        </div>
        <Handle
          type="source"
          position={Position.Right}
          className={cn('!border-0 !w-2 !h-2', isMistake ? '!bg-response-mistake' : '!bg-response')}
        />
      </div>
    </div>
  );
};

export const FollowupNode = ({ data, selected }: any) => {
  const drilled = useAppStore(s => !!s.drilledNodes[data.rowId]);
  const setPositionId = useAppStore(s => s.setPositionId);
  const setPendingExpandAction = useAppStore(s => s.setPendingExpandAction);
  const target = resolveChainTarget(data.nextNodeId);

  const goChain = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!target) return;
    if (target.expandActionId) setPendingExpandAction(target.expandActionId);
    setPositionId(target.positionId);
  };

  return (
    <div
      className={cn(
        'relative px-3 py-2 rounded-md border-2 bg-card min-w-[200px] max-w-[260px] cursor-pointer transition-all',
        'border-followup/70 hover:border-followup',
        selected && 'ring-2 ring-gold',
        data.matched && !selected && 'ring-1 ring-gold/50',
        data.dim && 'opacity-25 saturate-50'
      )}
      style={{ background: 'linear-gradient(135deg, hsl(var(--card)), hsl(142 30% 10%))' }}
    >
      {drilled && <DrillBadge />}
      <Handle type="target" position={Position.Left} className="!bg-followup !border-0 !w-2 !h-2" />
      <div className="text-[9px] uppercase tracking-wider text-followup/80 flex items-center gap-1">
        Follow-up <EnergyDot energy={data.energy} />
      </div>
      <div className="text-xs text-foreground leading-tight mt-0.5 break-words">{data.label}</div>
      {data.end && <div className="text-[10px] text-muted-foreground mt-1">→ {data.end}</div>}
      {target && (
        <button
          onClick={goChain}
          className="mt-1.5 w-full text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-gold/10 hover:bg-gold/20 text-gold border border-gold/40 flex items-center justify-center gap-1"
        >
          <ArrowRight size={10} /> {target.label}
        </button>
      )}
    </div>
  );
};

export const TerminalNode = ({ data, selected }: any) => {
  const drilled = useAppStore(s => !!s.drilledNodes[data.rowId]);
  return (
    <div
      className={cn(
        'relative px-3 py-2 rounded-full border-2 border-terminal bg-card min-w-[200px] max-w-[260px] cursor-pointer transition-all glow-red',
        selected && 'ring-2 ring-gold',
        data.matched && !selected && 'ring-1 ring-gold/50',
        data.dim && 'opacity-25 saturate-50'
      )}
    >
      {drilled && <DrillBadge />}
      <Handle type="target" position={Position.Left} className="!bg-terminal !border-0 !w-2 !h-2" />
      <div className="text-[9px] uppercase tracking-wider text-terminal flex items-center gap-1">
        <Skull size={10} /> Terminal / Submission
      </div>
      <div className="text-xs text-foreground leading-tight mt-0.5 break-words">{data.label}</div>
      {data.outcome && <div className="text-[10px] text-terminal/80 mt-0.5">{data.outcome}</div>}
      {selected && (
        <div className="mt-1.5 flex items-center justify-center gap-1 text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-terminal/20 text-terminal border border-terminal/60 font-bold animate-pulse">
          <Trophy size={11} /> Submission!
        </div>
      )}
    </div>
  );
};
