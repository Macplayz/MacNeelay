"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NAV_DICT = {
  EN: [
    { name: "PROFILE", href: "#profile" },
    { name: "PROJECTS", href: "#projects" },
    { name: "EXPERIENCE", href: "#experience" },
    { name: "CONTACT", href: "#contact" },
  ],
  DE: [
    { name: "PROFIL", href: "#profile" },
    { name: "PROJEKTE", href: "#projects" },
    { name: "ERFAHRUNG", href: "#experience" },
    { name: "KONTAKT", href: "#contact" },
  ]
};

export default function Navbar({ lang }: { lang: "EN" | "DE" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const elem = document.getElementById(href.replace("#", ""));
    if (elem) elem.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = NAV_DICT[lang];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${scrolled ? "bg-[#09090b]/90 backdrop-blur-xl border-white/10 py-5" : "bg-transparent border-transparent py-8"}`}>
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="/" onClick={(e) => handleScrollTo(e, "/")} className="font-sans text-lg md:text-xl font-bold tracking-tighter text-white uppercase z-50 flex items-center gap-3">
            <span className="w-3 h-3 bg-[#c2410c] inline-block"></span>
            NEELAY MACHHA.
          </a>

          <div className="hidden md:flex gap-12 items-center">
            {navLinks.map((item) => (
              <a key={item.name} href={item.href} onClick={(e) => handleScrollTo(e, item.href)} className="font-mono text-sm text-zinc-400 uppercase tracking-[0.2em] hover:text-[#c2410c] transition-all duration-300 flex items-center gap-2 group">
                <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#c2410c]">{">"}</span>
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6 z-50">
            <span className="hidden md:block font-mono text-xs text-zinc-600 tracking-widest uppercase border border-white/10 bg-white/5 px-4 py-1.5">BUILD_2026</span>
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-zinc-400 hover:text-white font-mono text-sm tracking-[0.2em] uppercase transition-colors">
              {isOpen ? "[ TERMINATE ]" : "[ OVERRIDE ]"}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Simplified for brevity, follows same dict structure */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="fixed inset-0 z-40 bg-[#09090b] flex flex-col items-center justify-center md:hidden border-b border-[#c2410c]/30">
            <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay bg-fractal-noise"></div>
            <nav className="flex flex-col items-start gap-10 font-mono w-full px-12 relative z-10">
              <div className="text-sm text-zinc-600 tracking-widest mb-4 border-b border-white/10 w-full pb-2">{lang === "EN" ? "SELECT_ROUTING_PATH:" : "PFAD_WÄHLEN:"}</div>
              {navLinks.map((item, i) => (
                <motion.a key={item.name} href={item.href} onClick={(e) => handleScrollTo(e, item.href)} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 * i }} className="text-2xl sm:text-3xl tracking-[0.1em] text-zinc-300 hover:text-[#c2410c] uppercase flex items-center gap-4">
                  <span className="text-[#c2410c] opacity-50">{`0${i + 1}`}</span>{item.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}