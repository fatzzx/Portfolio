import { RevealOnScroll } from "../RevealOnScroll";
import { useTranslation } from "../../hooks/useTranslation";
import { usePDFGenerator } from "../../hooks/usePDFGenerator";
import { FaDownload, FaChevronDown } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

export const About = () => {
  const { t, language } = useTranslation();
  const { generatePDF } = usePDFGenerator();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const frontendSkills = ["React", "TailwindCSS", "JavaScript"];
  const backendSkills = ["Python", ".NET", "SQL Server", "Java"];

  const handleDownloadPDF = (lang) => {
    generatePDF(lang);
    setShowDropdown(false);
  };

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex justify-between items-start mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              {t("about.title")}
            </h2>

            {/* Botão de Download com Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-all hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                <FaDownload />
                {t("about.downloadCV")}
                <FaChevronDown
                  className={`transition-transform ${
                    showDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>

              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-lg z-10">
                  <button
                    onClick={() => handleDownloadPDF("pt")}
                    className="w-full text-left px-4 py-3 text-white hover:bg-white/10 rounded-t-lg transition-colors"
                  >
                    🇧🇷 Português
                  </button>
                  <button
                    onClick={() => handleDownloadPDF("en")}
                    className="w-full text-left px-4 py-3 text-white hover:bg-white/10 rounded-b-lg transition-colors"
                  >
                    🇺🇸 English
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6 text-center">
              {t("about.description")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">
                  {t("about.frontend")}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">{t("about.backend")}</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">{t("about.education")}</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {t("about.educationItems").map((item, index) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">
                {t("about.experience")}
              </h3>
              <div className="space-y-4 text-gray-300">
                {t("about.experienceItems").map((item, index) => (
                  <div key={index}>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
