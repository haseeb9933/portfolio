"use client";

import { useEffect, useState } from "react";

const links: [string, string][] = [
  ["Skills", "skills"],
  ["Work", "work"],
  ["Services", "services"],
  ["Process", "process"],
];

export default function Nav() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);
      setScrolled(h.scrollTop > 16);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach(([, id]) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  // lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* scroll progress */}
      <div className="fixed inset-x-0 top-0 z-[60] h-[2px]">
        <div className="h-full bg-gradient-to-r from-iris via-violet to-fuchsia" style={{ width: `${progress}%` }} />
      </div>

      <header className="fixed inset-x-0 top-4 z-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <nav
            className={`glass flex items-center justify-between rounded-2xl px-3 transition-all duration-300 sm:px-4 ${
              scrolled ? "py-2 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.7)]" : "py-2.5"
            }`}
          >
            <a href="#top" onClick={() => setOpen(false)} className="group flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-[11px] bg-gradient-to-br from-iris via-violet to-fuchsia font-display text-base font-extrabold text-white shadow-lg shadow-violet/30 transition-transform duration-300 group-hover:scale-105">H</span>
              <span className="font-mono text-[15px] font-semibold tracking-tight text-white">haseeb.dev</span>
              <span className="ml-1 hidden items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 font-mono text-[10px] font-medium text-emerald-300 lg:flex">
                <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-emerald-400" />
                available
              </span>
            </a>

            {/* desktop links */}
            <div className="hidden items-center gap-1 md:flex">
              {links.map(([label, id]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`rounded-lg px-3 py-1.5 font-mono text-[13px] transition-colors duration-200 ${
                    active === id ? "bg-white/10 text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              {/* desktop CTA */}
              <a
                href="#contact"
                className="grad-btn group hidden cursor-pointer items-center gap-1.5 rounded-lg px-4 py-2 font-mono text-[13px] font-semibold text-white shadow-sm md:flex"
              >
                Get in touch
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:translate-x-0.5">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </a>

              {/* mobile hamburger */}
              <button
                type="button"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                onClick={() => setOpen((o) => !o)}
                className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-white transition-colors duration-200 hover:bg-white/10 md:hidden"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {open ? (
                    <>
                      <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                    </>
                  ) : (
                    <>
                      <path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </nav>

          {/* mobile menu */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-out md:hidden ${
              open ? "mt-2 max-h-[420px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="glass rounded-2xl p-2">
              {links.map(([label, id]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className={`block rounded-xl px-4 py-3 font-mono text-sm transition-colors duration-200 ${
                    active === id ? "bg-white/10 text-white" : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="grad-btn mt-1.5 flex items-center justify-center gap-1.5 rounded-xl px-4 py-3 font-mono text-sm font-semibold text-white"
              >
                Get in touch
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
