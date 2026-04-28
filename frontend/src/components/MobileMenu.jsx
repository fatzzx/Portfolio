import { useTranslation } from "../hooks/useTranslation";
import { LanguageToggle } from "./LanguageToggle";

/* eslint-disable react/prop-types */
export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const { t } = useTranslation();

  return (
    <div
      className={`fixed inset-0 bg-[#F9F7F5] z-40 flex flex-col
                  transition-all duration-300 ease-in-out
                  ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      <div className="flex justify-between items-center px-6 h-14 border-b border-[#5D4432]/12">
        <LanguageToggle />
        <button
          onClick={() => setMenuOpen(false)}
          className="text-[#3E2B1E] text-2xl leading-none focus:outline-none"
          aria-label="Fechar menu"
        >
          &times;
        </button>
      </div>

      <div className="flex flex-col justify-center flex-1 px-8 gap-10">
        {[
          { href: "#home", label: t("navbar.home"), delay: "delay-75" },
          { href: "#about", label: t("navbar.about"), delay: "delay-100" },
          { href: "#contact", label: t("navbar.contact"), delay: "delay-150" },
        ].map(({ href, label, delay }) => (
          <a
            key={href}
            href={href}
            onClick={() => setMenuOpen(false)}
            className={`text-4xl font-bold text-[#3E2B1E] hover:text-[#5D4432] transition-all duration-300 ${delay}
                        ${menuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
          >
            {label}
          </a>
        ))}
      </div>

      <div className="px-8 pb-10">
        <p className="text-xs text-[#7A6055]">felipefarias.tech</p>
      </div>
    </div>
  );
};
