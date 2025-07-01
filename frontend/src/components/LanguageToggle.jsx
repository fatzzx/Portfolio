import { useLanguage } from "../contexts/LanguageContext";

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-blue-500/30 
                 bg-blue-500/10 hover:bg-blue-500/20 transition-all duration-200 
                 text-white hover:shadow-[0_0_10px_rgba(59,130,246,0.3)]
                 hover:scale-105 active:scale-95"
      title={language === "pt" ? "Switch to English" : "Mudar para Português"}
    >
      <span className="text-lg">🌐</span>
      <span className="text-sm font-medium">
        {language === "pt" ? "EN" : "PT"}
      </span>
    </button>
  );
};
