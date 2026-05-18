import { useRef } from "react";
import { Download, Upload } from "lucide-react";
import { toast } from "sonner";
import {
  applyBackup,
  downloadBackup,
  parseBackupFile,
} from "@/lib/backup";

export const DataBackup = () => {
  const fileRef = useRef<HTMLInputElement>(null);

  const onImport = async (file: File) => {
    try {
      const data = await parseBackupFile(file);
      const ok = window.confirm(
        "Import will replace your drill progress, training log, videos, filters, and preferences on this device. Continue?",
      );
      if (!ok) return;
      applyBackup(data);
      toast.success("Backup imported", {
        description: "Reloading to apply your data…",
      });
      setTimeout(() => window.location.reload(), 600);
    } catch (e) {
      toast.error("Import failed", {
        description: e instanceof Error ? e.message : "Invalid file",
      });
    }
  };

  return (
    <div className="mt-3 pt-3 border-t border-sidebar-border/60">
      <div className="text-[10px] text-muted-foreground uppercase tracking-widest mb-2">
        Your data
      </div>
      <p className="text-[9px] text-muted-foreground/80 mb-2 leading-snug">
        Progress is saved on this device only. Export before switching phones or
        clearing browser data.
      </p>
      <div className="flex flex-col gap-1.5">
        <button
          type="button"
          onClick={() => {
            downloadBackup();
            toast.success("Backup downloaded");
          }}
          className="flex items-center justify-center gap-2 w-full py-2 rounded border border-border text-[10px] uppercase tracking-wider text-muted-foreground hover:border-gold/60 hover:text-gold transition-colors min-h-[40px]"
        >
          <Download size={14} />
          Export backup
        </button>
        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          className="flex items-center justify-center gap-2 w-full py-2 rounded border border-border text-[10px] uppercase tracking-wider text-muted-foreground hover:border-gold/60 hover:text-gold transition-colors min-h-[40px]"
        >
          <Upload size={14} />
          Import backup
        </button>
        <input
          ref={fileRef}
          type="file"
          accept="application/json,.json"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) void onImport(file);
            e.target.value = "";
          }}
        />
      </div>
    </div>
  );
};
