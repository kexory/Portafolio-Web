export const profile = {
  name: "Erick Cruz",
  age: "17 años",
  role: "CEO y Founder",
  location: "Tampico, Tamaulipas, México",
  email: "erickcruz.05dev@gmail.com",
  photo: "", // Si algún día usas retrato: "/images/erick-cruz.jpg"
  logo: `${import.meta.env.BASE_URL}images/kexory-logo.svg`,
  kivoplix: {
    url: "https://kexory-pre-registration.netlify.app/",
    status: "En desarrollo"
  },
  socials: [
    { id: "tiktok", label: "TikTok", url: "https://www.tiktok.com/@kexory", handle: "@kexory" },
    { id: "instagram", label: "Instagram", url: "https://www.instagram.com/kexory.inc/?hl=es", handle: "@kexory.inc" },
    { id: "youtube", label: "YouTube", url: "https://www.youtube.com/@kexory", handle: "@kexory" },
    { id: "threads", label: "Threads", url: "https://www.threads.com/@kexory_", handle: "@kexory_" },
    { id: "x", label: "X", url: "https://x.com/kexory_", handle: "@kexory_" },
    { id: "github", label: "GitHub", url: "https://github.com/kexory", handle: "kexory" }
  ]
};

// Sustituye los textos, tecnologías y enlaces por los datos de tus proyectos reales antes de publicar.
export const projects = [
  {
    id: "kexory-website",
    title: "Sitio web de Kexory",
    category: "Desarrollo web",
    status: "Fase Beta (Pruebas)",
    description: "Presencia digital para presentar la visión, los productos y el trabajo de Kexory.",
    details: "Describe aquí el objetivo del sitio, las decisiones de diseño y desarrollo, y qué parte construiste personalmente.",
    technologies: ["React", "Vite", "Javascript", "Git"],
    image: "",
    repository: "",
    liveUrl: ""
  },
  {
    id: "kivoplix-platform",
    title: "Kivoplix — Plataforma de aprendizaje",
    category: "Producto digital",
    status: "En desarrollo",
    description: "Plataforma de cursos en desarrollo para facilitar el acceso a experiencias de aprendizaje.",
    details: "Añade aquí las funcionalidades implementadas, el problema que aborda y los avances verificables del producto.",
    technologies: ["React", "Javascript", "Typescript", "Git"],
    image: "",
    repository: "",
    liveUrl: "https://kexory-pre-registration.netlify.app/"
  },
  {
    id: "identity-digital",
    title: "Identidad digital de Kexory",
    category: "Complemento del software del ecosistema Kexory",
    status: "En desarrollo",
    description: "Un proyecto para demostrar una habilidad técnica mediante una solución concreta.",
    details: "Reemplaza este contenido por el problema real, tu solución, las decisiones técnicas y los resultados obtenidos.",
    technologies: ["NestJS", "TypeScript", "pnpm", "Prisma ORM", "Jest", "Git"],
    image: "",
    repository: "",
    liveUrl: ""
  }
];

// Reemplaza estos registros con certificados reales. No añadas credenciales que no hayas obtenido.
export const certificates = [
  {
    id: "certificate-1",
    title: "Proximamente seran agregados",
    institution: "",
    date: "",
    description: "",
    image: "",
    url: ""
  },
  {
    id: "certificate-2",
    title: "Proximamente seran agregados",
    institution: "",
    date: "",
    description: "",
    image: "",
    url: ""
  },
  {
    id: "certificate-3",
    title: "Proximamente seran agregados",
    institution: "",
    date: "",
    description: "",
    image: "",
    url: ""
  }
];
