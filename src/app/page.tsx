"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Profile from "@/components/Profile";

export default function Home() {
  // This state now controls the entire application's language
  const [lang, setLang] = useState<"EN" | "DE">("EN");

  return (
    <main className="min-h-screen bg-[#09090b] text-white">
      <Navbar lang={lang} />
      <Hero lang={lang} setLang={setLang} />
      <Profile lang={lang} />
    </main>
  );
}