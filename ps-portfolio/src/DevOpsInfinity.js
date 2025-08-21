import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  ClipboardList,
  Code2,
  GitBranch,
  Rocket,
  Server,
  TestTube2,
  Wrench,
  Layers,
  Cloud,
  ShieldCheck,
  BookOpen,
} from "lucide-react";


export default function DevOpsInfinity() {
  const [speed, setSpeed] = useState(3.0); // slower default speed
  const [stageIndex, setStageIndex] = useState(0);
  const [glow, setGlow] = useState(true);
  const [darkMode, setDarkMode] = useState(true);



  // SVG path for an infinity symbol (lemniscate-like)
  const pathD = useMemo(
    () =>
      `M -240 0 C -240 -130 -70 -130 0 0 C 70 130 240 130 240 0 C 240 -130 70 -130 0 0 C -70 130 -240 130 -240 0`,
    []
  );

  return (
    <div>
      {/* Canvas */}
      <main className="flex-1 grid place-items-center p-4 md:p-6">
        <div className="relative w-full max-w-5xl aspect-[3/2] md:aspect-[3/1]">
          {/* Infinity path */}
          <svg viewBox="-300 -170 600 340" className="w-full h-full">
            <defs>
              <linearGradient id="wire" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="50%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#818cf8" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Static base path */}
            <path d={pathD} fill="none" stroke="#0b1020" strokeWidth={20} strokeLinecap="round" />

            {/* Animated solid overlay (motion path) */}
            <motion.path
              d={pathD}
              fill="none"
              stroke="url(#wire)"
              strokeWidth={12}
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
              style={{ filter: glow ? "url(#glow)" : "none" }}
            />

            {/* Moving pulse (small orb) */}
            <motion.circle
              r={8}
              fill="#ffffff"
              initial={{ offsetDistance: "0%", opacity: 0.95 }}
              animate={{ offsetDistance: "100%" }}
              transition={{ duration: speed * 2.5, repeat: Infinity, ease: "linear" }}
              style={{
                offsetPath: `path('${pathD}')`,
                filter: glow ? "drop-shadow(0 0 14px #34d399) drop-shadow(0 0 20px #22d3ee)" : "none",
              }}
            />
          </svg>

        

          {/* Center caption */}
          <div className="absolute inset-x-0 -bottom-4 md:bottom-2 flex items-center justify-center px-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={stageIndex}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 0.9, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="text-center text-xs md:text-sm lg:text-base text-slate-300"
              >
                <span className="text-slate-400">Sbu's Portfolio Incoming 🚀🚀🚀</span>{" "}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  );
}