"use client";

import * as React from "react";
import { TiltedGridHero, type TiltedGridImage } from "@/components/ui/tilted-grid-hero";
import { Award, ShieldCheck, Sparkles, ExternalLink, X, CheckCircle2 } from "lucide-react";

export interface Certificate {
  id: string;
  src: string;
  title: string;
  issuer: string;
  year: string;
  category: string;
  badge: string;
  description: string;
}

export const PORTFOLIO_CERTIFICATES: Certificate[] = [
  {
    id: "cyber-awareness",
    src: "assets/certificates/cyber-awareness.png",
    title: "Cyber Awareness",
    issuer: "Tech Security Cert",
    year: "2026",
    category: "Cybersecurity",
    badge: "Security",
    description: "In-depth coverage of contemporary social engineering, credential stuffing vectors, ransomware countermeasures, and zero-trust authentication hygiene.",
  },
  {
    id: "web-dev-101",
    src: "assets/certificates/web-dev-101.png",
    title: "Web Dev 101: System Integration",
    issuer: "Modern Web Institute",
    year: "2025",
    category: "Web Development",
    badge: "Web Dev",
    description: "Mastery of asynchronous fetch architectures, RESTful endpoints, JSON payload validation, status codes, and cross-origin resource sharing (CORS).",
  },
  {
    id: "qa-101",
    src: "assets/certificates/qa-101.png",
    title: "QA 101: Software Quality",
    issuer: "QA Software Alliance",
    year: "2025",
    category: "Quality Assurance",
    badge: "Software QA",
    description: "Standardized defect reporting methodologies, severity vs. priority indexing, test scenario authoring, and regression test cycle management.",
  },
  {
    id: "pro-skills",
    src: "assets/certificates/pro-skills.png",
    title: "Pro Skills for Tech Pros",
    issuer: "Tech Leadership Forum",
    year: "2024",
    category: "Professional Development",
    badge: "Leadership",
    description: "High-pressure incident communication, cross-functional collaboration between engineering and business stakeholders, and technical project management.",
  },
  {
    id: "arduino-101",
    src: "assets/certificates/arduino-101.png",
    title: "Arduino 101: Coding Meets Hardware",
    issuer: "Embedded Systems Academy",
    year: "2024",
    category: "Embedded Computing",
    badge: "Embedded",
    description: "Microcontroller firmware programming in C/C++, breadboard prototyping, sensor data polling, GPIO PWM signals, and embedded hardware debugging.",
  },
  {
    id: "it-fundamentals",
    src: "assets/certificates/cert-it-fundamentals.png",
    title: "IT Fundamentals: Intro to Information Systems",
    issuer: "UpskillTechPH",
    year: "2026",
    category: "IT Infrastructure",
    badge: "Infrastructure",
    description: "Foundational knowledge in hardware, software, enterprise networking, and relational database systems for corporate IT infrastructure.",
  },
  {
    id: "ai-prompting",
    src: "assets/certificates/cert-ai-prompting.png",
    title: "Learning Advocate 2026: A.I Prompting Techniques",
    issuer: "UpskillTechPH",
    year: "2026",
    category: "Artificial Intelligence",
    badge: "AI Engineering",
    description: "Mastery of Chain-of-Thought prompting, zero-shot/few-shot formulation, LLM context grounding, and temperature optimization.",
  },
  {
    id: "ai-fundamentals",
    src: "assets/certificates/cert-ai-fundamentals.png",
    title: "AI Fundamentals: AI Automation Isn't Scary",
    issuer: "UpskillTechPH",
    year: "2026",
    category: "AI & Automation",
    badge: "Automation",
    description: "Automated business workflow orchestration, autonomous agent architectures, and demystifying machine learning for enterprise operations.",
  },
];

