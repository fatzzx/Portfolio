import { RevealOnScroll } from "../RevealOnScroll";
import { useTranslation } from "../../hooks/useTranslation";

export const Languages = () => {
  const { t } = useTranslation();

  return (
    <section
      id="languages"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {t("languages.title")}
          </h2>

          <div className="space-y-6">
            {/* English */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">English</h3>
                <span className="text-sm text-gray-400">C1</span>
              </div>

              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full w-[85%]" />
              </div>

              <p className="text-sm text-gray-400 mt-2">{t("languages.c1")}</p>
            </div>

            {/* French */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  French
                  <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400">
                    {t("languages.inProgress")}
                  </span>
                </h3>
                <span className="text-sm text-gray-400">A2</span>
              </div>

              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full w-[40%]" />
              </div>

              <p className="text-sm text-gray-400 mt-2">{t("languages.a2")}</p>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
