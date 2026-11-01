"use client";

import { useEffect, useRef } from "react";

// Inline keyframe injected once — guarantees float works without tailwind.config dependency
const floatStyle = `
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-16px); }
  }
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0; }
  }
  .hero-float {
    animation: float 4s ease-in-out infinite;
  }
  .hero-blink {
    animation: blink 1s step-end infinite;
  }
`;

type Section1 = {
    note:string;
        heading:string;
        description:string;
        button1:{
          url:string;
          title:string;
        }
        button2:{
          url:string;
          title:string;
        }
        additionalLine:string;
}
export default function HeroSection({section}:{section?:Section1}) {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Inject keyframes into <head> once
    const id = "hero-keyframes";
    if (!document.getElementById(id)) {
      const style = document.createElement("style");
      style.id = id;
      style.innerHTML = floatStyle;
      document.head.appendChild(style);
    }

    // Staggered fade-in for hero text elements
    const elements = heroRef.current?.querySelectorAll(".hero-fade");
    elements?.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add("opacity-100", "translate-y-0");
        el.classList.remove("opacity-0", "translate-y-4");
      }, i * 120);
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-[92vh] flex items-center bg-slate-50 bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-bg-light.webp')" }}
    >
      <div className="w-full max-w-3xl mx-auto px-8 py-24 text-center">

        {/* Availability badge */}
        <div className="hero-fade opacity-0 translate-y-4 transition-all duration-700 ease-out flex justify-center">
          <span className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 border border-indigo-100">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            { section?.note }
          </span>
        </div>

        {/* Headline */}
        <div className="hero-fade opacity-0 translate-y-4 transition-all duration-700 ease-out">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight mb-5">
            <div dangerouslySetInnerHTML={{ __html:section?.heading || "" }} />
            
          </h1>
        </div>

        {/* Sub-headline */}
        <div className="hero-fade opacity-0 translate-y-4 transition-all duration-700 ease-out">
          <div className="text-slate-500 text-lg leading-relaxed mb-8 max-w-xl mx-auto" 
          dangerouslySetInnerHTML={{ __html:section?.description || "" }} />
          
            
          
        </div>

        {/* CTA Buttons */}
        <div className="hero-fade opacity-0 translate-y-4 transition-all duration-700 ease-out">
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <a
              href={ section?.button1?.url }
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              { section?.button1?.title }
            </a>
            <a
              href={ section?.button2?.url }
              className="border border-slate-300 hover:border-indigo-400 text-slate-600 hover:text-indigo-600 font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              { section?.button2?.title }
            </a>
          </div>
        </div>

        {/* Trust bar */}
        <div className="hero-fade opacity-0 translate-y-4 transition-all duration-700 ease-out">
          <div className="flex flex-wrap justify-center items-center gap-4 text-slate-400 text-xs font-medium" dangerouslySetInnerHTML={{ __html: section?.additionalLine || "" }} />
            
        </div>

      </div>
    </section>
  );
}


