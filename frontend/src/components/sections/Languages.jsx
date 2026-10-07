import { useTranslation } from "../../hooks/useTranslation";
import { Section } from "../Section";

export const Languages = () => {
  const { t } = useTranslation();

  const langs = [
    { name: "Português", level: t("languages.native"), description: t("languages.nativeDesc") },
    { name: "English", level: "C1", description: t("languages.c1") },
    { name: "Français", level: "A2", description: t("languages.a2"), badge: t("languages.inProgress") },
  ];

  return (
    <Section id="languages" title={t("languages.title")}>
      <ul className="list-none p-0 m-0 space-y-4">
        {langs.map((lang) => (
          <li key={lang.name}>
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-semibold">
                {lang.name}
                {lang.badge && <span className="ml-2 text-sm font-normal text-signal">{lang.badge}</span>}
              </h3>
              <span className="text-sm text-graphite">{lang.level}</span>
            </div>
            <p className="text-sm text-graphite mt-0.5 text-pretty">{lang.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
};
