import { RevealOnScroll } from "../RevealOnScroll";

const projects = [
  {
    title: "TicketGen",
    description: "Gerador de tickets para desafio FrontendMentor ",
    link: "https://github.com/fatzzx/TicketGen",
  },
  {
    title: "Calculadora de Idade",
    description: "Descubra sua idade completa! ",
    link: "https://github.com/fatzzx/calculadora-idade",
  },
  {
    title: "Consulta Nutricional",
    description: "Dados Nutri! ",
    link: "https://github.com/fatzzx/CONSULTA-NUTRICIONAL",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <RevealOnScroll>
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Meus Projetos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-b from-gray-900 to-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors"
                >
                  Ver no GitHub →
                </a>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
