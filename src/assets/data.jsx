import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact, FaJava } from "react-icons/fa";
import {
  SiSpringboot,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";
import salesCaptain from "../assets/images/salesCaptain-clone.png";
import ecommerce from "../assets/images/e-commerce.png";
import petCare from "../assets/images/petcare.png";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "JavaScript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "TypeScript",
    icon: <SiTypescript className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in TypeScript, building scalable and maintainable web applications with a focus on strong type safety and advanced JavaScript features.",
  },
  {
    id: nanoid(),
    title: "Java",
    icon: <FaJava className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in Java, developing efficient and reliable back-end applications with a strong emphasis on object-oriented programming principles.",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Next",
    icon: <SiNextdotjs className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in Next.js, developing performant and SEO-friendly web applications with a strong emphasis on server-side rendering and static site generation.",
  },
  {
    id: nanoid(),
    title: "NodeJs",
    icon: <SiNodedotjs className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in Node.js, developing efficient and scalable back-end applications with a strong emphasis on asynchronous programming and event-driven architecture.",
  },
  {
    id: nanoid(),
    title: "ExpressJs",
    icon: <SiExpress className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in Express.js, developing efficient and scalable back-end applications with a strong emphasis on middleware-based architecture.",
  },
  {
    id: nanoid(),
    title: "SpringBoot",
    icon: <SiSpringboot className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in Spring Boot, developing robust and scalable back-end applications with a strong emphasis on microservices architecture.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: petCare,
    url: "https://sanowar-petcare.netlify.app/",
    github: "https://github.com/Sanowar72/petproject",
    title: "Pet Care",
    text: "A responsive pet care website created using HTML, CSS, and JavaScript. It offers various features to help you manage and take care of your pets efficiently and effectively, ensuring their well-being.",
  },
  {
    id: nanoid(),
    img: salesCaptain,
    url: "https://sanowar-salescaptain.netlify.app/",
    github: "https://github.com/Sanowar72",
    title: "Sales Captain Clone",
    text: "A web application clone of Sales Captain, demonstrating features and functionalities similar to the original. Explore the interface and capabilities for managing and boosting sales efficiently.",
  },
  {
    id: nanoid(),
    img: ecommerce,
    url: "https://sanowar-ecommerce.netlify.app/",
    github: "https://github.com/Sanowar72/new-react-e-commerce-project",
    title: "E-commerce",
    text: "A web application for online shopping, offering a variety of products with advanced filtering options to streamline and enhance the overall shopping experience. Users can add and delete items from their cart.",
  },
];
