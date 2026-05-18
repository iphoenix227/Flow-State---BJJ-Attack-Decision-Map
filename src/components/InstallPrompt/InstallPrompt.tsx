import { useState } from "react";
import { Share, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useIsStandalone } from "@/hooks/use-standalone";
import { cn } from "@/lib/utils";

const DISMISS_KEY = "bjj_install_dismissed_v1";

export const InstallPrompt = () => {
  const isMobile = useIsMobile();
  const isStandalone = useIsStandalone();
  const [dismissed, setDismissed] = useState(
    () => localStorage.getItem(DISMISS_KEY) === "1",
  );

  if (!isMobile || isStandalone || dismissed) return null;

  const dismiss = () => {
    localStorage.setItem(DISMISS_KEY, "1");
    setDismissed(true);
  };

  const isIos =
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

  return (
    <div
      role="status"
      className={cn(
        "fixed bottom-0 left-0 right-0 z-[1150] mx-3 mb-[max(0.75rem,env(safe-area-inset-bottom))]",
        "rounded-lg border border-gold/40 bg-card/95 backdrop-blur shadow-lg p-3",
      )}
    >
      <div className="flex gap-2">
        <Share className="text-gold shrink-0 mt-0.5" size={18} />
        <div className="flex-1 min-w-0 text-xs leading-relaxed">
          <p className="font-display text-sm text-gold mb-1">Install Flow State</p>
          {isIos ? (
            <p className="text-muted-foreground">
              Tap <strong className="text-foreground">Share</strong> in Safari, then{" "}
              <strong className="text-foreground">Add to Home Screen</strong> for
              full-screen use and offline access.
            </p>
          ) : (
            <p className="text-muted-foreground">
              Use your browser menu to{" "}
              <strong className="text-foreground">Install app</strong> or add to
              your home screen.
            </p>
          )}
        </div>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss install hint"
          className="shrink-0 text-muted-foreground hover:text-foreground p-1"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};
