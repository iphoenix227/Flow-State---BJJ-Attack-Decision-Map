import { createRoot } from "react-dom/client";
import { registerSW } from "virtual:pwa-register";
import App from "./App.tsx";
import "./index.css";

registerSW({
  onNeedRefresh() {
    if (window.confirm("A new version of Flow State is available. Reload now?")) {
      window.location.reload();
    }
  },
  onOfflineReady() {
    // App shell cached; no prompt needed.
  },
});

createRoot(document.getElementById("root")!).render(<App />);
