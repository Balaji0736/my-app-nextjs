"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type MenuItem = {
    id:string;
    label:string;
    uri:string;
}

type Details = {
    button:{
    url?: string;
    title?: string;
    target?: string;
    }
    siteLogo?: {
        node?: {
          altText?: string;
          sourceUrl?: string;
        }
      }
}

export default function HeaderClient({ menus,details }:{ menus?:MenuItem[],details?: Details}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const ctaUrl = details?.button?.url || "#contact";
  const ctaTarget = details?.button?.target || undefined;

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

        
        
        <Link href="/" className="text-slate-900 font-bold text-lg tracking-tight">
           
          {/* Logo */}
        {details?.siteLogo?.node?.sourceUrl && (
            <Image 
            src={details?.siteLogo?.node?.sourceUrl}
            alt={details?.siteLogo?.node?.altText || "Site logo"}
            width={120}
            height={40}
           
            />
        )}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-500 font-medium">
          {menus?.map((link) => (
            <a
              key={link.id}
              href={link.uri}
              className="relative group hover:text-slate-900 transition-colors"
            >
              {link.label}
              {/* Underline animation */}
              <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-indigo-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href={ctaUrl}
          target={ctaTarget}
          rel={ctaTarget === "_blank" ? "noopener noreferrer" : undefined}
          className="hidden md:inline-flex bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
        >
          {details?.button?.title}
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-slate-500 hover:text-slate-900 transition-colors"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            /* X icon */
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            /* Hamburger icon */
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-8 py-4 flex flex-col gap-4">
          {menus?.map((link) => (
            <a
              key={link.id}
              href={link.uri}
              onClick={() => setMenuOpen(false)}
              className="text-slate-600 hover:text-indigo-600 font-medium text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={ctaUrl}
            target={ctaTarget}
            rel={ctaTarget === "_blank" ? "noopener noreferrer" : undefined}
            onClick={() => setMenuOpen(false)}
            className="mt-1 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors text-center"
          >
            {details?.button?.title}
          </a>
        </div>
      )}
    </header>
  );
}