import { useState, useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
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
    <section id="contact" className="py-24 bg-[#F2EDE8]">
      <div className="max-w-6xl mx-auto px-6">
        <RevealOnScroll>
          <p className="text-xs font-semibold text-[#5D4432] tracking-widest uppercase mb-3">contato</p>
          <h2 className="text-4xl font-bold text-[#3E2B1E] mb-14">{t("contact.title")}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* Form */}
            <div>
              {success && (
                <div className="text-sm bg-[#16A34A]/10 border border-[#16A34A]/25 text-[#16A34A] px-4 py-3 rounded-xl mb-5">
                  {success}
                </div>
              )}
              {error && (
                <div className="text-sm bg-[#DC2626]/10 border border-[#DC2626]/25 text-[#DC2626] px-4 py-3 rounded-xl mb-5">
                  {error}
                </div>
              )}

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-[#3E2B1E] uppercase tracking-wide mb-1.5">
                    {t("contact.namePlaceholder")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    className="w-full bg-[#F9F7F5] border border-[#5D4432]/20 rounded-xl px-4 py-3 text-sm text-[#3E2B1E] placeholder-[#7A6055]/50 focus:outline-none focus:border-[#5D4432] focus:ring-1 focus:ring-[#5D4432]/20 transition"
                    placeholder={t("contact.namePlaceholder")}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-[#3E2B1E] uppercase tracking-wide mb-1.5">
                    {t("contact.messagePlaceholder")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    className="w-full bg-[#F9F7F5] border border-[#5D4432]/20 rounded-xl px-4 py-3 text-sm text-[#3E2B1E] placeholder-[#7A6055]/50 focus:outline-none focus:border-[#5D4432] focus:ring-1 focus:ring-[#5D4432]/20 transition resize-none"
                    placeholder={t("contact.messagePlaceholder")}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#5D4432] hover:bg-[#4A3628] text-[#F9F7F5] py-3 px-6 rounded-xl text-sm font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#5D4432]/25 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? t("contact.sending") : t("contact.sendButton")}
                </button>
              </form>
            </div>

            {/* Social links */}
            <div className="flex flex-col justify-center gap-3">
              {socials.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-[#F9F7F5] rounded-xl border border-[#5D4432]/10 text-[#3E2B1E] hover:border-[#5D4432]/30 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span className="text-[#5D4432]">{icon}</span>
                  <span className="text-sm font-medium">{label}</span>
                </a>
              ))}
            </div>

          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
