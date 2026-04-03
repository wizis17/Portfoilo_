import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Command, Cpu, Globe2 } from "lucide-react";
import { Link } from "react-router-dom";

const phrases = [
  "FULL-STACK PROJECTS",
  "AI-POWERED BUILDS",
  "PROBLEM SOLVING",
  "CONTINUOUS LEARNING",
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 cyber-grid" />
      <div className="absolute inset-0 cyber-scanlines pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(0,255,136,0.14),transparent_40%),radial-gradient(circle_at_80%_75%,rgba(0,212,255,0.12),transparent_45%),radial-gradient(circle_at_65%_20%,rgba(255,0,255,0.10),transparent_35%)]" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-5 inline-flex border border-[#00ff88]/70 bg-[#02140f]/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#00ff88] [font-family:'Share_Tech_Mono',monospace]"
            >
              Portfolio_Status: Online
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="leading-[0.9]"
            >
              <span
                className="cyber-glitch block text-5xl font-black uppercase tracking-tight text-white sm:text-6xl md:text-7xl xl:text-8xl [font-family:'Orbitron',monospace]"
                data-text="BUILDING"
              >
                BUILDING
              </span>
              <span className="block text-5xl font-black uppercase tracking-tight text-[#00ff88] sm:text-6xl md:text-7xl xl:text-8xl [font-family:'Orbitron',monospace]">
                MODERN WEB
              </span>
              <span className="block bg-gradient-to-r from-[#ff00ff] via-[#c281ff] to-[#00d4ff] bg-clip-text text-5xl font-black uppercase tracking-tight text-transparent sm:text-6xl md:text-7xl xl:text-8xl [font-family:'Orbitron',monospace]">
                AI-AGENTs
              </span>
              <span className="block bg-gradient-to-r from-[#c8a6ff] via-[#73b7ff] to-[#00d4ff] bg-clip-text text-5xl font-black uppercase tracking-tight text-transparent sm:text-6xl md:text-7xl xl:text-8xl [font-family:'Orbitron',monospace]">
                SYSTEMS
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mt-8 max-w-2xl border-l-2 border-[#00ff88]/90 pl-5"
            >
              <p className="text-lg uppercase tracking-[0.16em] text-[#00d4ff] [font-family:'Share_Tech_Mono',monospace]">
                &gt; {phrases[index]}
                <span className="cyber-cursor">_</span>
              </p>
              <p className="mt-4 text-base leading-8 text-[#9ba3b7] [font-family:'JetBrains_Mono',monospace] md:text-[1.08rem]">
                &gt; IT Engineering student focused on software development, web applications, and AI integration.
                I build practical projects with clean code, strong fundamentals, and real-world impact.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                to="/projects"
                className="cyber-btn-primary inline-flex min-h-11 items-center px-7 py-3 text-sm font-bold uppercase tracking-[0.18em] [font-family:'Share_Tech_Mono',monospace]"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="cyber-btn-outline inline-flex min-h-11 items-center px-7 py-3 text-sm font-bold uppercase tracking-[0.18em] [font-family:'Share_Tech_Mono',monospace]"
              >
                Contact Me
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="relative lg:col-span-2"
          >
            <div className="cyber-panel p-6 sm:p-8">
              <div className="mb-8 flex items-center justify-between border-b border-[#00ff88]/30 pb-4">
                <p className="text-xs uppercase tracking-[0.22em] text-[#00ff88] [font-family:'Share_Tech_Mono',monospace]">
                  Portfolio_V2
                </p>
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff4d6d]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffd166]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#00ff88]" />
                </div>
              </div>

              <div className="grid grid-cols-5 gap-4">
                <div className="cyber-subpanel col-span-3 flex min-h-28 items-center justify-center">
                  <Command className="h-11 w-11 text-[#00ff88] drop-shadow-[0_0_8px_rgba(0,255,136,0.7)]" strokeWidth={1.7} />
                </div>

                <div className="cyber-subpanel col-span-2 flex min-h-28 flex-col items-center justify-center">
                  <p className="text-4xl font-black text-[#ff3fff] [font-family:'Orbitron',monospace]">08</p>
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[#ff3fff] [font-family:'Share_Tech_Mono',monospace]">
                    Projects
                  </p>
                </div>

                <div className="cyber-subpanel col-span-5 flex min-h-28 items-center gap-3 px-5">
                  <Globe2 className="h-8 w-8 text-[#00d4ff] drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]" strokeWidth={1.6} />
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-[#00d4ff] [font-family:'Share_Tech_Mono',monospace]">
                      Core_Stack
                    </p>
                    <p className="mt-1 text-sm text-[#96a0b2] [font-family:'JetBrains_Mono',monospace]">
                      React, TypeScript, Python, Firebase.
                    </p>
                  </div>
                </div>

                <div className="cyber-subpanel col-span-5 flex min-h-24 items-center justify-between px-5">
                  <div className="flex items-center gap-3">
                    <Cpu className="h-7 w-7 text-[#00ff88]" strokeWidth={1.6} />
                    <p className="text-xs uppercase tracking-[0.22em] text-[#00ff88] [font-family:'Share_Tech_Mono',monospace]">
                      Availability
                    </p>
                  </div>
                  <span className="text-base font-bold text-white [font-family:'Orbitron',monospace]">OPEN TO WORK</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 md:block"
        animate={{ opacity: [0.45, 1, 0.45] }}
        transition={{ duration: 1.2, repeat: Infinity }}
      >
        <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-[#00ff88] [font-family:'Share_Tech_Mono',monospace]">
          <span>Scroll</span>
          <span className="inline-flex h-5 w-5 items-center justify-center border border-[#00ff88]/60">
            <ArrowRight className="h-3 w-3 rotate-90" />
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
