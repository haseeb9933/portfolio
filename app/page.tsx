import { profile, about, skills, stats, services } from "@/lib/data";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import AgentGraph from "@/components/AgentGraph";
import ProjectSlider from "@/components/ProjectSlider";
import PointerGlow from "@/components/PointerGlow";
import Socials from "@/components/Socials";
import Nav from "@/components/Nav";

const marquee = [
  "LangGraph", "CrewAI", "OpenAI", "Gemini", "Selenium", "Playwright",
  "Puppeteer", "DrissionPage", "FastAPI", "Next.js", "n8n", "Supabase",
  "PostgreSQL", "Docker", "AWS", "Twilio", "ElevenLabs", "RAG",
];

const skillAccents = ["#38bdf8", "#22d3ee", "#0ea5e9", "#2dd4bf", "#60a5fa", "#7dd3fc"];

const process = [
  { n: "01", title: "Scope", desc: "We pin down the real problem, success criteria, and constraints — no scope creep, no guesswork." },
  { n: "02", title: "Architect", desc: "I design the agent / automation system and choose the right stack before a line of code is written." },
  { n: "03", title: "Build", desc: "Production-grade implementation with error recovery, logging, and human-in-the-loop safety baked in." },
  { n: "04", title: "Ship & support", desc: "Deployed, documented, and handed over — with monitoring and optional ongoing maintenance." },
];

