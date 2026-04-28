import { useEffect } from "react";
import { useTranslation } from "../hooks/useTranslation";
import { LanguageToggle } from "./LanguageToggle";
/* eslint-disable react/prop-types */
export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const { t } = useTranslation();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[#F9F7F5]/90 backdrop-blur-md border-b border-[#5D4432]/12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-14">
          <a href="#home" className="font-['JetBrains_Mono',monospace] text-sm font-medium text-[#5D4432] tracking-tight">
            Felipe Farias
          </a>

          <div
            className="w-6 h-5 relative cursor-pointer z-40 md:hidden flex flex-col justify-between"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="block w-full h-0.5 bg-[#3E2B1E]" />
            <span className="block w-full h-0.5 bg-[#3E2B1E]" />
            <span className="block w-4 h-0.5 bg-[#3E2B1E]" />
          </div>

          <div className="hidden md:flex items-center gap-8">
            {[
              { href: "#home", label: t("navbar.home") },
              { href: "#about", label: t("navbar.about") },
              { href: "#certifications", label: t("navbar.certifications") },
              { href: "#contact", label: t("navbar.contact") },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-sm text-[#7A6055] hover:text-[#3E2B1E] transition-colors font-medium"
              >
                {label}
              </a>
            ))}
            <LanguageToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};
