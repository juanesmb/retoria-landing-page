"use client";

import { useEffect, useState } from "react";

const ROTATE_MS = 2500;

type Archetype = { emoji: string; head: string; tail: string };

const archetypes: Archetype[] = [
  { emoji: "🚀", head: "Entrepreneurs", tail: " pitching investors." },
  { emoji: "🧑‍💼", head: "Professionals & Leaders", tail: " seeking influence and presence." },
  { emoji: "🎯", head: "Job Seekers", tail: " preparing for high-stakes interviews." },
  { emoji: "🎓", head: "Students", tail: " striving for academic and competition success." },
  { emoji: "✨", head: "Anyone", tail: " who wants to communicate better, inspire others, and leave an impact." },
];

export default function WhoWeServe() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"enter" | "exit">("enter");

  useEffect(() => {
    const id = setInterval(() => {
      // exit, then swap, then enter
      setPhase("exit");
      const timeout = setTimeout(() => {
        setIndex((i) => (i + 1) % archetypes.length);
        setPhase("enter");
      }, 250);
      return () => clearTimeout(timeout);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, []);

  const transitionClasses =
    phase === "enter"
      ? "opacity-100 translate-y-0"
      : "opacity-0 -translate-y-1";

  return (
    <div className="relative w-full">
      <div className="rounded-full bg-indigo-600 ring-1 ring-indigo-600">
        <div className="text-center text-base sm:text-lg text-white leading-relaxed min-h-[2.5rem] flex items-center justify-center">
          <span className={"transition-all duration-300 ease-out " + transitionClasses}>
            <span className="mr-2" aria-hidden>{archetypes[index].emoji}</span>
            <span className="text-white font-semibold">{archetypes[index].head}</span>
            {archetypes[index].tail}
          </span>
        </div>
      </div>
    </div>
  );
}


