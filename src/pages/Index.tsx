import { Sidebar } from "@/components/Sidebar/Sidebar";
import { TreeView } from "@/components/TreeView/TreeView";
import { PositionMapOverview } from "@/components/TreeView/PositionMapOverview";
import { NodeDetailPanel } from "@/components/NodeDetailPanel/NodeDetailPanel";
import { SearchBar } from "@/components/SearchBar/SearchBar";
import { GlossaryPage } from "@/components/GlossaryPage/GlossaryPage";
import { ConceptsPage } from "@/components/ConceptsPage/ConceptsPage";
import { Dashboard } from "@/components/Dashboard/Dashboard";
import { ReactionsPage } from "@/components/ReactionsPage/ReactionsPage";
import { GripsPage } from "@/components/GripsPage/GripsPage";
import { TrainingLogPage } from "@/components/TrainingLogPage/TrainingLogPage";
import { useAppStore } from "@/store/useAppStore";
import { attackActionCount, partnerResponseCount } from "@/lib/bjj";
import { useEffect } from "react";

const Index = () => {
  const view = useAppStore((s) => s.view);

  useEffect(() => {
    document.title = "Flow State — BJJ Attack Decision Map";
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden bg-background">
      <header className="h-14 border-b border-border flex items-center px-4 gap-4 bg-card/40 backdrop-blur shrink-0 relative z-[1100]">
        <h1 className="font-display text-base tracking-wider text-gold hidden md:block">
          ⛩ FLOW STATE · BJJ ATTACK DECISION MAP
        </h1>
        <div className="flex-1 flex justify-center">
          <SearchBar />
        </div>
        <div className="text-[10px] text-muted-foreground uppercase tracking-widest hidden md:block whitespace-nowrap">
          v5 · {attackActionCount} attacks · {partnerResponseCount} responses
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden relative">
        <Sidebar />
        <main className="flex-1 relative overflow-hidden">
          {view === "tree" && <TreeView />}
          {view === "overview" && <PositionMapOverview />}
          {view === "glossary" && <GlossaryPage />}
          {view === "concepts" && <ConceptsPage />}
          {view === "dashboard" && <Dashboard />}
          {view === "reactions" && <ReactionsPage />}
          {view === "grips" && <GripsPage />}
          {view === "training_log" && <TrainingLogPage />}
        </main>
        {view === "tree" && <NodeDetailPanel />}
      </div>
    </div>
  );
};

export default Index;
