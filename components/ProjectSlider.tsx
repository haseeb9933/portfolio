"use client";

import { useEffect, useRef, useState } from "react";
import { projects } from "@/lib/data";

const accents = ["#38bdf8", "#22d3ee", "#0ea5e9", "#60a5fa", "#2dd4bf", "#7dd3fc", "#818cf8"];

export default function ProjectSlider() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  const paused = useRef(false);

  const scrollToIdx = (i: number) => {
    const el = ref.current;
    if (!el) return;
    const child = el.children[i] as HTMLElement | undefined;
    if (child) el.scrollTo({ left: child.offsetLeft - el.offsetLeft, behavior: "smooth" });
  };

  const step = (dir: number) => {
    const el = ref.current;
    if (!el) return;
    if (dir > 0 && el.scrollLeft + el.clientWidth >= el.scrollWidth - 8) {
      el.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }
    el.scrollBy({ left: dir * el.clientWidth * 0.92, behavior: "smooth" });
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const center = el.scrollLeft + el.clientWidth / 2;
        let best = 0, bestD = Infinity;
        Array.from(el.children).forEach((c, i) => {
          const ch = c as HTMLElement;
          const cc = ch.offsetLeft - el.offsetLeft + ch.clientWidth / 2;
          const d = Math.abs(cc - center);
          if (d < bestD) { bestD = d; best = i; }
        });
        setActive(best);
      });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      if (paused.current) return;
      step(1);
    }, 4800);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      onTouchStart={() => (paused.current = true)}
    >
      <div
        ref={ref}
        className="flex snap-x snap-mandatory items-stretch gap-5 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((p, i) => {
          const accent = accents[i % accents.length];
          return (
            <article
              key={p.name}
              className="glass glass-hover glow-card group flex min-w-[86%] flex-[0_0_86%] snap-start flex-col overflow-hidden rounded-2xl sm:min-w-[48%] sm:flex-[0_0_48%] lg:min-w-[31.5%] lg:flex-[0_0_31.5%]"
            >
              <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${accent}, ${accent}44)` }} />
              <div className="flex flex-1 flex-col p-5 sm:p-7">
                <div className="flex items-center justify-between gap-3">
                  <span
                    className="rounded-full px-2.5 py-1 text-xs font-semibold"
                    style={{ backgroundColor: `${accent}1f`, color: accent }}
                  >
                    {p.tag}
                  </span>
                  <div className="flex gap-3 font-mono text-[13px] font-semibold">
                    {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="cursor-pointer text-violet-300 transition-colors duration-200 hover:text-white">Live ↗</a>}
                    {p.code && <a href={p.code} target="_blank" rel="noreferrer" className="cursor-pointer text-slate-400 transition-colors duration-200 hover:text-white">Code ↗</a>}
                  </div>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-white">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.blurb}</p>
                <ul className="mt-4 space-y-2.5">
                  {p.points.map((pt, j) => (
                    <li key={j} className="flex gap-3 text-[14px] leading-relaxed text-slate-300">
                      <span className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full" style={{ backgroundColor: accent }} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                {p.highlights && (
                  <div className="mt-5">
                    <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500">Key features</div>
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {p.highlights.map((h) => (
                        <span
                          key={h}
                          className="rounded-full px-2.5 py-1 text-[11.5px] font-medium"
                          style={{ backgroundColor: `${accent}1f`, color: accent, border: `1px solid ${accent}33` }}
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-auto pt-6">
                  <div className="flex flex-wrap gap-2 border-t border-white/10 pt-5">
                    {p.stack.map((t) => (
                      <span key={t} className="rounded-md bg-white/5 px-2.5 py-1 font-mono text-xs text-slate-400">{t}</span>
                    ))}
                  </div>
                  {(p.code || p.live) && (
                    <a
                      href={p.code || p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 font-mono text-[13px] font-semibold text-white transition-colors duration-200 hover:border-violet-400/60 hover:bg-white/10"
                    >
                      View project
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-7 flex items-center justify-between">
        <div className="flex gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to project ${i + 1}`}
              onClick={() => scrollToIdx(i)}
              className="h-2 cursor-pointer rounded-full transition-all duration-300"
              style={{
                width: active === i ? 26 : 8,
                background: active === i ? "linear-gradient(90deg,#22d3ee,#3b82f6)" : "rgba(255,255,255,0.2)",
              }}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            aria-label="Previous project"
            onClick={() => step(-1)}
            className="glass grid h-10 w-10 cursor-pointer place-items-center rounded-full text-white transition-colors duration-200 hover:border-violet-400/60"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <button
            aria-label="Next project"
            onClick={() => step(1)}
            className="grad-btn grid h-10 w-10 cursor-pointer place-items-center rounded-full text-white shadow-sm transition-transform duration-200 hover:scale-105"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
