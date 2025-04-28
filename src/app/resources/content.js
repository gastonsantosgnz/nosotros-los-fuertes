import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Gastón",
  lastName: "Santos",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Fundador - Nosotros los Fuertes",
  avatar: "/images/nlflogo.png",
  email: "hola@nosotroslosfuertes.com",
  location: "America/Tijuana", // Tijuana, Baja California, México
  languages: ["Español"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Suscríbete a Nosotros los Fuertes</>,
  description: (
    <>
      Un email semanal con reflexiones, retos y recursos para crecer en fe, 
      carácter, familia y propósito como hombre cristiano.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://instagram.com/nosotroslosfuertes",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/nlflogo.png",
  label: "Inicio",
  title: `Nosotros los Fuertes`,
  description: `Un espacio para forjar hombres cristianos fuertes, íntegros y valientes, llamados a transformar su vida, su familia y su mundo a la luz de la Palabra de Dios.`,
  headline: <>Fuiste llamado a ser fuerte</>,
  featured: {
    display: true,
    title: <>Romanos 15:1-3</>,
    href: "/blog",
  },
  subline: (
    <>
      No para tu propia gloria, sino para edificar, proteger y servir.
      <br /> &ldquo;Así que, nosotros los fuertes debemos sobrellevar las flaquezas de los débiles, y no agradarnos a nosotros mismos.&rdquo;
    </>
  ),
};

const about = {
  path: "/about",
  label: "Nosotros",
  title: `Sobre Nosotros los Fuertes`,
  description: `Un ministerio dedicado a edificar hombres cristianos fuertes en carácter y fe`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Nuestra visión",
    description: (
      <>
        Nosotros los Fuertes es un espacio dedicado a forjar hombres cristianos fuertes, íntegros y 
        valientes, llamados a transformar su vida, su familia y su mundo a la luz de la Palabra de Dios.
        Creemos que el hombre cristiano está llamado no solo a recibir, sino también a edificar, 
        proteger y servir.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Categorías de contenido",
    experiences: [
      {
        company: "Fe",
        timeframe: "",
        role: "Crecimiento espiritual",
        achievements: [
          <>
            Estudios bíblicos, devocionales, discipulado y crecimiento espiritual para hombres cristianos.
          </>,
        ],
        images: [],
      },
      {
        company: "Carácter",
        timeframe: "",
        role: "Desarrollo personal",
        achievements: [
          <>
            Desarrollo de virtudes como integridad, valentía, dominio propio y liderazgo interior.
          </>,
        ],
        images: [],
      },
      {
        company: "Familia",
        timeframe: "",
        role: "Relaciones",
        achievements: [
          <>
            Matrimonio, paternidad, relaciones sanas y edificación del hogar desde una perspectiva bíblica.
          </>,
        ],
        images: [],
      },
      {
        company: "Trabajo",
        timeframe: "",
        role: "Vocación y propósito",
        achievements: [
          <>
            Productividad, excelencia profesional, propósito laboral y manejo de finanzas con integridad.
          </>,
        ],
        images: [],
      },
      {
        company: "Salud",
        timeframe: "",
        role: "Bienestar integral",
        achievements: [
          <>
            Bienestar físico, mental y emocional como herramientas para servir y liderar mejor.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Sobre el autor",
    institutions: [
      {
        name: "Gastón Santos",
        description: <>Hombre cristiano de 33 años, residente de Tijuana, Baja California, México. Felizmente casado y con 15 años caminando con el Señor.</>,
      },
    ],
  },
  technical: {
    display: false,
    title: "",
    skills: [],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Nosotros los Fuertes",
  description: `Artículos para hombres cristianos sobre fe, carácter, familia, trabajo y salud.`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
