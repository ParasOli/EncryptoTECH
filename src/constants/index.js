import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  alibaba,
  burlaz,
  jobit,
  tripguide,
  cyberlock,
  burlazsite,
  asppy,
  jabbur,
  php,
  asppyPhoto

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About us",
  },
  {
    id: "work",
    title: "Our Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Security",
    icon: web,
  },
  {
    title: "Threat Assessment",
    icon: mobile,
  },
  {
    title: "Web Development",
    icon: backend,
  },
  {
    title: "Digital Marketing",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "cyber lock",
    icon: cyberlock,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Security Researcher",
    company_name: "Alibaba",
    icon: alibaba,
    iconBg: "#383E56",
    date: "November 2019",
    points: [
      "Discovered multiple high-severity security vulnerabilities in Alibaba's websites.",
      "Recognized and featured in the Hall of Fame for November 2019 for significant contributions to improving security."
    ],
  },
  {
    title: "SECURITY/DEVELOPMENT",
    company_name: "Jabbur",
    icon: jabbur,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Currently working on development and security for SafSocial since October 2018.",
     "Fixed multiple security vulnerabilities to enhance website safety and user trust.", 
     "Developed and customized website features to improve user experience and functionality.",
     "Collaborated with cross-functional teams to ensure compliance with security standards.",
     "Conducted regular security audits and implemented best practices to mitigate risks."
    ],
  },
  {
    title: "Web Developer",
    company_name: "Asppy Creation",
    icon: asppy,
    iconBg: "#383E56",
    date: "Jan 2024",
    points: [
      "Developed and maintained the Asppy Creation website using PHP.",
      "Collaborated with designers and developers to build high-quality, responsive features.",
      "Implemented product listings, shopping cart, and order tracking functionalities.",
      "Integrated secure payment methods and free shipping on orders over €60.",
      "Optimized the website for cross-browser compatibility and performance."
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Burlaz Legal",
    icon: burlaz,
    iconBg: "#E6DEDD",
    date: "Feb 2024 - Present",
    points: [
      "Led the development of Burlaz Legal's website, utilizing React.js and other related technologies to create a dynamic user experience.",
      "Collaborated with cross-functional teams, including designers and marketing experts, to develop a comprehensive online presence that effectively communicates the brand's value.",
      "Implemented responsive design principles and ensured cross-browser compatibility to optimize user engagement across various devices.",
      "Executed digital marketing strategies, including SEO optimization and social media campaigns, to increase website traffic and enhance client outreach.",
      "Participated in code reviews and provided constructive feedback to ensure the highest quality of code and product performance."
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but this team proved me wrong.",
    name: "Arvind Basnet",
    company: "Burlaz Legal",
    image: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like you guys does.",
    name: "Narayan Shrestha",
    company: "Asppy Creation",
    image: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Laxmi Bhatta",
    company: "",
    image: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  },
];

const projects = [
  {
    name: "Legal Services Portal",
    description:
     "We developed a comprehensive Legal Services Platform for a law professional, designed to streamline client management, case tracking, and document handling.",
        tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: burlazsite,
    source_code_link: "https://github.com/",
  },
  {
    name: "Asppy Creation",
    description:
      "A web application that allows users to browse and shop for stylish accessories from the Asppy collection, view detailed product descriptions",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: asppyPhoto,
    source_code_link: "",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
