import { useState } from "react";
import { Home, User, FolderGit2, Mail, Download, Github, Linkedin, Sun, Moon } from "lucide-react";
import { useTranslation } from "../hooks/useTranslation";
import { usePDFGenerator } from "../hooks/usePDFGenerator";
import { useLanguage } from "../contexts/LanguageContext";
import { Dock, DockIcon } from "./magicui/Dock";

const iconButton =
  "size-full cursor-pointer rounded-full bg-paper border border-rule text-graphite hover:text-ink hover:bg-paper-deep transition-colors";

/* eslint-disable react/prop-types */
const Tip = ({ label, children }) => (
  <span className="group relative flex">
    {children}
    <span
      role="tooltip"
      className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-3 whitespace-nowrap rounded-xl bg-ink text-paper px-3 py-1.5 text-sm opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity"
    >
      {label}
    </span>
  </span>
);

const NavLink = ({ href, label, icon: Icon, external }) => (
  <Tip label={label}>
    <a
      href={href}
      aria-label={label}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="rounded-full"
    >
      <DockIcon className={iconButton}>
        <Icon className="size-full" />
      </DockIcon>
    </a>
  </Tip>
);

const Divider = () => <span className="w-px h-2/3 my-auto bg-rule" aria-hidden="true" />;

export const Navbar = () => {
  const { t } = useTranslation();
  const { language, toggleLanguage } = useLanguage();
  const { generatePDF } = usePDFGenerator();
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));
  const baseSize = window.matchMedia("(max-width: 639px)").matches ? 32 : 40;

  const toggleTheme = () => {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch { /* storage unavailable */ }
    setDark(next);
  };

  const langLabel = language === "pt" ? "Switch to English" : "Mudar para Português";
  const themeLabel = dark ? "Light" : "Dark";
  const cvLabel = `${t("about.downloadCV")} (PDF · ${language.toUpperCase()})`;

  return (
    <nav
      aria-label="Menu"
      className="pointer-events-none fixed inset-x-0 bottom-4 z-30"
    >
      <Dock
        baseSize={baseSize}
        magnification={baseSize < 40 ? baseSize : 60}
        className="pointer-events-auto relative h-14 p-2 w-fit mx-auto flex gap-1 sm:gap-2 border-rule bg-paper/90 backdrop-blur-3xl shadow-[0_0_10px_3px] shadow-ink/5"
      >
        <NavLink href="#home" label={t("navbar.home")} icon={Home} />
        <NavLink href="#about" label={t("navbar.about")} icon={User} />
        <NavLink href="#projects" label={t("navbar.projects")} icon={FolderGit2} />
        <NavLink href="#contact" label={t("navbar.contact")} icon={Mail} />
        <Tip label={cvLabel}>
          <button onClick={() => generatePDF(language)} aria-label={cvLabel} className="rounded-full">
            <DockIcon className={iconButton}>
              <Download className="size-full" />
            </DockIcon>
          </button>
        </Tip>
        <Divider />
        <NavLink href="https://github.com/fatzzx" label="GitHub" icon={Github} external />
        <NavLink href="https://www.linkedin.com/in/felipe-farias-929356240" label="LinkedIn" icon={Linkedin} external />
        <Divider />
        <Tip label={themeLabel}>
          <button onClick={toggleTheme} aria-label={themeLabel} className="rounded-full">
            <DockIcon className={iconButton}>
              {dark ? <Sun className="size-full" /> : <Moon className="size-full" />}
            </DockIcon>
          </button>
        </Tip>
        <Tip label={langLabel}>
          <button onClick={toggleLanguage} aria-label={langLabel} className="rounded-full">
            <DockIcon className={`${iconButton} text-xs font-bold`}>
              {language === "pt" ? "EN" : "PT"}
            </DockIcon>
          </button>
        </Tip>
      </Dock>
    </nav>
  );
};
