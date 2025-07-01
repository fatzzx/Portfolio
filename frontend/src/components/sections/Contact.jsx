import { useState, useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useTranslation } from "../../hooks/useTranslation";

export const Contact = () => {
  const { t, language } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

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
          ? `Olá Felipe!

Meu nome é ${formData.name} e gostaria de entrar em contato com você.

${formData.message}

---
Enviado através do seu portfólio`
          : `Hello Felipe!

My name is ${formData.name} and I would like to get in touch with you.

${formData.message}

---
Sent through your portfolio`;

      const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${myEmail}&su=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      const newWindow = window.open(gmailWebUrl, "_blank");

      if (!newWindow) {
        const mailtoLink = `mailto:${myEmail}?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
      }

      setSuccess(t("contact.successMessage"));
      setFormData({ name: "", message: "" });
    } catch (err) {
      setError(t("contact.errorMessage"));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        setSuccess("");
        setError("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [success, error]);

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {t("contact.title")}
          </h2>
          {success && (
            <div className="bg-green-500 text-white px-4 py-2 rounded-lg text-center mb-4 animate-fade-in">
              {success}
            </div>
          )}
          {error && (
            <div className="bg-red-500 text-white px-4 py-2 rounded-lg text-center mb-4 animate-fade-in">
              {error}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder={t("contact.namePlaceholder")}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder={t("contact.messagePlaceholder")}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              disabled={loading}
            >
              {loading ? t("contact.sending") : t("contact.sendButton")}
            </button>
          </form>

          <div className="flex justify-center space-x-6 mt-6">
            <a
              href="https://www.linkedin.com/in/felipe-farias-929356240"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition-colors"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://github.com/fatzzx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition-colors"
            >
              <FaGithub size={30} />
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
