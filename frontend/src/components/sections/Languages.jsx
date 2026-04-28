import { RevealOnScroll } from "../RevealOnScroll";
import { useTranslation } from "../../hooks/useTranslation";


export const Languages = () => {
  const { t } = useTranslation();

  const langs = [
    {
      name: "Português",
      level: t("languages.native"),
      description: t("languages.nativeDesc"),
      percent: 100,
    },
    {
      name: "English",
      level: "C1",
      description: t("languages.c1"),
      percent: 85,
    },
    {
      name: "French",
      level: "A2",
      description: t("languages.a2"),
      percent: 40,
      badge: t("languages.inProgress"),
    },
  ];

  return (
    <section id="languages" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <RevealOnScroll>
          <p className="text-xs font-semibold text-[#5D4432] tracking-widest uppercase mb-3">idiomas</p>
          <h2 className="text-4xl font-bold text-[#3E2B1E] mb-14">{t("languages.title")}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {langs.map((lang, i) => (
              <div
                key={lang.name}
                className={`bg-[#F2EDE8] rounded-2xl p-7 border border-[#5D4432]/10 hover:-translate-y-1 transition-transform duration-200${i === 0 ? " md:col-span-2" : ""}`}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-bold text-[#3E2B1E]">{lang.name}</h3>
                        {lang.badge && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-[#5D4432]/12 text-[#5D4432] font-medium">
                            {lang.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#7A6055] mt-0.5">{lang.description}</p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-[#5D4432] bg-[#5D4432]/10 px-2.5 py-1 rounded-md">
                    {lang.level}
                  </span>
                </div>

                <div className="w-full bg-[#E9E3DD] rounded-full h-1.5">
                  <div
                    className="bg-[#5D4432] h-1.5 rounded-full transition-all duration-700"
                    style={{ width: `${lang.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
