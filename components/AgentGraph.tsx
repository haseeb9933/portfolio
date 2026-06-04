// Animated agent-orchestration diagram — dark glass variant.
// Pure SVG + CSS (no JS), so it stays a server component.

function Node({
  x, y, w, h, label, primary = false,
}: { x: number; y: number; w: number; h: number; label: string; primary?: boolean }) {
  return (
    <g>
      <rect
        x={x} y={y} width={w} height={h} rx={11}
        fill={primary ? "rgba(14,165,233,0.18)" : "rgba(255,255,255,0.04)"}
        stroke={primary ? "#38bdf8" : "rgba(255,255,255,0.18)"}
        strokeWidth={primary ? 1.6 : 1.2}
      />
      <text
        x={x + w / 2} y={y + h / 2 + 4}
        textAnchor="middle"
        fontFamily="var(--font-mono), monospace"
        fontSize={primary ? 14 : 12.5}
        fontWeight={primary ? 700 : 500}
        fill={primary ? "#7dd3fc" : "#cbd5e1"}
      >
        {label}
      </text>
    </g>
  );
}

export default function AgentGraph() {
  return (
    <div className="glass overflow-hidden rounded-2xl">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="ml-2 font-mono text-xs text-slate-400">agent.orchestrate()</span>
        <span className="ml-auto flex items-center gap-1.5 font-mono text-[11px] text-emerald-400">
          <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-emerald-400" />
          live
        </span>
      </div>

      <svg viewBox="0 0 520 360" className="w-full" role="img" aria-label="Diagram of an AI agent orchestrating LLM, RAG and automation tools">
        <defs>
          <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="1.4" cy="1.4" r="1.4" fill="#ffffff" opacity="0.06" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="520" height="360" fill="url(#dots)" />

        <g fill="none" stroke="#38bdf8" strokeWidth="1.6" strokeOpacity="0.7">
          <path className="flow-line" d="M 128 172 H 206" />
          <path className="flow-line" d="M 334 158 C 372 120, 384 98, 404 86" />
          <path className="flow-line" d="M 336 174 H 404" />
          <path className="flow-line" d="M 334 188 C 372 226, 384 248, 404 262" />
        </g>

        <g fill="#22d3ee">
          <circle cx="404" cy="86" r="3.2" className="animate-nodepulse" />
          <circle cx="404" cy="174" r="3.2" className="animate-nodepulse" style={{ animationDelay: "0.5s" }} />
          <circle cx="404" cy="262" r="3.2" className="animate-nodepulse" style={{ animationDelay: "1s" }} />
        </g>

        <Node x={24} y={150} w={104} h={44} label="input" />
        <Node x={206} y={140} w={130} h={64} label="agent" primary />
        <Node x={404} y={66} w={96} h={40} label="GPT-4o" />
        <Node x={404} y={154} w={96} h={40} label="RAG" />
        <Node x={404} y={242} w={96} h={40} label="n8n" />
      </svg>

      <div className="flex items-center justify-between border-t border-white/10 px-4 py-3 font-mono text-[11px] text-slate-400">
        <span>routing · tool-calling · fallbacks</span>
        <span className="text-violet-300">4 tools connected</span>
      </div>
    </div>
  );
}
