export const translations = {
  pt: {
    languages: {
      title: "Competência Linguística",
      native: "Nativo",
      nativeDesc: "Língua materna.",
      inProgress: "Em estudo",
      c1: "Nível avançado – comunicação fluente em contextos profissionais e técnicos.",
      a2: "Nível básico-intermediário – atualmente em estudo, com foco em evolução contínua e uso profissional futuro.",
    },

    navbar: {
      home: "Página Inicial",
      about: "Sobre Mim",
      projects: "Projetos",
      certifications: "Certificações",
      contact: "Contato",
    },

    home: {
      greeting: "Olá, me chamo Felipe Farias!",
      description:
        "Desenvolvedor de software focado em backend, com experiência em sistemas internos, aplicações web e monitoramento.",
      contactButton: "Entrar em Contato",
      status: "Em operação desde 2024",
      chartLabel: "Linha do tempo profissional",
      now: "hoje",
    },

    about: {
      title: "Sobre Mim",
      description:
        "Sou desenvolvedor de software com experiência em sistemas internos e aplicações web. Atuo principalmente com backend, utilizando TypeScript, NestJS, Express e React, além de trabalhar com Java, C#, .NET e SQL Server. Já participei do desenvolvimento e manutenção de sistemas corporativos, sempre com foco em organização de código, estabilidade e soluções práticas. Possuo experiência em monitoramento e observabilidade com Zabbix e Grafana. Atualmente, estou em processo de estudo e aprofundamento em Machine Learning.",

      frontend: "Frontend",
      backend: "Backend",

      education: "Formação",
      experience: "Experiência Profissional",
      downloadCV: "Baixar Currículo",

      educationItems: [
        "<strong>Engenharia da Computação</strong> - SENAI CIMATEC",
        "Colégio Antônio Vieira - Ensino Médio",
      ],

      experienceItems: [
        {
          title:
            "Desenvolvedor – TLD Hub de Cibersegurança e Conectividade (2025 - Atual)",
          description:
            "Atuação no desenvolvimento de sistemas internos utilizando TypeScript, Express, NestJS e React, além da implementação de soluções de monitoramento e observabilidade com Zabbix e Grafana.",
        },
        {
          title:
            "Desenvolvedor Backend – ACP GROUP / PGE-BA (2024 - 2025 · Contrato Temporário)",
          description:
            "Desenvolvimento e manutenção de sistemas internos com C#, .NET, SQL Server e IIS. Atuei também na manutenção de sistemas legados em Java (Spring Boot/JSP), realizando integrações essenciais com outros órgãos públicos.",
        },
        {
          title:
            "Pesquisa Aplicada em Computação Quântica – SENAI CIMATEC",
          description:
            "Estudos teóricos e experimentos em comunicação quântica com foco no protocolo BB84 para distribuição quântica de chaves (QKD) e transmissão segura de informações.",
        },
      ],
    },

    projects: {
      title: "Confira meus trabalhos",
      intro: "Projetos pessoais e de pesquisa, de simuladores de criptografia quântica a plataformas web.",
      items: [
        {
          title: "AVSYS",
          description:
            "Sistema distribuído de reserva de passagens aéreas pensado para alta concorrência: lock distribuído e filas de mensagens impedem a reserva duplicada do mesmo assento.",
        },
        {
          title: "Cheguei",
          description:
            "Controle de encomendas para portaria de condomínio: a encomenda entra com foto, o morador é avisado no WhatsApp e a retirada é assinada na tela.",
        },
        {
          title: "Fabdle",
          description:
            "Jogo diário no estilo Wordle em que você adivinha o herói de Flesh and Blood, o jogo de cartas.",
        },
        {
          title: "Consulta de Jogos",
          description:
            "Plataforma para consultar informações de jogos, preços e criar lista de favoritos",
        },
        {
          title: "BB84 Simulator",
          description:
            "Simulador do protocolo BB84 para criptografia quântica e distribuição segura de chaves",
        },
      ],
      viewProject: "Ver Projeto →",
    },

    certifications: {
      title: "Certificações",
      subtitle: "Cursos e certificações concluídos na Coursera",
      verify: "Verificar",
      courses: "Cursos incluídos",
      items: [
        {
          name: "Mathematics for Machine Learning and Data Science",
          issuer: "DeepLearning.AI (Coursera)",
          link: "https://www.coursera.org/account/accomplishments/specialization/JJR2FN1GZ7F0",
          courses: [
            {
              name: "Linear Algebra for Machine Learning and Data Science",
              link: "https://www.coursera.org/account/accomplishments/verify/HJOK50N5TN4Z",
            },
            {
              name: "Calculus for Machine Learning and Data Science",
              link: "https://www.coursera.org/account/accomplishments/verify/QKOEFC8WRWT9",
            },
            {
              name: "Probability & Statistics for Machine Learning & Data Science",
              link: "https://www.coursera.org/account/accomplishments/verify/8N3RUXKYSU6S",
            },
          ],
        },
      ],
    },

    contact: {
      title: "Entrar em Contato",
      intro: "Quer conversar? Me chame pelo formulário abaixo, pelo LinkedIn ou pelo WhatsApp e eu respondo assim que puder.",
      namePlaceholder: "Seu nome...",
      messagePlaceholder: "Sua mensagem...",
      sendButton: "Enviar via Gmail",
      sending: "Redirecionando...",
      successMessage:
        "Redirecionando para o Gmail! Se não abriu automaticamente, verifique se pop-ups estão bloqueados.",
      errorMessage: "Houve um problema ao abrir o Gmail. Tente novamente.",
    },
  },

  en: {
    languages: {
      title: "Language Proficiency",
      native: "Native",
      nativeDesc: "Mother tongue.",
      inProgress: "In progress",
      c1: "Advanced level – fluent communication in professional and technical contexts.",
      a2: "Elementary to pre-intermediate level – currently studying, with focus on continuous improvement and future professional use.",
    },

    navbar: {
      home: "Home",
      about: "About Me",
      projects: "Projects",
      certifications: "Certifications",
      contact: "Contact",
    },

    home: {
      greeting: "Hello, I'm Felipe Farias!",
      description:
        "Software developer focused on backend, with experience in internal systems, web applications and observability.",
      contactButton: "Get in Touch",
      status: "In operation since 2024",
      chartLabel: "Professional timeline",
      now: "now",
    },

    about: {
      title: "About Me",
      description:
        "I'm a software developer with experience in internal systems and web applications, primarily focused on backend development using TypeScript, NestJS, Express, and React, with additional experience in Java, C#, .NET, and SQL Server. I've contributed to the development and maintenance of corporate systems with an emphasis on clean code, stability, and practical solutions. I also have experience in system monitoring and observability using Zabbix and Grafana. Between 2024 and 2025, I worked on applied research in quantum computing at SENAI CIMATEC, focusing on the BB84 protocol for Quantum Key Distribution (QKD). Currently, I am studying and deepening my knowledge in Machine Learning.",

      frontend: "Frontend",
      backend: "Backend",

      education: "Education",
      experience: "Professional Experience",
      downloadCV: "Download Resume",

      educationItems: [
        "<strong>Computer Engineering</strong> - SENAI CIMATEC",
        "Colégio Antônio Vieira - High School",
      ],

      experienceItems: [
        {
          title:
            "Software Developer – TLD Cybersecurity and Connectivity Hub (2025 - Present)",
          description:
            "Worked on internal systems using TypeScript, Express, NestJS, and React, as well as implementing monitoring and observability solutions with Zabbix and Grafana.",
        },
        {
          title:
            "Backend Developer – ACP GROUP / PGE-BA (2024 - 2025 · Temporary Contract)",
          description:
            "Development and maintenance of internal systems using C#, .NET, SQL Server, and IIS. Also worked on the maintenance of legacy Java (Spring Boot/JSP) systems, developing essential integrations with other public agencies.",
        },
        {
          title:
            "Applied Research in Quantum Computing – SENAI CIMATEC",
          description:
            "Theoretical studies and experiments in quantum communication with a focus on the BB84 protocol for Quantum Key Distribution (QKD) and secure information transmission.",
        },
      ],
    },

    projects: {
      title: "Check out my latest work",
      intro: "Personal and research projects, from quantum cryptography simulators to web platforms.",
      items: [
        {
          title: "AVSYS",
          description:
            "Distributed flight booking system built for high concurrency: a distributed lock and message queues prevent the same seat from being booked twice.",
        },
        {
          title: "Cheguei",
          description:
            "Parcel tracking for condominium front desks: the parcel is logged with a photo, the resident gets a WhatsApp notice and pickup is signed on screen.",
        },
        {
          title: "Fabdle",
          description:
            "Daily Wordle-style game where you guess the Flesh and Blood hero, the card game.",
        },
        {
          title: "Games Consultation",
          description:
            "Platform to consult game information, prices and create favorites list",
        },
        {
          title: "BB84 Simulator",
          description:
            "BB84 protocol simulator for quantum cryptography and secure key distribution",
        },
      ],
      viewProject: "View Project →",
    },

    certifications: {
      title: "Certifications",
      subtitle: "Courses and certifications completed on Coursera",
      verify: "Verify",
      courses: "Included courses",
      items: [
        {
          name: "Mathematics for Machine Learning and Data Science",
          issuer: "DeepLearning.AI (Coursera)",
          link: "https://www.coursera.org/account/accomplishments/specialization/JJR2FN1GZ7F0",
          courses: [
            {
              name: "Linear Algebra for Machine Learning and Data Science",
              link: "https://www.coursera.org/account/accomplishments/verify/HJOK50N5TN4Z",
            },
            {
              name: "Calculus for Machine Learning and Data Science",
              link: "https://www.coursera.org/account/accomplishments/verify/QKOEFC8WRWT9",
            },
            {
              name: "Probability & Statistics for Machine Learning & Data Science",
              link: "https://www.coursera.org/account/accomplishments/verify/8N3RUXKYSU6S",
            },
          ],
        },
      ],
    },

    contact: {
      title: "Get in Touch",
      intro: "Want to chat? Reach me through the form below, on LinkedIn or on WhatsApp and I'll reply whenever I can.",
      namePlaceholder: "Your name...",
      messagePlaceholder: "Your message...",
      sendButton: "Send via Gmail",
      sending: "Redirecting...",
      successMessage:
        "Redirecting to Gmail! If it didn't open automatically, check if pop-ups are blocked.",
      errorMessage: "There was a problem opening Gmail. Please try again.",
    },
  },
};
