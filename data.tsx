import {
  BookText,
  CodeSquare,
  HomeIcon,
  CircleUserRound,
  UserRound,
  Linkedin,
  Twitter,
  Rss,
  Twitch,
  Youtube,
  Crop,
  Pencil,
  Computer,
  Book,
  Rocket,
  Speech,
  Mail,
  Instagram,
  Code,
} from "lucide-react";

export const socialNetworks = [
  {
    id: 1,
    logo: <CircleUserRound size={30} strokeWidth={1} />,
    src: "https://wa.me/+5804243678907",
  },
  {
    id: 2,
    logo: <Linkedin size={30} strokeWidth={1} />,
    src: "https://www.linkedin.com/in/javier-soto-945ba4217/",
  },
  /* {
    id: 3,
    logo: <Twitter size={30} strokeWidth={1} />,
    src: "#!",
  }, */
  {
    id: 4,
    logo: <Mail size={30} strokeWidth={1} />,
    src: "https://mail.google.com/",
  },
  /*  {
    id: 5,
    logo: <Instagram size={30} strokeWidth={1} />,
    src: "https://www.instagram.com/javier_uzcateguii/",
  }, */
];

export const itemsNavbar = [
  {
    id: 1,
    title: "Home",
    icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
    link: "/",
  },
  {
    id: 2,
    title: "Target",
    icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
    link: "/technologies",
  },
  {
    id: 3,
    title: "Book",
    icon: <BookText size={25} color="#fff" strokeWidth={1} />,
    link: "/services",
  },

  {
    id: 4,
    title: "User",
    icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
    link: "/about-me",
  },
  /* {
    id: 5,
    title: "Home",
    icon: <Speech size={25} color="#fff" strokeWidth={1} />,
    link: "/testimonials",
  }, */
];

export const dataAboutPage = [
  {
    id: 1,
    title: "Developer Crud",
    subtitle: "RozeDev",
    description:
      "Desarrollo de software y de la gestión de bases de datos relacionales, en base a la creacion se aplicacciones web como primera experiencia y primer contacto en el gran mundo del desarrollo",
    date: "Nov 2020",
  },
  {
    id: 2,
    title: "Creador de Experiencias Digitales",
    subtitle: "JsDev",
    description:
      "Trabajar en mis proyectos es algo emocionantes que desafían mis límites de la creatividad y la tecnología. Y poder seguir creando herramientas digitales cautivadoras que inspiran y cautivan a los usuarios.",
    date: "May 2021",
  },
  {
    id: 3,
    title: "Especialista en Desarrollo FullStack",
    subtitle: "360NET",
    description:
      "Como desarrollador fullstack, tuve la oportunidad de colaborar en proyectos diversos y desafiantes que me permitian expandir mis habilidades y dejar mi huella en el mundo digital.",
    date: "Ago 2019",
  },
  /* {
    id: 4,
    title: "Prácticas Grado",
    subtitle: "WebWizards Inc.",
    description:
      "Únete a nosotros mientras creamos sitios web y aplicaciones interactivas que sorprenden y deleitan a nuestros clientes. Si tienes pasión por el diseño y la programación, y disfrutas colaborar en un entorno creativo, ¡queremos conocerte!        ",
    date: "Mar 2018",
  }, */
];

export const dataCounter = [
  {
    id: 0,
    endCounter: 3,
    text: "Años de experiencia",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 1,
    endCounter: 12,
    text: "Proyectos finalizados",
    lineRight: true,
    lineRightMobile: false,
  },
  {
    id: 2,
    endCounter: 20,
    text: "Proyectos colaborados",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 3,
    endCounter: 0,
    text: "Premios ganadores",
    lineRight: false,
    lineRightMobile: false,
  },
];

export const serviceData = [
  {
    icon: <Crop />,
    title: "Data",
    description:
      "Optimizacion de flujo de datos, utilizando las mejores tecnologias",
  },
  {
    icon: <Pencil />,
    title: "Diseños Web",
    description:
      "Diseño creativo de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
  },
  {
    icon: <Computer />,
    title: "Desarrollo AppWeb",
    description:
      "Diseño y desarrollo de sitios y aplicaciones web a medida, adaptados a tus necesidades",
  },
  {
    icon: <Book />,
    title: "Apredinsaje",
    description:
      "Constante aprendisaje de las novedades y actualizaciones de los distontos frameworks y tecnologias",
  },
  {
    icon: <Rocket />,
    title: "Optimizacion",
    description:
      "Optimización de codigo limpio y ordenado para un mayor mantenimiento del mismo",
  },
];

export const dataPortfolio = [
  {
    id: 1,
    title: "typeScript",
    image: "/image-ts.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 2,
    title: "JavaScript",
    image: "/descarga.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 3,
    title: "Python",
    image: "/Python-logo",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 4,
    title: "PostgreSQL",
    image: "/Postgre.png",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 5,
    title: "Docker",
    image: "/docker.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 6,
    title: "React",
    image: "/react1.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 7,
    title: "Next.js ",
    image: "/next.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 8,
    title: "Node.js",
    image: "/node.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 7,
    title: "Nest.js ",
    image: "/nest-1.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 8,
    title: "Tailwind",
    image: "/csstd.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
];

export const dataTestimonials = [
  {
    id: 1,
    name: "George Snow",
    description:
      "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
    imageUrl: "/profile1.png",
  },
  {
    id: 2,
    name: "Juan Pérez",
    description:
      "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
    imageUrl: "/profile2.png",
  },
  {
    id: 3,
    name: "María García",
    description:
      "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
    imageUrl: "/profile3.png",
  },
  {
    id: 4,
    name: "Laura Snow",
    description:
      "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
    imageUrl: "/profile4.png",
  },
  {
    id: 5,
    name: "Carlos Sánchez",
    description:
      "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
    imageUrl: "/profile5.png",
  },
  {
    id: 6,
    name: "Antonio Martínez",
    description:
      "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
    imageUrl: "/profile6.png",
  },
];
