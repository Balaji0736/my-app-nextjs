"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const skills = [
  {
    icon: "⚡",
    title: "Next.js 15",
    subtitle: "App Router · RSC",
  },
  {
    icon: "🐘",
    title: "PHP / WordPress",
    subtitle: "9 Years · Headless CMS",
  },
  {
    icon: "🔷",
    title: "TypeScript",
    subtitle: "Typed React · Strict Mode",
  },
  {
    icon: "🔗",
    title: "GraphQL",
    subtitle: "Apollo · WPGraphQL",
  },
  {
    icon: "🎨",
    title: "Tailwind CSS",
    subtitle: "Utility-first Styling",
  },
  {
    icon: "🛠️",
    title: "Laravel",
    subtitle: "REST API · Sanctum",
  },
];

type Section = {
  heading:string;
      description:string;
      button:{
        url:string;
        title:string;
      }
}

type RepeaterField = {
  id:string;
  title:string;
  content:string;
  featuredImage:{
    node:{
      alttext:string;
      sourceUrl:string;
    }
  }
}

type RepeaterFields = {
  nodes: RepeaterField[];
}
export default function AboutSection({section,repeaterfields}:{section?:Section,repeaterfields?:RepeaterFields}) {
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

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

          {/* ── Right: Skills Grid ── */}
          <div
            className="fade-up opacity-0 translate-y-6 transition-all duration-700 ease-out"
            style={{ transitionDelay: "150ms" }}
          >

            <p className="text-slate-400 text-xs font-semibold tracking-widest uppercase mb-6">
              Tech Stack
            </p>

            <div className="grid grid-cols-2 gap-3">
              {repeaterfields?.nodes?.map((repeaterfield) => (
                <div
                  key={repeaterfield.id}
                  className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 hover:border-indigo-200 hover:bg-indigo-50/40 transition-colors duration-200"
                  style={{ transitionDelay: `${1 * 60}ms` }}
                >
                  <span className="text-indigo-500 text-lg leading-none">
                    <Image
                    src={repeaterfield.featuredImage.node.sourceUrl}
                    alt={repeaterfield?.featuredImage?.node?.alttext || ""}
                    width={20}
                    height={20}
                    />
                  </span>
                  <div>
                    <p className="text-slate-800 text-sm font-semibold">
                      {repeaterfield.title}
                    </p>
                    <div className="text-slate-400 text-xs" dangerouslySetInnerHTML={{ __html: repeaterfield.content || "" }} />
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}