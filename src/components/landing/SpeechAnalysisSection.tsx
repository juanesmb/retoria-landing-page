"use client";

import { useEffect, useMemo, useState } from "react";

type Item = { id: string; label: string };

const ITEMS: Item[] = [
  { id: "presence", label: "Body language & presence" },
  { id: "thought", label: "Train of thought" },
  { id: "filler", label: "Filler words" },
  { id: "clarity", label: "Clarity & pacing" },
  { id: "structure", label: "Speech structure" },
  { id: "persuasion", label: "Persuation levels" },
  { id: "confidence", label: "Confidence & tone" },
];

const CYCLE_INTERVAL_MS = 1000;
const ROW_HEIGHT_PX = 56;
const VIEWPORT_HEIGHT_PX = 700; // requested fixed height
const VISIBLE_ROWS = Math.floor(VIEWPORT_HEIGHT_PX / ROW_HEIGHT_PX);
const LONG_FACTOR = 30; // 20x longer list for near-infinite feel

export default function SpeechAnalysisSection() {
  // Build an elongated list repeating the same labels
  const longItems = useMemo(() => {
    const repeated = Array.from({ length: ITEMS.length * LONG_FACTOR }, (_, i) => ITEMS[i % ITEMS.length]);
    return repeated;
  }, []);

  // Start from the middle of the long list
  const [activeIndex, setActiveIndex] = useState(() => Math.floor((ITEMS.length * LONG_FACTOR) / 2));

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % longItems.length);
    }, CYCLE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [longItems.length]);

  // Compute translateY so the centered highlighted row changes smoothly
  const translateY = useMemo(() => {
    const centerRow = Math.floor(VISIBLE_ROWS / 2); // zero-based
    const delta = activeIndex - centerRow;
    return `translateY(${-delta * ROW_HEIGHT_PX}px)`;
  }, [activeIndex]);

  return (
    <section
      className="w-full text-white"
      style={{ backgroundColor: "#0f37e6" }}
    >
      <div className="mx-auto max-w-5xl py-10 sm:py-8">
        <h2 className="mt-4 text-center text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Retoria analyzes your delivery. So you can focus on what matters.
        </h2>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/logo_white.png"
              alt="Retoria Logo" 
              className="w-32 h-32 md:w-40 md:h-40 object-contain"
            />
          </div>
          
          {/* Dynamic List */}
          <div
            className="relative max-w-[calc(100vw-2rem)] mx-4 w-[300px] md:w-[500px] overflow-hidden select-none"
            style={{
              height: VIEWPORT_HEIGHT_PX,
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent, white 50%, white 10%, transparent)",
              maskImage:
                "linear-gradient(to bottom, transparent, white 50%, white 10%, transparent)",
            }}
          >
            {/* Track */}
            <div
              className="transition-transform duration-700 ease-out will-change-transform justify-center"
              style={{ transform: translateY }}
            >
              {longItems.map((item, i) => {
                const isActive = i === activeIndex;
                return (
                  <Row key={`${item.id}-${i}`} label={item.label} active={isActive} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ label, active }: { label: string; active: boolean }) {
  return (
    <div
      className="flex items-center justify-start gap-3 py-3"
      style={{ height: 56 }}
    >
      <span
        className={
          "inline-flex h-6 w-6 items-center justify-center rounded-full border transition-all " +
          (active
            ? "bg-white text-[#0f37e6] border-white shadow-[0_0_0_6px_rgba(255,255,255,0.15)]"
            : "border-white/40 text-white/70")
        }
        aria-hidden
      >
        {/* check icon */}
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </span>
      <span
        className={
          "text-base sm:text-lg font-medium transition-colors text-left " +
          (active ? "text-white" : "text-white/70")
        }
      >
        {label}
      </span>
    </div>
  );
}


