import { useLanguage } from "../contexts/LanguageContext";

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="text-xs font-semibold px-2.5 py-1 rounded border border-[#5D4432]/30
                 text-[#5D4432] hover:bg-[#5D4432] hover:text-[#F9F7F5]
                 transition-all duration-200 tracking-wider"
      title={language === "pt" ? "Switch to English" : "Mudar para Português"}
    >
      {language === "pt" ? "EN" : "PT"}
    </button>
  );
};
