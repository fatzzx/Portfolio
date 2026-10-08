/* eslint-disable react/prop-types */
import { useState } from "react";
import { useTranslation } from "../../hooks/useTranslation";
import { experienceMeta } from "../../data/experience";
import { Section, Logo } from "../Section";
import { BlurFade } from "../magicui/BlurFade";
import tldLogo from "../../assets/img/logos/tld.png";
import pgeLogo from "../../assets/img/logos/pge.png";
import semitLogo from "../../assets/img/logos/semit.png";
import cimatecLogo from "../../assets/img/logos/cimatec.png";
import vieiraLogo from "../../assets/img/logos/antonio-vieira.png";
import { ChevronRight, Database, Activity } from "lucide-react";
import {
  SiTypescript, SiNestjs, SiExpress, SiPython, SiDotnet, SiOpenjdk,
  SiReact, SiTailwindcss, SiJavascript, SiGrafana, SiDjango, SiLaravel,
} from "react-icons/si";

const skills = [
  { name: "TypeScript", icon: SiTypescript },
  { name: "NestJS", icon: SiNestjs },
  { name: "Express", icon: SiExpress },
  { name: "Python", icon: SiPython },
  { name: "Django", icon: SiDjango },
  { name: "Laravel", icon: SiLaravel },
  { name: ".NET", icon: SiDotnet },
  { name: "SQL Server", icon: Database },
  { name: "Java", icon: SiOpenjdk },
  { name: "React", icon: SiReact },
  { name: "TailwindCSS", icon: SiTailwindcss },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Zabbix", icon: Activity },
  { name: "Grafana", icon: SiGrafana },
];
const jobLogos = [
  { src: semitLogo, fit: "contain" },
  { src: cimatecLogo, fit: "zoom" },
  { src: tldLogo, fit: "cover" },
  { src: pgeLogo, fit: "emblem" },
  { src: cimatecLogo, fit: "zoom" },
];
const eduLogos = [
  { src: cimatecLogo, fit: "zoom" },
  { src: vieiraLogo, fit: "contain" },
];

const Job = ({ job, meta, logo, defaultOpen }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <li>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="group flex items-center justify-between gap-x-3 w-full text-left cursor-pointer"
      >
        <span className="flex items-center gap-x-3 min-w-0 flex-1">
          <Logo src={logo.src} fit={logo.fit} alt={meta.org} />
          <span className="min-w-0 flex flex-col gap-0.5">
            <span className="font-semibold leading-none flex items-center gap-2">
              {meta.org}
              <ChevronRight
                size={14}
                aria-hidden="true"
                className={`text-graphite transition-all duration-300 ${open ? "rotate-90 opacity-100" : "opacity-0 group-hover:opacity-100 group-hover:translate-x-1"}`}
              />
            </span>
            <span className="text-sm text-graphite">
              {meta.role}
              {meta.note && ` · ${meta.note}`}
            </span>
          </span>
        </span>
        <span className="text-xs tabular-nums text-graphite text-right shrink-0">{meta.period}</span>
      </button>
      <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <p className="pt-2 pl-11 md:pl-13 text-xs sm:text-sm text-graphite leading-relaxed text-pretty">{job.description}</p>
        </div>
      </div>
    </li>
  );
};

export const About = () => {
  const { t, language } = useTranslation();
  const meta = experienceMeta[language];
  const jobs = t("about.experienceItems");

  return (
    <>
      <Section id="about" title={t("about.title")}>
        <p className="text-graphite leading-relaxed text-pretty">{t("about.description")}</p>
      </Section>

      <Section title={t("about.experience")}>
        <ul className="list-none p-0 m-0 grid gap-6">
          {jobs.map((job, i) => (
            <Job key={i} job={job} meta={meta[i]} logo={jobLogos[i]} defaultOpen={i === 0} />
          ))}
        </ul>
      </Section>

      <Section title={t("about.education")}>
        <ul className="list-none p-0 m-0 flex flex-col gap-6">
          {t("about.educationItems").map((item, i) => (
            <li key={i} className="flex items-center gap-x-3">
              <Logo src={eduLogos[i].src} fit={eduLogos[i].fit} alt="" />
              <span dangerouslySetInnerHTML={{ __html: item }} />
            </li>
          ))}
        </ul>
      </Section>

      <section id="skills">
        <div className="flex flex-col gap-y-4">
          <BlurFade inView><h2 className="text-xl font-bold">Skills</h2></BlurFade>
          <div className="flex flex-wrap gap-2">
            {skills.map(({ name, icon: Icon }, i) => (
              <BlurFade key={name} delay={i * 0.04} inView>
                <div className="border border-rule bg-paper ring-2 ring-rule/40 rounded-xl h-8 w-fit px-4 flex items-center gap-2">
                  <Icon className="size-4" aria-hidden="true" />
                  <span className="text-sm font-medium">{name}</span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