/* ─────────────────────────────────────────
   SVG Illustration — Developer at desk
   (inline, no external image needed)
───────────────────────────────────────── */
function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 520 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto drop-shadow-2xl"
      aria-label="Developer at desk illustration"
    >
      {/* ── Desk ── */}
      <rect x="40" y="310" width="440" height="16" rx="8" fill="rgba(255,255,255,0.15)" />
      <rect x="70"  y="326" width="14" height="60" rx="4" fill="rgba(255,255,255,0.10)" />
      <rect x="436" y="326" width="14" height="60" rx="4" fill="rgba(255,255,255,0.10)" />

      {/* ── Monitor stand ── */}
      <rect x="238" y="272" width="24" height="40" rx="4" fill="rgba(255,255,255,0.20)" />
      <rect x="210" y="308" width="80" height="8"  rx="4" fill="rgba(255,255,255,0.20)" />

      {/* ── Monitor body ── */}
      <rect x="110" y="110" width="300" height="165" rx="12"
        fill="rgba(255,255,255,0.18)"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="2"
      />
      {/* Screen */}
      <rect x="122" y="122" width="276" height="141" rx="6" fill="#1E1B4B" />

      {/* ── Code on screen ── */}
      {/* Line 1 */}
      <rect x="136" y="136" width="36" height="7" rx="3" fill="#A5B4FC" />
      <rect x="178" y="136" width="54" height="7" rx="3" fill="#6EE7B7" />
      <rect x="238" y="136" width="22" height="7" rx="3" fill="rgba(255,255,255,0.30)" />
      {/* Line 2 */}
      <rect x="148" y="152" width="28" height="7" rx="3" fill="#FCA5A5" />
      <rect x="182" y="152" width="10" height="7" rx="3" fill="rgba(255,255,255,0.30)" />
      <rect x="198" y="152" width="60" height="7" rx="3" fill="#6EE7B7" />
      <rect x="264" y="152" width="10" height="7" rx="3" fill="rgba(255,255,255,0.30)" />
      {/* Line 3 */}
      <rect x="148" y="168" width="28" height="7" rx="3" fill="#FCA5A5" />
      <rect x="182" y="168" width="10" height="7" rx="3" fill="rgba(255,255,255,0.30)" />
      <rect x="198" y="168" width="44" height="7" rx="3" fill="#FDE68A" />
      <rect x="248" y="168" width="10" height="7" rx="3" fill="rgba(255,255,255,0.30)" />
      {/* Line 4 */}
      <rect x="148" y="184" width="28" height="7" rx="3" fill="#FCA5A5" />
      <rect x="182" y="184" width="10" height="7" rx="3" fill="rgba(255,255,255,0.30)" />
      <rect x="198" y="184" width="78" height="7" rx="3" fill="#6EE7B7" />
      {/* Line 5 — closing brace */}
      <rect x="136" y="200" width="10" height="7" rx="3" fill="rgba(255,255,255,0.30)" />
      {/* Line 6 */}
      <rect x="136" y="216" width="50" height="7" rx="3" fill="#A5B4FC" />
      <rect x="192" y="216" width="24" height="7" rx="3" fill="rgba(255,255,255,0.50)" />
      {/* Line 7 comment */}
      <rect x="136" y="232" width="70" height="7" rx="3" fill="rgba(255,255,255,0.15)" />
      {/* Blinking cursor */}
      <rect x="136" y="248" width="3" height="12" rx="1" fill="#A5B4FC" opacity="0.9">
        <animate attributeName="opacity" values="0.9;0;0.9" dur="1s" repeatCount="indefinite" />
      </rect>

      {/* ── Keyboard ── */}
      <rect x="130" y="318" width="240" height="14" rx="5"
        fill="rgba(255,255,255,0.22)"
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="1.5"
      />
      <rect x="140" y="321" width="18" height="5" rx="2" fill="rgba(255,255,255,0.18)" />
      <rect x="163" y="321" width="18" height="5" rx="2" fill="rgba(255,255,255,0.18)" />
      <rect x="186" y="321" width="18" height="5" rx="2" fill="rgba(255,255,255,0.18)" />
      <rect x="209" y="321" width="46" height="5" rx="2" fill="rgba(255,255,255,0.18)" />
      <rect x="260" y="321" width="18" height="5" rx="2" fill="rgba(255,255,255,0.18)" />
      <rect x="283" y="321" width="18" height="5" rx="2" fill="rgba(255,255,255,0.18)" />
      <rect x="306" y="321" width="18" height="5" rx="2" fill="rgba(255,255,255,0.18)" />
      <rect x="329" y="321" width="18" height="5" rx="2" fill="rgba(255,255,255,0.18)" />

      {/* ── Mouse ── */}
      <rect x="390" y="314" width="30" height="20" rx="10"
        fill="rgba(255,255,255,0.22)"
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="1.5"
      />
      <line x1="405" y1="314" x2="405" y2="324" stroke="rgba(255,255,255,0.30)" strokeWidth="1" />

      {/* ── Coffee mug ── */}
      <rect x="60" y="288" width="32" height="26" rx="6"
        fill="rgba(255,255,255,0.22)"
        stroke="rgba(255,255,255,0.30)"
        strokeWidth="1.5"
      />
      <path d="M92 296 Q106 296 106 304 Q106 312 92 312"
        stroke="rgba(255,255,255,0.25)" strokeWidth="2" fill="none"
      />
      {/* Steam */}
      <path d="M70 284 Q72 278 70 272" stroke="rgba(255,255,255,0.30)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M79 284 Q81 276 79 268" stroke="rgba(255,255,255,0.30)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M88 284 Q90 278 88 272" stroke="rgba(255,255,255,0.30)" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* ── Floating tech badges ── */}
      {/* Next.js */}
      <rect x="390" y="130" width="94" height="34" rx="10"
        fill="rgba(255,255,255,0.15)"
        stroke="rgba(255,255,255,0.30)"
        strokeWidth="1"
      />
      <circle cx="408" cy="147" r="8" fill="white" opacity="0.9" />
      <text x="408" y="151" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#4F46E5">N</text>
      <text x="424" y="144" fontSize="9" fontWeight="600" fill="white" opacity="0.9">Next.js</text>
      <text x="424" y="156" fontSize="8"  fill="rgba(255,255,255,0.55)">v15 App Router</text>

      {/* WordPress */}
      <rect x="390" y="176" width="94" height="34" rx="10"
        fill="rgba(255,255,255,0.15)"
        stroke="rgba(255,255,255,0.30)"
        strokeWidth="1"
      />
      <circle cx="408" cy="193" r="8" fill="#21759B" opacity="0.9" />
      <text x="408" y="197" textAnchor="middle" fontSize="9" fontWeight="bold" fill="white">W</text>
      <text x="424" y="190" fontSize="9" fontWeight="600" fill="white" opacity="0.9">WordPress</text>
      <text x="424" y="202" fontSize="8"  fill="rgba(255,255,255,0.55)">Headless CMS</text>

      {/* GraphQL */}
      <rect x="390" y="222" width="94" height="34" rx="10"
        fill="rgba(255,255,255,0.15)"
        stroke="rgba(255,255,255,0.30)"
        strokeWidth="1"
      />
      <circle cx="408" cy="239" r="8" fill="#E535AB" opacity="0.9" />
      <text x="408" y="243" textAnchor="middle" fontSize="8" fontWeight="bold" fill="white">GQL</text>
      <text x="424" y="236" fontSize="9" fontWeight="600" fill="white" opacity="0.9">GraphQL</text>
      <text x="424" y="248" fontSize="8"  fill="rgba(255,255,255,0.55)">Apollo Client</text>

      {/* ── Decorative dots ── */}
      <circle cx="80"  cy="160" r="4" fill="rgba(255,255,255,0.12)" />
      <circle cx="460" cy="290" r="6" fill="rgba(255,255,255,0.10)" />
      <circle cx="100" cy="250" r="3" fill="rgba(255,255,255,0.12)" />
    </svg>
  );
}