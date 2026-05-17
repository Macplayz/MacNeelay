"use client";

const PROFILE_CONTENT = {
  EN: {
    header: "SYSTEM_PROFILE //",
    title: "OPERATIONS RESEARCH & QUANTUM SYSTEMS",
    paragraphs: [
      "I engineer deep-tech logistics infrastructure. While classical computing has driven supply chains for decades, complex routing and MILP problems are rapidly reaching traditional hardware limits.",
      "I bridge theoretical mechanics and real-world execution by integrating memory-safe classical backends with quantum optimization circuits. The objective is not just theoretical study, but the commercialization of quantum heuristics for enterprise-scale B2B operations.",
      "The ultimate vision is deploying these hybrid algorithms into global manufacturing networks—building the computational backbone that powers the next generation of deep-tech supply chains."
    ],
    academicHeader: "ACADEMIC_ANCHOR //",
    academic: [
      { label: "INSTITUTION", value: "SVKM’s NMIMS MPSTME" },
      { label: "LOCATION", value: "MUMBAI, INDIA" },
      { label: "STATUS", value: "4TH YEAR // INTEGRATED B.TECH I.T." }
    ],
    focusHeader: "CURRENT_EXECUTION_THREADS //",
    metrics: [
      { 
        label: "RUST_MIGRATION", 
        value: "Translating classical routing logic from Python to Rust. Ensuring strict memory safety, speed, and production-level reliability." 
      },
      { 
        label: "HYBRID_QUANTUM", 
        value: "Deploying Qiskit QAOA/VQE heuristics against classical solvers on complex supply chain datasets (e.g., Olist)." 
      },
      { 
        label: "OPEN_SOURCE", 
        value: "Actively analyzing and contributing to core repositories as an official IBM Qiskit Advocate." 
      }
    ]
  },
  DE: {
    header: "SYSTEMPROFIL //",
    title: "OPERATIONS RESEARCH & QUANTENSYSTEME",
    paragraphs: [
      "Ich entwickle Deep-Tech-Logistikinfrastruktur. Während die klassische Datenverarbeitung Lieferketten seit Jahrzehnten antreibt, stoßen komplexe Routing- und MILP-Probleme an traditionelle Hardwaregrenzen.",
      "Ich schlage die Brücke zwischen theoretischer Mechanik und realer Ausführung, indem ich speichersichere klassische Backends mit Quantenoptimierungsschaltkreisen integriere. Das Ziel ist nicht nur die theoretische Forschung, sondern die Kommerzialisierung von Quantenheuristiken für B2B-Operationen.",
      "Die ultimative Vision ist der Einsatz dieser hybriden Algorithmen in globalen Fertigungsnetzwerken – der Aufbau des rechnerischen Rückgrats für die nächste Generation von Deep-Tech-Lieferketten."
    ],
    academicHeader: "AKADEMISCHER_ANKER //",
    academic: [
      { label: "EINRICHTUNG", value: "SVKM’s NMIMS MPSTME" },
      { label: "STANDORT", value: "MUMBAI, INDIEN" },
      { label: "STATUS", value: "4. JAHR // INTEGR. B.TECH I.T." }
    ],
    focusHeader: "AKTUELLE_AUSFÜHRUNGS_THREADS //",
    metrics: [
      { 
        label: "RUST_MIGRATION", 
        value: "Übersetzung klassischer Routing-Logik von Python nach Rust. Gewährleistung strenger Speichersicherheit, Geschwindigkeit und Produktionszuverlässigkeit." 
      },
      { 
        label: "HYBRID_QUANTUM", 
        value: "Einsatz von Qiskit QAOA/VQE-Heuristiken im Vergleich zu klassischen Solvern für komplexe Lieferkettendatensätze (z.B. Olist)." 
      },
      { 
        label: "OPEN_SOURCE", 
        value: "Aktive Analyse und Beitrag zu Kern-Repositories als offizieller IBM Qiskit Advocate." 
      }
    ]
  }
};

export default function Profile({ lang }: { lang: "EN" | "DE" }) {
  const t = PROFILE_CONTENT[lang];

  return (
    <section id="profile" className="w-full py-24 md:py-32 px-6 md:px-12 bg-[#09090b] relative border-t border-white/5">
      
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 left-1/4 w-full max-w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_top,_rgba(194,65,12,0.05)_0%,_rgba(9,9,11,0)_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
        
        {/* Left Column: The Narrative, Vision & Academic Base */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <div className="font-mono text-[10px] md:text-xs tracking-widest text-[#c2410c] mb-6">
            {t.header}
          </div>
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tighter text-white leading-[1.1] mb-10">
            {t.title}
          </h2>

          <div className="flex flex-col gap-6 border-l-2 border-[#c2410c]/30 pl-5 py-2 mb-12">
            {t.paragraphs.map((text, i) => (
              <p key={i} className="font-sans text-zinc-400 text-sm md:text-base leading-relaxed tracking-wide">
                {text}
              </p>
            ))}
          </div>

          {/* ACADEMIC TELEMETRY NODE (New Student-Friendly Block) */}
          <div className="w-full bg-[#09090b] border border-white/10 p-6 md:p-8 relative">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#c2410c]/50 to-transparent"></div>
            <div className="font-mono text-[10px] md:text-xs tracking-widest text-zinc-500 mb-6 uppercase">
              {t.academicHeader}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
              {t.academic.map((item, i) => (
                <div key={i} className={i === 2 ? "sm:col-span-2 border-t border-white/5 pt-4 mt-2" : ""}>
                  <div className="font-mono text-[9px] text-[#c2410c] tracking-[0.2em] mb-1 uppercase">
                    [{item.label}]
                  </div>
                  <div className="font-sans text-xs md:text-sm text-zinc-200 font-medium tracking-wide uppercase">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: The Current Focus (Grid) */}
        <div className="lg:col-span-5 flex flex-col pt-2 lg:pt-0">
          <div className="font-mono text-[10px] md:text-xs tracking-widest text-zinc-500 mb-6 uppercase border-b border-white/10 pb-4">
            {t.focusHeader}
          </div>
          
          <div className="flex flex-col gap-4">
            {t.metrics.map((metric, i) => (
              <div key={i} className="bg-zinc-900/40 border border-white/5 p-6 relative overflow-hidden group hover:border-[#c2410c]/30 transition-colors duration-300">
                {/* Hover Accent Line */}
                <div className="absolute top-0 left-0 w-[2px] h-full bg-[#c2410c] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
                
                <div className="font-mono text-[10px] text-[#c2410c] tracking-[0.2em] mb-3 uppercase">
                  [{metric.label}]
                </div>
                <div className="font-sans text-xs md:text-sm text-zinc-300 leading-relaxed">
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