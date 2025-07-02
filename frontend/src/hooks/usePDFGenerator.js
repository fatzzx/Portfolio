import { jsPDF } from "jspdf";
import { translations } from "../data/translations";

export const usePDFGenerator = () => {
  const generatePDF = (language = "pt") => {
    const doc = new jsPDF();
    const data = translations[language];

    // Configurações de fonte e cores
    const primaryColor = [59, 130, 246]; // Blue-500
    const textColor = [50, 50, 50]; // Gray-800
    const lightTextColor = [100, 100, 100]; // Gray-600

    let yPosition = 30;

    // Cabeçalho
    doc.setFontSize(24);
    doc.setTextColor(...primaryColor);
    doc.text("Felipe Spinola Farias", 20, yPosition);

    yPosition += 10;
    doc.setFontSize(12);
    doc.setTextColor(...lightTextColor);
    const subtitle =
      language === "pt"
        ? "Desenvolvedor | Estudante de Engenharia da Computação"
        : "Developer | Computer Engineering Student";
    doc.text(subtitle, 20, yPosition);

    // Informações de contato
    yPosition += 15;
    doc.setFontSize(10);
    doc.setTextColor(...textColor);
    doc.text("Email: felipespinolafarias@gmail.com", 20, yPosition);
    yPosition += 5;
    doc.text(
      "LinkedIn: linkedin.com/in/felipe-farias-929356240",
      20,
      yPosition
    );
    yPosition += 5;
    doc.text("GitHub: github.com/fatzzx", 20, yPosition);

    // Linha separadora
    yPosition += 10;
    doc.setDrawColor(...primaryColor);
    doc.line(20, yPosition, 190, yPosition);

    // Sobre Mim
    yPosition += 15;
    doc.setFontSize(16);
    doc.setTextColor(...primaryColor);
    doc.text(data.about.title, 20, yPosition);

    yPosition += 10;
    doc.setFontSize(10);
    doc.setTextColor(...textColor);

    // Quebrar o texto da descrição em múltiplas linhas
    const description = data.about.description
      .replace(/💻\s*/, "")
      .replace(/\s+/g, " ")
      .trim();
    const splitDescription = doc.splitTextToSize(description, 170);
    doc.text(splitDescription, 20, yPosition);
    yPosition += splitDescription.length * 4 + 5;

    // Habilidades
    yPosition += 10;
    doc.setFontSize(14);
    doc.setTextColor(...primaryColor);
    doc.text(
      language === "pt" ? "Habilidades Técnicas" : "Technical Skills",
      20,
      yPosition
    );

    yPosition += 10;
    doc.setFontSize(12);
    doc.setTextColor(...textColor);
    doc.text(data.about.frontend + ":", 20, yPosition);
    yPosition += 6;
    doc.setFontSize(10);
    const frontendSkills = ["React", "TailwindCSS", "JavaScript"];
    doc.text("• " + frontendSkills.join(", "), 25, yPosition);

    yPosition += 10;
    doc.setFontSize(12);
    doc.text(data.about.backend + ":", 20, yPosition);
    yPosition += 6;
    doc.setFontSize(10);
    const backendSkills = ["Python", ".NET", "SQL Server", "Java"];
    doc.text("• " + backendSkills.join(", "), 25, yPosition);

    // Formação
    yPosition += 20;
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

    // Experiência Profissional
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
      doc.setTextColor(...textColor);
      doc.text("• " + item.title, 25, yPosition);
      yPosition += 6;

      doc.setFontSize(9);
      doc.setTextColor(...lightTextColor);
      const splitDescription = doc.splitTextToSize(item.description, 160);
      doc.text(splitDescription, 30, yPosition);
      yPosition += splitDescription.length * 4 + 8;
    });

    // Rodapé
    const pageHeight = doc.internal.pageSize.height;
    doc.setFontSize(8);
    doc.setTextColor(...lightTextColor);
    const footerText =
      language === "pt"
        ? "Currículo gerado automaticamente pelo portfólio online"
        : "Resume automatically generated from online portfolio";
    doc.text(footerText, 20, pageHeight - 10);

    // Salvar o PDF
    const fileName =
      language === "pt"
        ? "Felipe_Farias_Curriculo_PT.pdf"
        : "Felipe_Farias_Resume_EN.pdf";

    doc.save(fileName);
  };

  return { generatePDF };
};
