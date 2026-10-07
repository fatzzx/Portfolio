import { useState, useEffect } from "react";
import { BlurFade } from "../magicui/BlurFade";
import { FlickeringGrid } from "../magicui/FlickeringGrid";
import { Linkedin, Github, Phone } from "lucide-react";
import { useTranslation } from "../../hooks/useTranslation";

export const Contact = () => {
  const { t, language } = useTranslation();
  const [formData, setFormData] = useState({ name: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const myEmail = "felipespinolafarias@gmail.com";
      const subject =
        language === "pt"
          ? `Contato do Portfólio - ${formData.name}`
          : `Portfolio Contact - ${formData.name}`;
      const body =
        language === "pt"
          ? `Olá Felipe!\n\nMeu nome é ${formData.name} e gostaria de entrar em contato.\n\n${formData.message}\n\n---\nEnviado através do seu portfólio`
          : `Hello Felipe!\n\nMy name is ${formData.name} and I would like to get in touch.\n\n${formData.message}\n\n---\nSent through your portfolio`;

      const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${myEmail}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      const newWindow = window.open(gmailWebUrl, "_blank");
      if (!newWindow) {
        window.location.href = `mailto:${myEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      }

      setSuccess(t("contact.successMessage"));
      setFormData({ name: "", message: "" });
    } catch {
      setError(t("contact.errorMessage"));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => { setSuccess(""); setError(""); }, 5000);
      return () => clearTimeout(timer);
    }
  }, [success, error]);

  const socials = [
    {
      icon: <Linkedin size={18} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/felipe-farias-929356240",
    },
    {
      icon: <Github size={18} />,
      label: "GitHub",
      href: "https://github.com/fatzzx",
    },
    {
      icon: <Phone size={18} />,
      label: "+55 (71) 9 9987-9701",
      href: "https://wa.me/5571999879701",
    },
  ];

  return (
    <section id="contact">
      <BlurFade inView>
        <div className="border border-rule rounded-xl p-6 sm:p-10 relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 border border-ink bg-ink z-10 rounded-xl px-4 py-1">
            <span className="text-paper text-sm font-medium">{t("navbar.contact")}</span>
          </div>
          <FlickeringGrid
            className="absolute inset-x-0 top-0 h-1/2 rounded-xl overflow-hidden"
            style={{ maskImage: "linear-gradient(to bottom, black, transparent)", WebkitMaskImage: "linear-gradient(to bottom, black, transparent)" }}
          />
          <div className="relative flex flex-col items-center gap-4 text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t("contact.title")}</h2>
            <p className="mx-auto max-w-lg text-graphite text-balance">{t("contact.intro")}</p>
          </div>

          <div className="relative space-y-10">
        <div>
          <div role="status" aria-live="polite">
            {success && <p className="text-signal font-medium mb-5">{success}</p>}
            {error && <p className="text-alert font-medium mb-5">{error}</p>}
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2">
                {t("contact.namePlaceholder")}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-transparent border-b border-ink/30 py-2 focus:outline-none focus:border-signal transition-colors"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                {t("contact.messagePlaceholder")}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-transparent border-b border-ink/30 py-2 focus:outline-none focus:border-signal transition-colors resize-none"
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-alert hover:bg-[#a93809] text-white py-3 px-7 rounded-md text-sm font-semibold transition-colors disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
            >
              {loading ? t("contact.sending") : t("contact.sendButton")}
            </button>
          </form>
        </div>

        <ul className="list-none p-0 m-0 flex flex-wrap justify-center gap-x-6 gap-y-2">
          {socials.map(({ icon, label, href }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-1 text-sm font-medium text-graphite hover:text-ink transition-colors"
              >
                {icon}
                {label}
              </a>
            </li>
          ))}
        </ul>
          </div>
        </div>
      </BlurFade>
      <p className="mt-10 text-sm text-graphite text-center">© {new Date().getFullYear()} Felipe Farias</p>
    </section>
  );
};
