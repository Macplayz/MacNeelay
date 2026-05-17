"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FiLoader } from "react-icons/fi";

const CONTENT = {
  EN: {
    sys: "SYS_ONLINE",
    loc: "LOC: MUMBAI_IN",
    focus: "FOCUS: O.R. & QUANTUM SYSTEMS",
    name: "NEELAY MACHHA.",
    role: "[ DEEP_TECH // LOGISTICS_OPTIMIZATION // QUANTUM_HEURISTICS ]",
    desc: "Architecting memory-safe Rust backends, Mixed-Integer Linear Programming (MILP) models, and leveraging Quantum Computing heuristics for heavy industry supply chain optimization.",
    cta: "RESUME_COMPILING",
    version: "V.2.0.26"
  },
  DE: {
    sys: "SYS_ONLINE",
    loc: "STANDORT: MUMBAI_IN",
    focus: "FOKUS: O.R. & QUANTENSYSTEME",
    name: "NEELAY MACHHA.",
    role: "[ DEEP_TECH // LOGISTIKOPTIMIERUNG // QUANTENHEURISTIK ]",
    desc: "Entwicklung speichersicherer Rust-Backends, gemischt-ganzzahliger linearer Programmiermodelle (MILP) und Erforschung von Quantencomputing-Heuristiken für die Optimierung von Lieferketten in der Schwerindustrie.",
    cta: "LEBENSLAUF_KOMPILIERT",
    version: "V.2.0.26"
  }
};

export default function Hero({ lang, setLang }: { lang: "EN" | "DE", setLang: (l: "EN" | "DE") => void }) {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(".hero-text", { x: -30, opacity: 0, duration: 1, stagger: 0.15, delay: 0.2 })
      .from(".hero-line", { scaleX: 0, transformOrigin: "left", duration: 1.2 }, "-=0.8")
      .from(".hero-scanner", { scale: 0.95, x: 30, opacity: 0, duration: 1 }, "-=1.2");
  }, { scope: container });

  const t = CONTENT[lang];

  return (
    <section ref={container} className="relative min-h-dvh w-full flex flex-col justify-center px-6 md:px-12 bg-[#09090b] text-zinc-300 overflow-hidden pt-28 pb-10">
      
      <div className="absolute inset-0 bg-[#09090b] z-0"></div>
      {/* INTENSIFIED GLOW: Changed opacity to 0.30 and expanded size */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_center,_rgba(194,65,12,0.30)_0%,_rgba(9,9,11,0)_60%)] rounded-full -translate-y-1/3 translate-x-1/4 z-0 pointer-events-none mix-blend-screen"></div>
      <div className="bg-fractal-noise absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none z-0"></div>

      <div className="absolute top-32 right-6 md:right-12 z-40 flex gap-4 font-mono text-xs tracking-widest text-zinc-600 border border-white/5 bg-[#09090b]/80 backdrop-blur-sm p-2 px-4 hidden md:flex rounded-sm">
        <button onClick={() => setLang("EN")} className={`transition-colors duration-300 hover:text-white ${lang === "EN" ? "text-white font-bold" : ""}`}>[ EN ]</button>
        <button onClick={() => setLang("DE")} className={`transition-colors duration-300 hover:text-[#c2410c] ${lang === "DE" ? "text-[#c2410c] font-bold" : ""}`}>[ DE ]</button>
      </div>

      <div className="z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mt-8 relative">
        <div className="lg:col-span-8 flex flex-col items-start text-left order-2 lg:order-1">
          <h1 className="hero-text text-5xl sm:text-6xl md:text-[5.5rem] lg:text-[7rem] font-bold tracking-tighter text-white leading-[0.9] mb-8 font-sans uppercase">
            {t.name}
          </h1>
          <div className="hero-line h-[1px] w-full max-w-[250px] bg-white/10 mb-8"></div>
          <div className="hero-text font-mono text-[10px] md:text-sm tracking-[0.15em] uppercase text-[#c2410c] mb-6">
            {t.role}
          </div>
          <p className="hero-text max-w-2xl font-sans text-zinc-400 text-sm md:text-base leading-relaxed tracking-wide mb-10 border-l-2 border-[#c2410c]/30 pl-5 py-2 bg-gradient-to-r from-white/[0.02] to-transparent">
            {t.desc}
          </p>
          <div className="hero-text">
            <button onClick={(e) => e.preventDefault()} className="group relative flex items-center justify-center border border-zinc-800 bg-transparent px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] text-zinc-400 transition-all duration-300 hover:border-[#c2410c] hover:bg-[#c2410c]/5 hover:text-white cursor-wait rounded-sm">
              <span className="flex items-center gap-3">
                <FiLoader className="h-4 w-4 animate-spin text-[#c2410c]" />
                {t.cta}
              </span>
            </button>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col items-start lg:items-end order-1 lg:order-2 w-full">
          <div className="flex md:hidden gap-4 font-mono text-xs tracking-widest text-zinc-600 mb-8 w-full border-b border-white/5 pb-4">
            <button onClick={() => setLang("EN")} className={lang === "EN" ? "text-white" : ""}>[ EN ]</button>
            <button onClick={() => setLang("DE")} className={lang === "DE" ? "text-[#c2410c]" : ""}>[ DE ]</button>
          </div>

          <div className="hero-scanner relative w-32 h-44 md:w-48 md:h-64 lg:w-56 lg:h-72 mb-6 group">
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#c2410c] transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#c2410c] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#c2410c] transition-all duration-300 group-hover:-translate-x-1 group-hover:translate-y-1"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#c2410c] transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>

            <div className="w-full h-full bg-[#09090b] border border-white/10 flex items-center justify-center overflow-hidden p-1.5 relative">
              <div className="absolute inset-0 w-full h-[2px] bg-[#c2410c]/40 shadow-[0_0_15px_rgba(194,65,12,0.8)] animate-scan-line z-20 pointer-events-none"></div>
              <span className="font-mono text-[10px] md:text-xs text-zinc-600 uppercase tracking-[0.2em] text-center leading-loose relative z-10">
                [ VISUAL <br/> PENDING ]
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}