function ServiceIcon({ i }: { i: number }) {
  const common = {
    width: 22, height: 22, viewBox: "0 0 24 24", fill: "none",
    stroke: "currentColor", strokeWidth: 1.8,
    strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
  };
  switch (i) {
    case 0: return (<svg {...common}><rect x="3" y="11" width="18" height="10" rx="2" /><circle cx="12" cy="5" r="2" /><path d="M12 7v4" /><path d="M8 16h.01" /><path d="M16 16h.01" /></svg>);
    case 1: return (<svg {...common}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /><path d="M8 9h8" /><path d="M8 13h5" /></svg>);
    case 2: return (<svg {...common}><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14a9 3 0 0 0 18 0V5" /><path d="M3 12a9 3 0 0 0 18 0" /></svg>);
    case 3: return (<svg {...common}><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18" /></svg>);
    case 4: return (<svg {...common}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>);
    case 5: return (<svg {...common}><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>);
    default: return (<svg {...common}><line x1="6" y1="3" x2="6" y2="15" /><circle cx="18" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M18 9a9 9 0 0 1-9 9" /></svg>);
  }
}

function Eyebrow({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="grad-text font-mono text-sm font-bold">{n}</span>
      <span className="h-px w-8 bg-white/15" />
      <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-slate-500">{label}</span>
    </div>
  );
}

function SectionTitle({ n, label, title }: { n: string; label: string; title: string }) {
  return (
    <Reveal className="mb-9 max-w-2xl sm:mb-14">
      <Eyebrow n={n} label={label} />
      <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-white sm:mt-4 sm:text-[2.5rem] sm:leading-[1.1]">
        {title}
      </h2>
    </Reveal>
  );
}

export default function Home() {
  return (
    <main className="grain relative bg-night">
      <PointerGlow />
      {/* ───────── FLOATING NAV ───────── */}
      <Nav />

      {/* ───────── HERO ───────── */}
      <section id="top" className="relative overflow-hidden border-b border-white/5">
        <div className="aurora left-[-6%] top-[-4%] h-96 w-96 bg-violet" />
        <div className="aurora right-[-6%] top-[6%] h-96 w-[26rem] bg-fuchsia opacity-40" />
        <div className="aurora bottom-[-18%] left-[32%] h-80 w-80 bg-iris opacity-50" />
        <div className="pointer-events-none absolute inset-0 line-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 pb-16 pt-28 sm:gap-12 sm:pb-24 sm:pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:pt-40">
          <div className="stagger">
            <div className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-xs text-slate-300">
              <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-emerald-400" />
              Available for freelance &amp; remote roles
            </div>

            <p className="mt-7 font-mono text-sm font-medium uppercase tracking-[0.18em] text-violet-300">// {profile.role}</p>
            <h1 className="mt-4 font-display text-[1.9rem] font-extrabold leading-[1.08] tracking-tight text-white min-[420px]:text-[2.3rem] sm:text-[3.4rem] sm:leading-[1.05]">
              I build AI systems &amp;<br /><span className="grad-text">automation bots.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:mt-6 sm:text-lg">{profile.tagline}</p>

            <div className="mt-7 flex flex-wrap gap-2">
              {["LangGraph", "OpenAI", "Selenium", "Playwright", "Puppeteer", "n8n"].map((t) => (
                <span key={t} className="glass rounded-lg px-3 py-1.5 font-mono text-xs text-slate-300">{t}</span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#work" className="grad-btn cursor-pointer rounded-lg px-5 py-3 font-mono text-sm font-semibold text-white shadow-lg shadow-violet/30">View my work →</a>
              <a href="#contact" className="glass glass-hover cursor-pointer rounded-lg px-5 py-3 font-mono text-sm font-semibold text-white">Get in touch</a>
              {profile.resumeUrl && (
                <a href={profile.resumeUrl} className="glass glass-hover cursor-pointer rounded-lg px-5 py-3 font-mono text-sm font-semibold text-white">Résumé</a>
              )}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[13px] text-slate-500">
              <span>{profile.location}</span>
              <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:inline-block" />
              <span>{profile.timezone}</span>
              <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:inline-block" />
              <a href={profile.github} className="text-slate-300 transition-colors duration-200 hover:text-violet-300">GitHub ↗</a>
              <a href={profile.linkedin} className="text-slate-300 transition-colors duration-200 hover:text-violet-300">LinkedIn ↗</a>
            </div>
          </div>

          {/* photo */}
          <div className="enter-pop relative mx-auto w-full max-w-[13rem] sm:max-w-[19.5rem]">
            <div className="aurora absolute -inset-5 bg-iris/20" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-night2 to-night shadow-2xl">
              {/* designed backdrop behind the cutout */}
              <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_16%,rgba(56,189,248,0.22),transparent_62%)]" />
              <div className="absolute inset-0 line-grid opacity-30 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_30%,black,transparent)]" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/haseeb-cutout.webp?v=7"
                alt="Haseeb Tariq, AI &amp; Automation Engineer"
                className="absolute inset-0 h-full w-full object-cover object-top [filter:drop-shadow(0_10px_28px_rgba(0,0,0,0.45))]"
              />
              {/* base fade so the torso melts into the panel */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-night2 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ───────── TECH MARQUEE ───────── */}
      <section className="border-b border-white/5 bg-night2 py-5">
        <div className="marquee-mask overflow-hidden">
          <div className="marquee-track gap-3">
            {[...marquee, ...marquee].map((t, i) => (
              <span key={i} className="glass rounded-md px-3 py-1.5 font-mono text-[13px] font-medium text-slate-300">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── STATS ───────── */}
      <section className="border-b border-white/5">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-6 py-12 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="glass rounded-2xl px-5 py-6 sm:px-6 sm:py-7">
              <div className="grad-text font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
                <CountUp to={s.to} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm leading-snug text-slate-400">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ───────── SKILLS (prominent) ───────── */}
      <section id="skills" className="relative overflow-hidden">
        <div className="aurora left-[-8%] top-[20%] h-72 w-72 bg-iris opacity-30" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <SectionTitle n="01" label="Capabilities" title="A full toolkit — from agents to browser bots." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((s, i) => {
              const accent = skillAccents[i % skillAccents.length];
              const highlight = s.group === "Browser Automation" || s.group === "AI & LLMs";
              return (
                <Reveal key={s.group} delay={(i % 3) * 80}>
                  <div className={`${highlight ? "grad-border" : "glass"} glass-hover glow-card h-full overflow-hidden rounded-2xl`}>
                    <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${accent}, ${accent}33)` }} />
                    <div className="p-6">
                      <div className="flex items-center gap-2.5">
                        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: accent }} />
                        <h3 className="font-display text-base font-bold text-white">{s.group}</h3>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {s.items.map((it) => (
                          <span key={it} className="rounded-md bg-white/5 px-2.5 py-1 font-mono text-[12.5px] text-slate-300 transition-colors duration-200 hover:bg-white/10 hover:text-white">{it}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── WORK (prominent slider) ───────── */}
      <section id="work" className="relative overflow-hidden border-y border-white/5 bg-night2">
        <div className="aurora right-[-8%] top-[10%] h-80 w-80 bg-fuchsia opacity-25" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <SectionTitle n="02" label="Selected Work" title="Systems &amp; bots I've shipped." />
          <Reveal><ProjectSlider /></Reveal>
        </div>
      </section>

      {/* ───────── SERVICES ───────── */}
      <section id="services" className="relative mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <SectionTitle n="03" label="Services" title="How I can help you." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 80}>
              <div className="glass glass-hover glow-card group h-full rounded-2xl p-6">
                <div className="grad-ring grid h-11 w-11 place-items-center rounded-xl text-night shadow-md shadow-violet/30">
                  <ServiceIcon i={i} />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (<span key={t} className="font-mono text-xs text-violet-300/80">#{t}</span>))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {(profile.fiverr || profile.upwork) && (
          <div className="mt-10 flex flex-wrap gap-3">
            {profile.fiverr && <a href={profile.fiverr} className="glass glass-hover cursor-pointer rounded-lg px-5 py-3 font-mono text-sm font-semibold text-white">Hire me on Fiverr ↗</a>}
            {profile.upwork && <a href={profile.upwork} className="glass glass-hover cursor-pointer rounded-lg px-5 py-3 font-mono text-sm font-semibold text-white">Hire me on Upwork ↗</a>}
          </div>
        )}
      </section>

      {/* ───────── PROCESS (new) ───────── */}
      <section id="process" className="border-y border-white/5 bg-night2">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <SectionTitle n="04" label="Process" title="How I work." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={p.n} delay={i * 90}>
                <div className="glass glass-hover glow-card h-full rounded-2xl p-6">
                  <div className="grad-text font-display text-3xl font-extrabold">{p.n}</div>
                  <h3 className="mt-3 font-display text-lg font-bold text-white">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── ABOUT + AGENT GRAPH ───────── */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <SectionTitle n="05" label="About" title="An engineer who ships, not a demo-maker." />
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <Reveal>
            <p className="text-lg leading-relaxed text-slate-300">{about}</p>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-1 border-t border-white/10 pt-5 font-mono text-xs text-slate-400">
              <span className="text-white">{profile.name}</span>
              <span>· {profile.role}</span>
              <span>· {profile.location}</span>
            </div>
          </Reveal>
          <Reveal delay={120}><AgentGraph /></Reveal>
        </div>
      </section>

      {/* ───────── CONTACT ───────── */}
      <section id="contact" className="relative overflow-hidden border-t border-white/5">
        <div className="aurora left-[12%] top-[-10%] h-80 w-80 bg-iris opacity-50" />
        <div className="aurora right-[10%] top-[-6%] h-80 w-[22rem] bg-fuchsia opacity-40" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.05] dot-grid" />
        <div className="relative mx-auto max-w-3xl px-6 py-20 text-center sm:py-28">
          <Reveal>
            <Eyebrow n="06" label="Contact" />
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Let&apos;s build <span className="grad-text">something.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
              Got an AI feature, an agent, or an automation in mind? Tell me the
              problem — I&apos;ll tell you straight whether I&apos;m the right fit.
            </p>
            <a href={`mailto:${profile.email}`} className="grad-btn mt-9 inline-block cursor-pointer rounded-lg px-7 py-3.5 font-mono text-sm font-semibold text-white shadow-lg shadow-violet/30">{profile.email}</a>
            <div className="mt-9">
              <Socials center />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────── FOOTER ───────── */}
      <footer className="bg-night">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-white/10 px-6 py-8 font-mono text-xs text-slate-500 sm:flex-row">
          <span>© {profile.name}</span>
          <span>Built with Next.js &amp; Tailwind · Deployed on Vercel</span>
        </div>
      </footer>
    </main>
  );
}
