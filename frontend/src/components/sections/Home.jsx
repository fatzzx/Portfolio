import { useTranslation } from "../../hooks/useTranslation";
import { BlurFade } from "../magicui/BlurFade";
import { BlurFadeText } from "../magicui/BlurFadeText";

export const Home = () => {
  const { t } = useTranslation();

  return (
    <section id="home">
      <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
        <div className="gap-2 flex flex-col order-2 md:order-1">
          <BlurFadeText
            delay={0.04}
            className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
            text={t("home.greeting")}
          />
          <BlurFadeText className="text-graphite max-w-[600px] md:text-lg lg:text-xl" delay={0.08} text={t("home.description")} />
          <BlurFade delay={0.16}>
            <p className="flex items-center gap-2.5 text-sm text-graphite mt-3">
              <span className="pulse inline-block w-2.5 h-2.5 rounded-full bg-signal" aria-hidden="true" />
              {t("home.status")}
            </p>
          </BlurFade>
        </div>
        <BlurFade delay={0.04} className="order-1 md:order-2">
          <img
            src="https://github.com/fatzzx.png"
            alt="Felipe Farias"
            className="size-24 md:size-32 rounded-full object-cover border border-rule shadow-lg ring-4 ring-paper-deep bg-paper-deep"
          />
        </BlurFade>
      </div>
    </section>
  );
};
