import { RevealOnScroll } from "../RevealOnScroll";
import { useTranslation } from "../../hooks/useTranslation";

const projectsData = [
  {
    link: "https://quantum.felipefarias.tech/",
    emoji: "⚛️",
    color: "from-blue-500 to-cyan-400",
  },
  {
    link: "https://play-worth.vercel.app/",
    emoji: "🎮",
    color: "from-purple-500 to-pink-400",
  },
];

export const Projects = () => {
  const { t } = useTranslation();
  const projects = t("projects.items");

  return (
    <section id="projects" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <RevealOnScroll>
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {t("projects.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-b from-gray-900 to-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div
                  className={`w-full h-40 rounded-lg mb-4 bg-gradient-to-r ${
                    projectsData[index]?.color || "from-blue-500 to-cyan-400"
                  } flex items-center justify-center`}
                >
                  <div className="text-white text-center">
                    <div className="text-6xl mb-2">
                      {projectsData[index]?.emoji || "💻"}
                    </div>
                    <div className="text-lg font-semibold">{project.title}</div>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6">{project.description}</p>
                <a
                  href={projectsData[index].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors"
                >
                  {t("projects.viewProject")}
                </a>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
