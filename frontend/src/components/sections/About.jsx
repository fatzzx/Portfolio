import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["React", "TailwindCSS", "JavaScript"];
  const backendSkills = ["Python", ".NET", "SQL Server", "Java"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Sobre Mim
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6 text-center">
              💻 Felipe Spinola Farias – Desenvolvedor e estudante de Engenharia
              da Computação no SENAI CIMATEC. Já atuei no desenvolvimento de
              sistemas utilizando C#, .NET, SQL Server e arquitetura de
              software. Tenho experiência com Arquitetura Limpa, DDD e Padrão
              Repositório, aplicando esses conceitos para garantir organização e
              escalabilidade do código. Além disso, realizo uma Iniciação
              Científica em Computação Quântica e, no meu tempo livre, aprofundo
              meus estudos em Deep Learning. Apaixonado por programação, já
              atuei como monitor de Algoritmos e Estruturas de Dados e sigo
              constantemente expandindo meu conhecimento em tecnologia.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Formação</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Engenharia da Computação</strong> - SENAI CIMATEC
                  (2022-2027)
                </li>
                <li>Colégio Antônio Vieira - Ensino Médio (2019-2021)</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">
                💼 Experiência Profissional
              </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Desenvolvedor Júnior na ACP GROUP (2024 - 2025)
                  </h4>
                  <p>
                    Atuei com C#, .NET Framework, .NET Core, Microsoft SQL
                    Server, Internet Information Services (IIS) e padrões
                    arquiteturais como microsserviços e monolítico.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Bolsista Voluntário de Iniciação Científica (2024 -
                    Presente)
                  </h4>
                  <p>
                    Estudos teóricos e testes na área de comunicação quântica
                    para transmissão segura de informações.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
