import { motion } from "framer-motion";
import { Clock3, Globe2, Orbit, Sparkles, Zap } from "lucide-react";

const ContactSignalPanel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="glass-panel p-6 h-full">
        <div className="flex items-center justify-between gap-3 mb-6 border-b border-[#00ff88]/25 pb-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-[#00ff88] [font-family:'Share_Tech_Mono',monospace]">
              Work Status
            </p>
            <h3 className="text-xl font-bold text-white tracking-[0.08em]">OPEN TO WORK</h3>
          </div>
          <span className="hud-pill">Active</span>
        </div>

        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            Availability peaks when I’m building, iterating, and solving real product problems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-[#081522]/75 border border-[#2f4460] p-4">
            <div className="flex items-center gap-2 mb-2 text-[#00d4ff]">
              <Clock3 className="h-4 w-4" />
              <span className="text-xs uppercase tracking-[0.18em] [font-family:'Share_Tech_Mono',monospace]">Response Window</span>
            </div>
            <p className="text-sm text-muted-foreground">Usually within 24 hours.</p>
          </div>

          <div className="bg-[#081522]/75 border border-[#2f4460] p-4">
            <div className="flex items-center gap-2 mb-2 text-[#ff3fff]">
              <Globe2 className="h-4 w-4" />
              <span className="text-xs uppercase tracking-[0.18em] [font-family:'Share_Tech_Mono',monospace]">Timezone</span>
            </div>
            <p className="text-sm text-muted-foreground">Cambodia / UTC+7</p>
          </div>

          <div className="bg-[#081522]/75 border border-[#2f4460] p-4">
            <div className="flex items-center gap-2 mb-2 text-[#00ff88]">
              <Zap className="h-4 w-4" />
              <span className="text-xs uppercase tracking-[0.18em] [font-family:'Share_Tech_Mono',monospace]">Best For</span>
            </div>
            <p className="text-sm text-muted-foreground">Projects, internships, and collaborations.</p>
          </div>

          <div className="bg-[#081522]/75 border border-[#2f4460] p-4">
            <div className="flex items-center gap-2 mb-2 text-[#00d4ff]">
              <Orbit className="h-4 w-4" />
              <span className="text-xs uppercase tracking-[0.18em] [font-family:'Share_Tech_Mono',monospace]">Focus</span>
            </div>
            <p className="text-sm text-muted-foreground">Web apps, AI tools, and practical systems.</p>
          </div>
        </div>

        <div className="border-t border-[#00ff88]/25 pt-4">
          <div className="flex items-center gap-2 text-[#00ff88] mb-2">
            <Sparkles className="h-4 w-4" />
            <span className="text-xs uppercase tracking-[0.18em] [font-family:'Share_Tech_Mono',monospace]">
              Looking For
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            Open for freelance work, internships, and project-based collaboration.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactSignalPanel;
