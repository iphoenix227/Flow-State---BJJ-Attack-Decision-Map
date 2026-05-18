/** Shared scrollable page shell for mobile-safe padding. */
export const scrollPageClass =
  "h-full overflow-y-auto overscroll-contain scrollbar-thin";

export const scrollPageInnerClass =
  "max-w-6xl mx-auto p-4 md:p-6 pb-[max(1.5rem,env(safe-area-inset-bottom))]";

/** Prevents iOS Safari zoom-on-focus (needs ≥16px). */
export const touchInputClass = "text-base md:text-sm";
