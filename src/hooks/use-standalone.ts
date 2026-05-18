import { useEffect, useState } from "react";

export function useIsStandalone() {
  const [standalone, setStandalone] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(display-mode: standalone)");
    const check = () => {
      setStandalone(
        mq.matches ||
          (window.navigator as Navigator & { standalone?: boolean })
            .standalone === true,
      );
    };
    check();
    mq.addEventListener("change", check);
    return () => mq.removeEventListener("change", check);
  }, []);

  return standalone;
}
