"use client";

const PROFILE_CONTENT = {
  EN: {
    header: "SYSTEM_PROFILE //",
    title: "OPERATIONS RESEARCH & SYSTEMS ARCHITECTURE",
    paragraphs: [
      "I engineer deep-tech logistics solutions. My background bridges the gap between high-level theoretical mathematics and low-level, memory-safe execution.",
      "Currently optimizing B2B heavy industry supply chains using Mixed-Integer Linear Programming (MILP) and researching Quantum Heuristics to solve NP-Hard routing variables faster than classical computation allows."
    ],
    metrics: [
      { label: "CORE_STACK", value: "RUST // PYTHON // MILP" },
      { label: "TARGET_NODE", value: "RWTH AACHEN / TUM" },
      { label: "QUANTUM_LINK", value: "IBM QISKIT PIPELINES" }
    ]
  },
  DE: {
    header: "SYSTEMPROFIL //",
    title: "OPERATIONS RESEARCH & SYSTEMARCHITEKTUR",
    paragraphs: [
      "Ich entwickle Deep-Tech-Logistiklösungen. Mein Hintergrund schließt die Lücke zwischen theoretischer Mathematik und speichersicherer Ausführung.",
      "Derzeit optimiere ich B2B-Lieferketten der Schwerindustrie mittels gemischt-ganzzahliger linearer Programmierung (MILP) und erforsche Quantenheuristiken, um NP-schwere Routingvariablen schneller zu lösen als es die klassische Datenverarbeitung erlaubt."
    ],
    metrics: [
      { label: "KERN_STACK", value: "RUST // PYTHON // MILP" },
      { label: "ZIEL_KNOTEN", value: "RWTH AACHEN / TUM" },
      { label: "QUANTEN_LINK", value: "IBM QISKIT PIPELINES" }
    ]
  }
};

export default function Profile({ lang }: { lang: "EN" | "DE" }) {
  const t = PROFILE_CONTENT[lang];

  return (
    <section id="profile" className="w-full py-24 md:py-32 px-6 md:px-12 bg-[#09090b] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* Left Column: Heading */}
        <div className="md:col-span-4 flex flex-col items-start">
          <div className="font-mono text-xs tracking-widest text-[#c2410c] mb-4">
            {t.header}
          </div>
          <h2 className="font-sans text-3xl md:text-4xl font-bold uppercase tracking-tight text-white leading-tight">
            {t.title}
          </h2>
        </div>

        {/* Right Column: Bio & Metrics */}
        <div className="md:col-span-8 flex flex-col gap-8">
          <div className="flex flex-col gap-6 border-l border-white/10 pl-6 md:pl-10">
            {t.paragraphs.map((text, i) => (
              <p key={i} className="font-sans text-zinc-400 text-sm md:text-base leading-relaxed tracking-wide max-w-2xl">
                {text}
              </p>
            ))}
          </div>

          {/* Hard Data Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {t.metrics.map((metric, i) => (
              <div key={i} className="bg-zinc-900/50 border border-white/5 p-5 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-[#c2410c] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                <div className="font-mono text-[10px] text-zinc-500 tracking-[0.2em] mb-2 uppercase">
                  {metric.label}
                </div>
                <div className="font-mono text-xs md:text-sm text-zinc-200 tracking-wider">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}