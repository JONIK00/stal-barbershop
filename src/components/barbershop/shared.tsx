"use client";
import * as React from "react";

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`eyebrow inline-flex items-center gap-2.5 text-[0.7rem] text-brass ${className ?? ""}`}>
      <span className="h-px w-7 bg-brass/70" />
      {children}
    </span>
  );
}

export function SectionShell({ id, children, className, watermark }: { id?: string; children: React.ReactNode; className?: string; watermark?: string }) {
  return (
    <section id={id} className={`grain-overlay relative px-5 sm:px-8 md:px-12 lg:px-20 py-20 md:py-28 ${className ?? ""}`}>
      {watermark && <span className="pointer-events-none absolute right-[-0.1em] top-[-0.35em] select-none font-anton leading-none text-cream/[0.018] z-0" style={{ fontSize: "clamp(8rem, 22vw, 18rem)" }} aria-hidden="true">{watermark}</span>}
      <div className="relative z-10 mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, desc, className }: { eyebrow: string; title: React.ReactNode; desc?: React.ReactNode; className?: string }) {
  return (
    <div className={`reveal max-w-2xl ${className ?? ""}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="heading-xl mt-5 text-4xl sm:text-5xl md:text-6xl text-cream">{title}</h2>
      {desc && <p className="mt-5 text-base sm:text-lg leading-relaxed text-cream-dim">{desc}</p>}
    </div>
  );
}

export function RivetDivider({ className }: { className?: string }) {
  return <div className={`divider-rivet ${className ?? ""}`} aria-hidden="true"><span className="text-brass text-xs">◆</span></div>;
}
