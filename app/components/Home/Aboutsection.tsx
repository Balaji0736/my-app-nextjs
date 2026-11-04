"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type Section = {
  heading:string;
  description:string;
  image:{
    node:{
      altText:string;
      sourceUrl:string;
    };
  };
  button:{
    url:string;
    title:string;
  }
}

export default function AboutSection({section}:{section?:Section}) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-6");
          }
        });
      },
      { threshold: 0.12 }
    );

    const elements = sectionRef.current?.querySelectorAll(".fade-up");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="bg-white py-24" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-16 items-center">

          {/* ── Left: About Text ── */}
          <div className="fade-up opacity-0 translate-y-6 transition-all duration-700 ease-out">

            <p className="text-indigo-600 text-xs font-semibold tracking-widest uppercase mb-4">
              About Me
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5 leading-snug">
              {section?.heading}
            </h2>

            <div className="text-slate-500 leading-relaxed mb-4"
              dangerouslySetInnerHTML={{ __html:section?.description || ""}}
            />
              

            <a
              href={section?.button?.url}

              className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-500 text-sm font-semibold transition-colors"
            >
              {section?.button?.title}
            </a>

          </div>

          {/* ── Right: Portrait ── */}
          <div
            className="fade-up opacity-0 translate-y-6 transition-all duration-700 ease-out"
            style={{ transitionDelay: "150ms" }}
          >
            {section?.image?.node?.sourceUrl && (
              <Image
                src={section.image.node.sourceUrl}
                alt={section.image.node.altText || ""}
                width={1600}
                height={2000}
                className="h-[360px] w-full rounded-xl object-contain"
              />
            )}
          </div>

        </div>
      </div>
    </section>
  );
}