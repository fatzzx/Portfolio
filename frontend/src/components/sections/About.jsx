import { RevealOnScroll } from "../RevealOnScroll";
import { useTranslation } from "../../hooks/useTranslation";
import { usePDFGenerator } from "../../hooks/usePDFGenerator";
import { Download, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const SkillBadge = ({ label }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-md bg-[#E9E3DD] text-[#5D4432] text-xs font-semibold">
    {label}
  </span>
);

export const About = () => {
  const { t } = useTranslation();
  const { generatePDF } = usePDFGenerator();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const frontendSkills = ["React", "TailwindCSS", "JavaScript"];
  const backendSkills = ["TypeScript", "NestJS", "Express", "Python", ".NET", "SQL Server", "Java"];

  const handleDownloadPDF = (lang) => {
    generatePDF(lang);
    setShowDropdown(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section id="about" className="py-24 bg-[#F2EDE8]">
      <div className="max-w-6xl mx-auto px-6">
        <RevealOnScroll>

          {/* Header */}
          <div className="flex justify-between items-start mb-14">
            <div>
              <p className="text-xs font-semibold text-[#5D4432] tracking-widest uppercase mb-3">sobre</p>
              <h2 className="text-4xl font-bold text-[#3E2B1E]">{t("about.title")}</h2>
            </div>

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-2 border border-[#5D4432]/35 text-[#5D4432] px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:bg-[#5D4432] hover:text-[#F9F7F5]"
              >
                <Download size={13} />
                {t("about.downloadCV")}
                <ChevronDown size={13} className={`transition-transform ${showDropdown ? "rotate-180" : ""}`} />
              </button>

              {showDropdown && (
                <div className="absolute right-0 mt-2 w-44 bg-[#F9F7F5] border border-[#5D4432]/15 rounded-xl shadow-lg z-10 overflow-hidden">
                  <button
                    onClick={() => handleDownloadPDF("pt")}
                    className="w-full text-left px-4 py-3 text-sm text-[#3E2B1E] hover:bg-[#E9E3DD] transition-colors"
                  >
                    Português
                  </button>
                  <div className="h-px bg-[#5D4432]/10 mx-3" />
                  <button
                    onClick={() => handleDownloadPDF("en")}
                    className="w-full text-left px-4 py-3 text-sm text-[#3E2B1E] hover:bg-[#E9E3DD] transition-colors"
                  >
                    English
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Bio */}
          <div className="mb-12">
            <p className="text-[#7A6055] text-base leading-relaxed max-w-2xl">
              {t("about.description")}
            </p>
          </div>

          {/* Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#F9F7F5] rounded-2xl p-6 border border-[#5D4432]/10">
              <h3 className="text-xs font-bold text-[#3E2B1E] uppercase tracking-wide mb-4">
                {t("about.frontend")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech) => <SkillBadge key={tech} label={tech} />)}
              </div>
            </div>

            <div className="bg-[#F9F7F5] rounded-2xl p-6 border border-[#5D4432]/10">
              <h3 className="text-xs font-bold text-[#3E2B1E] uppercase tracking-wide mb-4">
                {t("about.backend")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech) => <SkillBadge key={tech} label={tech} />)}
              </div>
            </div>
          </div>

          {/* Education + Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#F9F7F5] rounded-2xl p-6 border border-[#5D4432]/10">
              <h3 className="text-xs font-bold text-[#3E2B1E] uppercase tracking-wide mb-5">
                {t("about.education")}
              </h3>
              <ul className="space-y-3">
                {t("about.educationItems").map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#5D4432] flex-shrink-0" />
                    <span
                      className="text-sm text-[#7A6055] leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#F9F7F5] rounded-2xl p-6 border border-[#5D4432]/10">
              <h3 className="text-xs font-bold text-[#3E2B1E] uppercase tracking-wide mb-5">
                {t("about.experience")}
              </h3>
              <div className="space-y-5">
                {t("about.experienceItems").map((item, index, arr) => (
                  <div key={index} className="flex gap-3">
                    <div className="flex flex-col items-center pt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5D4432] flex-shrink-0" />
                      {index < arr.length - 1 && (
                        <span className="w-px flex-1 bg-[#5D4432]/15 mt-1" />
                      )}
                    </div>
                    <div className="pb-2">
                      <p className="text-sm font-semibold text-[#3E2B1E]">{item.title}</p>
                      <p className="text-sm text-[#7A6055] leading-relaxed mt-0.5">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </RevealOnScroll>
      </div>
    </section>
  );
};
