import { Award, ExternalLink } from "lucide-react";
import { RevealOnScroll } from "../RevealOnScroll";
import { useTranslation } from "../../hooks/useTranslation";

const certsMetadata = [
  { logo: "https://www.deeplearning.ai/favicon.ico" },
];

const CertLogo = ({ src }) => {
  if (!src) return <Award size={20} className="text-[#5D4432]" />;
  return (
    <img
      src={src}
      alt=""
      className="w-6 h-6 object-contain"
      onError={(e) => {
        e.currentTarget.style.display = "none";
        e.currentTarget.nextSibling.style.display = "block";
      }}
    />
  );
};

const CertCard = ({ cert, meta, verifyLabel, coursesLabel }) => (
  <div className="bg-[#F9F7F5] rounded-2xl p-6 border border-[#5D4432]/10 hover:border-[#5D4432]/25 hover:shadow-md transition-all duration-300">
    {/* Header */}
    <div className="flex items-start gap-4 mb-5">
      <div className="w-10 h-10 rounded-xl bg-[#5D4432]/10 flex items-center justify-center shrink-0">
        <CertLogo src={meta?.logo} />
        <Award size={20} className="text-[#5D4432] hidden" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-[#3E2B1E] font-semibold text-base leading-snug mb-1">
          {cert.name}
        </h3>
        <p className="text-[#7A6055] text-sm">{cert.issuer}</p>
      </div>
      <a
        href={cert.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-xs text-[#5D4432] hover:text-[#3E2B1E] font-medium transition-colors shrink-0 mt-0.5"
      >
        {verifyLabel}
        <ExternalLink size={12} />
      </a>
    </div>

    {/* Sub-courses */}
    {cert.courses?.length > 0 && (
      <div className="border-t border-[#5D4432]/10 pt-4">
        <p className="text-xs font-semibold text-[#7A6055] uppercase tracking-wider mb-3">
          {coursesLabel}
        </p>
        <ul className="flex flex-col gap-2">
          {cert.courses.map((course, i) => (
            <li key={i} className="flex items-center justify-between gap-3">
              <span className="text-sm text-[#3E2B1E] leading-snug">{course.name}</span>
              <a
                href={course.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7A6055] hover:text-[#5D4432] transition-colors shrink-0"
                aria-label={`Verificar ${course.name}`}
              >
                <ExternalLink size={13} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

export const Certifications = () => {
  const { t } = useTranslation();
  const certs = t("certifications.items");

  return (
    <RevealOnScroll>
      <section id="certifications" className="py-24 bg-[#F2EDE8]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#3E2B1E] mb-3 text-center">
            {t("certifications.title")}
          </h2>
          <p className="text-[#7A6055] text-center mb-12">
            {t("certifications.subtitle")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {certs.map((cert, i) => (
              <CertCard
                key={i}
                cert={cert}
                meta={certsMetadata[i]}
                verifyLabel={t("certifications.verify")}
                coursesLabel={t("certifications.courses")}
              />
            ))}
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
};
