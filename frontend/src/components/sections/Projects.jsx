/* eslint-disable react/prop-types */
import { useTranslation } from "../../hooks/useTranslation";
import { Chip } from "../Section";
import { BlurFade } from "../magicui/BlurFade";
import { ArrowUpRight } from "lucide-react";
import archivumShot from "../../assets/img/project-archivum.jpg";
import chegueiShot from "../../assets/img/project-cheguei.jpg";
import fabdleShot from "../../assets/img/project-fabdle.jpg";

// Same order as projects.items in translations.js.
const projectsData = [
  { link: "https://github.com/fatzzx/avsys", tags: ["Bun", "ElysiaJS", "Redis", "RabbitMQ", "NGINX", "Docker"], art: "services" },
  { link: "https://cheguei.gtstech.business", tags: ["Bun", "Elysia", "Postgres", "Next.js", "WhatsApp"], image: chegueiShot },
  { link: "https://fabdle-three.vercel.app", tags: ["TypeScript", "Vite"], image: fabdleShot },
  { link: "https://archivum.fzx.lat/", tags: ["TypeScript", "React", "Vite", "Multiplayer"], image: archivumShot },
  { link: "https://github.com/fatzzx/BB84-simulator", tags: ["TypeScript", "BB84", "QKD"], art: "basis" },
];

const ArtFrame = ({ children }) => (
  <div className="w-full h-48 grid place-items-center bg-neutral-950 text-white" aria-hidden="true">{children}</div>
);

// No screenshot for BB84: draw the four BB84 polarization states instead.
const BasisArt = () => (
  <ArtFrame>
    <div className="flex gap-5 text-4xl font-light select-none">
      {["↑", "↗", "→", "↖"].map((a, i) => (
        <span key={i} className={i % 2 ? "text-emerald-400" : ""}>{a}</span>
      ))}
    </div>
  </ArtFrame>
);

// AVSYS has no deploy: sketch its gateway and services.
const ServicesArt = () => (
  <ArtFrame>
    <div className="flex flex-col items-center gap-2 text-xs font-medium">
      <span className="rounded-md border border-white/40 px-3 py-1">nginx</span>
      <span className="h-3 w-px bg-white/40" />
      <div className="flex gap-2">
        {["flights", "reservations", "payments"].map((n) => (
          <span key={n} className="rounded-md border border-emerald-400 text-emerald-400 px-2.5 py-1">{n}</span>
        ))}
      </div>
      <span className="h-3 w-px bg-white/40" />
      <div className="flex gap-2">
        {["redis", "rabbitmq"].map((n) => (
          <span key={n} className="rounded-md border border-white/40 px-3 py-1">{n}</span>
        ))}
      </div>
    </div>
  </ArtFrame>
);

export const Projects = () => {
  const { t } = useTranslation();
  const projects = t("projects.items");

  return (
    <section id="projects">
      <div className="flex flex-col gap-y-8">
        <BlurFade inView>
          <div className="flex flex-col gap-y-4 items-center">
            <Chip>{t("navbar.projects")}</Chip>
            <div className="flex flex-col gap-y-3 items-center text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{t("projects.title")}</h2>
              <p className="text-graphite md:text-lg text-balance">{t("projects.intro")}</p>
            </div>
          </div>
        </BlurFade>
        <ul className="list-none p-0 m-0 grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto auto-rows-fr">
          {projects.map((project, i) => {
            const d = projectsData[i];
            return (
              <li key={project.title} className={`h-full ${i === projects.length - 1 && projects.length % 2 ? "sm:col-span-2" : ""}`}>
                <BlurFade delay={i * 0.05} inView className="h-full">
                  <a
                    href={d.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col h-full border border-rule rounded-xl overflow-hidden hover:ring-2 hover:ring-paper-deep transition-all duration-200"
                  >
                    {d.image ? (
                      <img src={d.image} alt="" className="w-full h-48 object-cover object-top" />
                    ) : d.art === "services" ? (
                      <ServicesArt />
                    ) : (
                      <BasisArt />
                    )}
                    <div className="p-6 flex flex-col gap-3 flex-1">
                      <h3 className="font-semibold flex items-start justify-between gap-2">
                        {project.title}
                        <ArrowUpRight size={16} className="text-graphite group-hover:text-ink transition-colors shrink-0" aria-hidden="true" />
                      </h3>
                      <p className="text-xs text-graphite leading-relaxed text-pretty flex-1">{project.description}</p>
                      <div className="flex flex-wrap gap-1 mt-auto">
                        {d.tags.map((tag) => (
                          <span key={tag} className="text-[11px] font-medium border border-rule rounded-md h-6 px-2 inline-flex items-center">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                </BlurFade>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
