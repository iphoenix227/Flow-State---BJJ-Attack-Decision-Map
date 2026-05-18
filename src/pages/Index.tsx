import { useState } from "react";
import { Menu } from "lucide-react";
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
import { useIsMobile } from "@/hooks/use-mobile";
import { InstallPrompt } from "@/components/InstallPrompt/InstallPrompt";
import { useEffect } from "react";

const Index = () => {
  const view = useAppStore((s) => s.view);
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "Flow State — BJJ Attack Decision Map";
  }, []);

  return (
    <div className="h-[100dvh] w-screen flex flex-col overflow-hidden bg-background app-shell">
      <header className="h-14 border-b border-border flex items-center px-3 md:px-4 gap-2 md:gap-4 bg-card/40 backdrop-blur shrink-0 relative z-[1100] pt-[env(safe-area-inset-top)]">
        {isMobile && (
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="shrink-0 flex items-center justify-center w-10 h-10 rounded border border-border text-gold hover:border-gold/60 transition-colors"
          >
            <Menu size={18} />
          </button>
        )}
        <h1 className="font-display text-sm md:text-base tracking-wider text-gold hidden sm:block truncate">
          {isMobile ? "FLOW STATE" : "⛩ FLOW STATE · BJJ ATTACK DECISION MAP"}
        </h1>
        <div className="flex-1 flex justify-center min-w-0">
          <SearchBar />
        </div>
        <div className="text-[10px] text-muted-foreground uppercase tracking-widest hidden md:block whitespace-nowrap">
          v5 · {attackActionCount} attacks · {partnerResponseCount} responses
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden relative min-h-0">
        <Sidebar mobileOpen={menuOpen} onMobileOpenChange={setMenuOpen} />
        <main className="flex-1 relative overflow-hidden min-w-0">
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
      <InstallPrompt />
    </div>
  );
};

export default Index;
