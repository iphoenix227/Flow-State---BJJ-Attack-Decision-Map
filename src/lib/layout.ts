/** Shared scrollable page shell for mobile-safe padding. */
export const scrollPageClass =
  "h-full overflow-y-auto overscroll-contain scrollbar-thin";

export const scrollPageInnerClass =
  "max-w-6xl mx-auto p-4 md:p-6 pb-[max(1.5rem,env(safe-area-inset-bottom))]";

/** Prevents iOS Safari zoom-on-focus (needs ≥16px). */
export const touchInputClass = "text-base md:text-sm";

/** Outer app header — safe area sits above the 3.5rem toolbar row. */
export const appHeaderClass =
  "shrink-0 border-b border-border bg-card/40 backdrop-blur relative z-[1100] pt-[env(safe-area-inset-top,0px)]";

export const appHeaderInnerClass =
  "h-14 flex items-center px-3 md:px-4 gap-2 md:gap-4";

/** Tree overlay controls: bottom-right on phone (clear status bar), top-right on desktop. */
export const treeOverlayClass =
  "absolute z-10 flex flex-col gap-2 max-md:bottom-[max(0.75rem,env(safe-area-inset-bottom,0px))] max-md:right-[max(0.75rem,env(safe-area-inset-right,0px))] max-md:items-end md:top-3 md:right-3 md:items-end";