export function CertificateTiltedHero() {
  const [activeCert, setActiveCert] = React.useState<Certificate | null>(null);

  const images: TiltedGridImage[] = PORTFOLIO_CERTIFICATES.map((cert) => ({
    src: cert.src,
    alt: `${cert.title} - ${cert.issuer} (${cert.year})`,
  }));

  return (
    <section className="relative w-full py-16 px-4 bg-[#080C14] text-white overflow-hidden">
      {/* Curved Cylindrical 3D Certificate Hero */}
      <div className="max-w-7xl mx-auto">
        <TiltedGridHero
          images={images}
          speed={3.5}
          tileHeight={34}
          aspectRatio={16 / 10}
          curve={75}
          fade={15}
          axis={54}
          className="h-[580px] w-full rounded-2xl border border-white/10 bg-slate-950/80 shadow-2xl backdrop-blur-xl"
        >
          {/* Foreground Overlay Content */}
          <div className="relative z-10 flex h-full flex-col items-center justify-between py-10 px-6 text-center pointer-events-none">
            {/* Top Header Badge */}
            <div className="flex flex-col items-center pointer-events-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-3 shadow-lg shadow-cyan-500/5">
                <Award className="w-4 h-4 text-[#00F2FE]" />
                <span>07 // Badges &amp; Credentials</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white max-w-2xl text-balance drop-shadow-md">
                Interactive 3D Certificate Vault
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto mt-2 text-balance font-sans">
                Verified industry credentials curved along a dynamic spatial cylinder.
                Streamed continuously with hardware-accelerated transforms.
              </p>
            </div>

            {/* Bottom Floating Interaction Bar */}
            <div className="pointer-events-auto flex flex-wrap items-center justify-center gap-2 sm:gap-4 px-5 py-2.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-white/10 text-xs font-mono text-slate-300 shadow-xl">
              <div className="flex items-center gap-1.5 text-cyan-300">
                <Sparkles className="w-3.5 h-3.5 text-[#00F2FE] animate-pulse" />
                <span>Cylindrical 3D Arc</span>
              </div>
              <span className="opacity-30 hidden sm:inline">|</span>
              <div className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>8 Verified Credentials</span>
              </div>
              <span className="opacity-30 hidden sm:inline">|</span>
              <button
                type="button"
                onClick={() => setActiveCert(PORTFOLIO_CERTIFICATES[0])}
                className="text-[#00F2FE] hover:underline font-bold cursor-pointer"
              >
                Inspect First Credential &rarr;
              </button>
            </div>
          </div>
        </TiltedGridHero>

        {/* Quick Certificate Selector Carousel Below */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {PORTFOLIO_CERTIFICATES.map((cert) => (
            <button
              key={cert.id}
              type="button"
              onClick={() => setActiveCert(cert)}
              className="p-2.5 rounded-xl bg-slate-900/60 border border-white/5 hover:border-cyan-400/40 text-left transition group cursor-pointer"
            >
              <div className="text-[10px] font-mono text-cyan-400 truncate mb-1">
                {cert.badge}
              </div>
              <div className="text-xs font-semibold text-white truncate group-hover:text-cyan-300">
                {cert.title}
              </div>
              <div className="text-[10px] font-mono text-slate-500 mt-1">
                {cert.year}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Certificate Inspection Modal */}
      {activeCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in"
          onClick={() => setActiveCert(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-slate-900 border border-white/10 rounded-2xl p-6 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveCert(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Verified Credential &bull; {activeCert.year}</span>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-white">
              {activeCert.title}
            </h3>

            <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black/40 flex items-center justify-center">
              <img
                src={activeCert.src}
                alt={activeCert.title}
                className="w-full max-h-[380px] object-contain mx-auto"
              />
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-2 border-t border-white/10">
              <div>
                <span className="text-slate-500">Issuer:</span>{" "}
                <span className="text-slate-200 font-semibold">{activeCert.issuer}</span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 text-[#00F2FE] border border-cyan-500/20">
                {activeCert.category}
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              {activeCert.description}
            </p>

            <div className="flex justify-end pt-2">
              <a
                href={activeCert.src}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] text-slate-950 font-bold text-xs hover:opacity-90 transition"
              >
                <span>View Full Resolution</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default CertificateTiltedHero;
