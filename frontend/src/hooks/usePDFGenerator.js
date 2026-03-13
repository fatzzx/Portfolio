import { jsPDF } from "jspdf";
import { translations } from "../data/translations";

export const usePDFGenerator = () => {
  const generatePDF = (language = "pt") => {
    const doc = new jsPDF();
    const data = translations[language];

    const primaryColor = [59, 130, 246];
    const textColor = [50, 50, 50];
    const lightTextColor = [100, 100, 100];

    let yPosition = 30;

    doc.setFontSize(24);
    doc.setTextColor(...primaryColor);
    doc.text("Felipe Spinola Farias", 20, yPosition);

    yPosition += 10;
    doc.setFontSize(12);
    doc.setTextColor(...lightTextColor);
    const subtitle =
      language === "pt"
        ? "Desenvolvedor"
        : "Developer";
    doc.text(subtitle, 20, yPosition);

    yPosition += 15;
    doc.setFontSize(10);
    doc.setTextColor(...textColor);
    doc.text("Email: felipespinolafarias@gmail.com", 20, yPosition);
    yPosition += 5;
    doc.text(
      "LinkedIn: linkedin.com/in/felipe-farias-929356240",
      20,
      yPosition,
    );
    yPosition += 5;
    doc.text("GitHub: github.com/fatzzx", 20, yPosition);
    yPosition += 5;
    doc.text("Phone: +55 (71) 9 9987-9701", 20, yPosition);

    yPosition += 10;
    doc.setDrawColor(...primaryColor);
    doc.line(20, yPosition, 190, yPosition);

    yPosition += 15;
    doc.setFontSize(16);
    doc.setTextColor(...primaryColor);
    doc.text(data.about.title, 20, yPosition);

    yPosition += 10;
    doc.setFontSize(10);
    doc.setTextColor(...textColor);

    const description = data.about.description
      .replace(/💻\s*/, "")
      .replace(/\s+/g, " ")
      .trim();

    const splitDescription = doc.splitTextToSize(description, 170);
    doc.text(splitDescription, 20, yPosition);
    yPosition += splitDescription.length * 4 + 10;

    doc.setFontSize(14);
    doc.setTextColor(...primaryColor);
    doc.text(
      language === "pt" ? "Habilidades Técnicas" : "Technical Skills",
      20,
      yPosition,
    );

    yPosition += 10;
    doc.setFontSize(12);
    doc.setTextColor(...textColor);
    doc.text(data.about.frontend + ":", 20, yPosition);
    yPosition += 6;
    doc.setFontSize(10);
    doc.text("• React, TailwindCSS, JavaScript", 25, yPosition);

    yPosition += 10;
    doc.setFontSize(12);
    doc.text(data.about.backend + ":", 20, yPosition);
    yPosition += 6;
    doc.setFontSize(10);
    doc.text(
      "• TypeScript, Node.js, Express, NestJS, Python, .NET, SQL, Java",
      25,
      yPosition,
    );

    yPosition += 15;
    doc.setFontSize(14);
    doc.setTextColor(...primaryColor);
    doc.text(language === "pt" ? "Idiomas" : "Languages", 20, yPosition);

    yPosition += 10;
    doc.setFontSize(11);
    doc.setTextColor(...textColor);
    doc.text(
      language === "pt"
        ? "• Inglês — C1 (Avançado, fluente para uso profissional)"
        : "• English — C1 (Advanced, fluent for professional use)",
      25,
      yPosition,
    );

    yPosition += 6;
    doc.setFontSize(10);
    doc.setTextColor(...lightTextColor);
    doc.text(
      language === "pt"
        ? "• Francês — A2 (Em estudo atualmente)"
        : "• French — A2 (Currently studying)",
      25,
      yPosition,
    );

    yPosition += 15;
    doc.setFontSize(14);
    doc.setTextColor(...primaryColor);
    doc.text(data.about.education.replace("🏫 ", ""), 20, yPosition);

    yPosition += 10;
    doc.setFontSize(10);
    doc.setTextColor(...textColor);

    data.about.educationItems.forEach((item) => {
      const cleanItem = item.replace(/<[^>]*>/g, "");
      doc.text("• " + cleanItem, 25, yPosition);
      yPosition += 6;
    });

    yPosition += 15;
    doc.setFontSize(14);
    doc.setTextColor(...primaryColor);
    doc.text(data.about.experience.replace("💼 ", ""), 20, yPosition);

    yPosition += 10;
    doc.setFontSize(10);
    doc.setTextColor(...textColor);

    data.about.experienceItems.forEach((item) => {
      if (yPosition > 250) {
        doc.addPage();
        yPosition = 30;
      }

      doc.setFontSize(11);
      doc.text("• " + item.title, 25, yPosition);
      yPosition += 6;

      doc.setFontSize(9);
      doc.setTextColor(...lightTextColor);
      const splitDesc = doc.splitTextToSize(item.description, 160);
      doc.text(splitDesc, 30, yPosition);
      yPosition += splitDesc.length * 4 + 8;
    });

    const pageHeight = doc.internal.pageSize.height;
    doc.setFontSize(8);
    doc.setTextColor(...lightTextColor);

    const fileName =
      language === "pt"
        ? "Felipe_Farias_Curriculo_PT.pdf"
        : "Felipe_Farias_Resume_EN.pdf";

    doc.save(fileName);
  };

  return { generatePDF };
};
