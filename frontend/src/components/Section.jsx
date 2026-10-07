/* eslint-disable react/prop-types */
import { BlurFade } from "./magicui/BlurFade";

const SectionTitle = ({ children, delay = 0 }) => (
  <BlurFade delay={delay} inView>
    <h2 className="text-xl font-bold">{children}</h2>
  </BlurFade>
);

// Plain section: left-aligned title, content below.
export const Section = ({ id, title, children }) => (
  <section id={id}>
    <div className="flex flex-col gap-y-5">
      <SectionTitle>{title}</SectionTitle>
      <BlurFade delay={0.04} inView>{children}</BlurFade>
    </div>
  </section>
);

// Pill with fading rules on both sides.
export const Chip = ({ children }) => (
  <div className="flex items-center w-full">
    <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-rule via-95% to-transparent" />
    <div className="border border-ink bg-ink z-10 rounded-xl px-4 py-1">
      <span className="text-paper text-sm font-medium">{children}</span>
    </div>
    <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-rule via-95% to-transparent" />
  </div>
);

const FIT = {
  cover: "object-cover",
  contain: "object-contain p-1",
  zoom: "object-contain scale-[1.3]", // icons with a lot of empty margin
  emblem: "object-cover object-left", // wide logo: show only the symbol
};

// Round company/institution mark. Logos are drawn for light backgrounds, so the disc stays white in dark mode too.
export const Logo = ({ src, alt, fit = "cover" }) => (
  <span className="shrink-0 size-8 md:size-10 rounded-full overflow-hidden border border-rule bg-white ring-2 ring-rule shadow-sm">
    <img src={src} alt={alt} loading="lazy" className={`size-full ${FIT[fit]}`} />
  </span>
);
