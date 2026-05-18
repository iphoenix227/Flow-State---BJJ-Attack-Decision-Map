import { createRoot } from "react-dom/client";
import { registerSW } from "virtual:pwa-register";
import { toast } from "sonner";
import App from "./App.tsx";
import "./index.css";

registerSW({
  onNeedRefresh() {
    toast("Update available", {
      description: "A new version of Flow State is ready.",
      action: {
        label: "Reload",
        onClick: () => window.location.reload(),
      },
      duration: Infinity,
    });
  },
});

createRoot(document.getElementById("root")!).render(<App />);
