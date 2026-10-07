import { ExternalLink } from "lucide-react";
import { useTranslation } from "../../hooks/useTranslation";
import { Section, Logo } from "../Section";
import dlaiLogo from "../../assets/img/logos/deeplearning.png";

export const Certifications = () => {
  const { t } = useTranslation();
  const certs = t("certifications.items");

  return (
    <Section id="certifications" title={t("certifications.title")}>
      <div className="space-y-8">
        {certs.map((cert) => (
          <article key={cert.name}>
            <div className="flex gap-4">
              <Logo src={dlaiLogo} fit="contain" alt="DeepLearning.AI" />
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold leading-snug">{cert.name}</h3>
                <p className="text-sm text-graphite">{cert.issuer}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-signal underline underline-offset-4 mt-2"
                >
                  {t("certifications.verify")}
                  <ExternalLink size={13} aria-hidden="true" />
                </a>
              </div>
            </div>

            {cert.courses?.length > 0 && (
              <ul className="list-none p-0 m-0 mt-4 ml-14 divide-y divide-rule border-y border-rule">
                {cert.courses.map((course) => (
                  <li key={course.name}>
                    <a
                      href={course.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between gap-4 py-2.5 text-sm hover:text-signal transition-colors"
                    >
                      <span>{course.name}</span>
                      <ExternalLink size={14} className="shrink-0" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
};
