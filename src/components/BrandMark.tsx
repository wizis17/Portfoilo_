import { cn } from "@/lib/utils";

interface BrandMarkProps {
  compact?: boolean;
  className?: string;
}

const BrandMark = ({ compact = false, className }: BrandMarkProps) => {
  return (
    <div className={cn("inline-flex flex-col items-start gap-1", className)}>
      <div className="relative inline-flex items-center px-3 py-1.5">
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 border border-[#00ff88]/45 bg-[#04131d]/88 [clip-path:polygon(0_7px,7px_0,calc(100%_-_10px)_0,100%_10px,100%_calc(100%_-_7px),calc(100%_-_7px)_100%,0_100%)]"
        />
        <span aria-hidden className="pointer-events-none absolute left-2 top-1/2 h-4 w-px -translate-y-1/2 bg-[#00d4ff]/80" />
        <span aria-hidden className="pointer-events-none absolute -bottom-px right-3 h-px w-6 bg-[#00ff88]/75" />

        <span className="relative flex items-center gap-2">
          <span className="text-[0.86rem] font-medium uppercase tracking-[0.34em] text-[#00ff88] [font-family:'Orbitron',monospace]">
            THENG
          </span>
          {!compact && (
            <span className="text-[8px] font-medium uppercase tracking-[0.3em] text-[#00d4ff] [font-family:'Share_Tech_Mono',monospace]">
              PORTFOLIO
            </span>
          )}
        </span>
      </div>
      {!compact && (
        <span className="pl-1 text-[9px] uppercase tracking-[0.28em] text-[#8aa0bf] [font-family:'Share_Tech_Mono',monospace]">
          SOFTWARE DEVELOPER
        </span>
      )}
    </div>
  );
};

export default BrandMark;
