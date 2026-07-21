"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";


const services1 = [
  {
    icon: "🖥️",
    title: "Headless WordPress",
    description:
      "WordPress as a content backend, Next.js as your fast, modern frontend. WPGraphQL + Apollo for seamless data fetching.",
    tags: ["WPGraphQL", "Next.js", "Apollo"],
  },
  {
    icon: "⚙️",
    title: "Custom Web Applications",
    description:
      "Full-stack applications with PHP/Laravel backends and React/Next.js frontends. Auth, CRUD, APIs, admin panels — built to scale.",
    tags: ["Laravel", "React", "TypeScript"],
  },
  {
    icon: "🚀",
    title: "Performance Optimisation",
    description:
      "Audit and improve Core Web Vitals, page load speed, and SEO for existing WordPress or Next.js sites. Measurable improvements, guaranteed.",
    tags: ["Core Web Vitals", "SEO", "Caching"],
  },
];

type Section3 = {
  heading:string;
  description:string;
}

type Tag ={
  id:string;
  name:string;
}

type Service ={
  id:string;
  title:string;
  content:string;
  featuredImage:{
    node:{
      altText:string;
      sourceUrl:string;
      title:string;
    }
  }
  tags:{
    nodes:Tag[];
  }
}

type CPTServices = {
  nodes:Service[];
}

export default function ServicesSection({section,services}:{section?:Section3,services?:CPTServices}) {
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
    <section id="services" className="bg-slate-50 py-24" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-8">

        {/* Section Header */}
        <div className="fade-up opacity-0 translate-y-6 transition-all duration-700 ease-out text-center max-w-xl mx-auto mb-16">
          <p className="text-indigo-600 text-xs font-semibold tracking-widest uppercase mb-4">
            Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-snug">
            {section?.heading}
          </h2>
          <div className="text-slate-500 text-base"
          dangerouslySetInnerHTML={{ __html:section?.description || "" }}
          />
            
          
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services?.nodes?.map((service) => (
            <div
              key={service.id}
              className="fade-up opacity-0 translate-y-6 transition-all duration-700 ease-out"
              style={{ transitionDelay: `${1 * 120}ms` }}
            >
              {/* Card */}
              <div className="group h-full bg-white border border-slate-200 rounded-xl p-7 hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgba(99,102,241,0.12)] transition-all duration-200 ease-out">

                {/* Icon */}
                <div className="w-11 h-11 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-xl mb-5">
                  <Image
                   src={service?.featuredImage?.node?.sourceUrl || ""}
                   width={100}
                   height={200}
                   alt={service?.featuredImage?.node?.altText || ""}
                   />
                </div>

                {/* Title */}
                <h3 className="text-slate-900 font-bold text-lg mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <div className="text-slate-500 text-sm leading-relaxed" 
                
                dangerouslySetInnerHTML={{ __html:service.content || ""}}
                />
                

                {/* Tags */}
                <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap gap-2">
                  {service?.tags?.nodes?.map((tag) => (
                    <span
                      key={tag.id}
                      className="text-xs bg-indigo-50 text-indigo-600 px-2.5 py-1 rounded-full border border-indigo-100"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}