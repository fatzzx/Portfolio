import { RevealOnScroll } from "../RevealOnScroll";
import { useTranslation } from "../../hooks/useTranslation";

export const Home = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-14"
    >
      <div className="max-w-6xl mx-auto px-6 w-full py-20">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-20">

            {/* Photo card */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-xl border border-[#E9E3DD]">
                  <img
                    src="https://github.com/fatzzx.png"
                    alt="Felipe Farias"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-[#5D4432]/20 -z-10" />
              </div>
            </div>

            {/* Text content */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold text-[#3E2B1E] leading-tight mb-4">
                Felipe<br />Farias
              </h1>
              <div className="w-12 h-1 bg-[#5D4432] rounded-full mb-5 md:ml-0 mx-auto" />
              <p className="text-[#7A6055] text-base md:text-lg max-w-md leading-relaxed mb-8">
                {t("home.description")}
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <a
                  href="#about"
                  className="bg-[#5D4432] text-[#F9F7F5] py-2.5 px-6 rounded-lg text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#5D4432]/25"
                >
                  {t("navbar.about")}
                </a>
                <a
                  href="#contact"
                  className="border border-[#5D4432]/40 text-[#5D4432] py-2.5 px-6 rounded-lg text-sm font-semibold transition-all duration-200 hover:bg-[#5D4432]/6 hover:-translate-y-0.5"
                >
                  {t("home.contactButton")}
                </a>
              </div>
            </div>

          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
