import { useTranslation } from "../hooks/useTranslation";
import { LanguageToggle } from "./LanguageToggle";

/* eslint-disable react/prop-types */
export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const { t } = useTranslation();

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] backdrop-blur-lg z-40 flex flex-col items-center justify-center
                     transition-all duration-300 ease-in-out

                     ${
                       menuOpen
                         ? "h-screen opacity-100 pointer-events-auto"
                         : "h-0 opacity-0 pointer-events-none"
                     }
                   `}
    >
      {/* Header do menu com botão de fechar e toggle de idioma */}
      <div className="absolute top-6 left-6 right-6 flex justify-between items-center">
        <div
          className={`transform transition-all duration-300 ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
          }`}
        >
          <LanguageToggle />
        </div>
        <button
          onClick={() => setMenuOpen(false)}
          className="text-white text-3xl focus:outline-none cursor-pointer"
          aria-label="Close Menu"
        >
          &times;
        </button>
      </div>

      {/* Links de navegação com espaçamento ajustado */}
      <div className="flex flex-col items-center space-y-8 mt-8">
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-white transform transition-all duration-300 delay-100
                      hover:text-blue-400 hover:scale-110
                      ${
                        menuOpen
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-5"
                      }
              `}
        >
          {t("navbar.home")}
        </a>
        <a
          href="#about"
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-white transform transition-all duration-300 delay-200
                      hover:text-blue-400 hover:scale-110
                      ${
                        menuOpen
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-5"
                      }
          `}
        >
          {t("navbar.about")}
        </a>
        <a
          href="#projects"
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-white transform transition-all duration-300 delay-300
                      hover:text-blue-400 hover:scale-110
                      ${
                        menuOpen
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-5"
                      }
          `}
        >
          {t("navbar.projects")}
        </a>
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-white transform transition-all duration-300 delay-500
                      hover:text-blue-400 hover:scale-110
                      ${
                        menuOpen
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-5"
                      }
          `}
        >
          {t("navbar.contact")}
        </a>
      </div>
    </div>
  );
};
