import catalog from "@/assets/images/projects/catalog.png";
import bub from "@/assets/images/projects/bub.png";
import gain from "@/assets/images/projects/gain.png";
import jitters from "@/assets/images/projects/jitters.png";
import platinum from "@/assets/images/projects/platinum.png";
import stellar from "@/assets/images/projects/stellar.png";
import varena from "@/assets/images/projects/varena.png";
import frontendMentor from "@/assets/images/projects/frontend-mentor.png";
import bike from "@/assets/images/projects/bike.png";
import adjustableRamp from "@/assets/images/projects/adjustable-ramp-1.png";

export const FEATUREDPROJECTS = [
  {
    title: "Cat-A-Log",
    image: catalog,
    description:
      "Cat-A-Log is a web app that leverages AI to scan images of cats, analyze their patterns and characteristics, and generate digital trading cards based on rarity.",
  },
  {
    title: "Bike Frame Design",
    image: bike,
    description:
      "This bike frame was designed using SolidWorks, following step-by-step tutorial to achieve a robust and functional design.",
  },
  {
    title: "Bub it",
    description:
      "A URL shortener web application that helps you to shorten your long URLs, customize them, generate QR codes, and share them.",
    image: bub,
  },
  {
    title: "Adjustable Ramp",
    image: adjustableRamp,
    description:
      "This adjustable ramp was meticulously designed and 3D-printed to test the maximum incline angle at which a robot can move upwards without tipping over. ",
    category: "Enginner",
  },
];

export const DEVELOPERPROJECTS = [
  {
    title: "Cat-A-Log",
    description:
      "Cat-A-Log is a web app that leverages AI to scan images of cats, analyze their patterns and characteristics, and generate digital trading cards based on rarity.",
    image: catalog,
    liveLink: "https://www.catalog-trading.fun/",
    toolsUsed: [
      "Django",
      "React.js",
      "Docker",
      "AWS",
      "PostgreSQL",
      "OpenAI",
      "Replicate",
    ],
  },
  {
    title: "Stellar Eminence",
    description:
      "Stellar Eminence are trailblazers in the digital landscape, offering a comprehensive suite of services across software development, design, manufacturing, and research.",
    image: stellar,
    liveLink: "https://www.stellareminence.com/",
    toolsUsed: ["Next.js", "TailwindCss", "TypeScript"],
  },
  {
    title: "Platinum Beam",
    description:
      "Platinum Beam Concept is a cleaning service based in Nigeria, has undergone a remarkable transformation from its humble beginnings to becoming a leading luxury cleaning service provider.",
    image: platinum,
    liveLink: "https://www.platinumbeamconcept.com/",
    toolsUsed: ["React.js", "Node.js", "Javascript", "MongoDB"],
  },
  {
    title: "Gain Africa",
    description:
      "A website for Gain Africa, a worldwide network of Africans who believe in a better Africa resulting from newly empowered generation of leaders.",
    image: gain,
    liveLink: "https://gainafrica.org/",
    toolsUsed: ["HTML", "TailwindCss", "Javascript"],
  },
  {
    title: "Bub it",
    description:
      "A URL shortener web application that helps you to shorten your long URLs, customize them, generate QR codes, and share them.",
    image: bub,
    githubLink: "https://github.com/Moyinoluwa-10/bub-it",
    liveLink: "https://bub.icu/",
    toolsUsed: ["React.js", "SCSS", "Node.js", "MongoDB"],
  },
  {
    title: "Jitter's Chatbot",
    description:
      "A chatbot built to streamline the ordering process for a restaurant. Users orders are also saved for future reference.",
    image: jitters,
    imageAlt: "jitters",
    githubLink: "https://github.com/Moyinoluwa-10/restaurant_chatbot",
    liveLink: "https://restaurant-chatbot-v5u5.onrender.com/",
    toolsUsed: ["HTML", "CSS", "Javascript", "Node.js", "MongoDB", "Socket.io"],
  },
  {
    title: "Frontend Mentor",
    description:
      "A compilation of all the frontend mentor projects I have built.",
    image: frontendMentor,
    githubLink: "https://github.com/Moyinoluwa-10/frontend-mentor",
    liveLink: "https://frontend-mentor-port.netlify.app/",
    toolsUsed: ["React.js", "TailwindCSS"],
  },
  {
    title: "Varena",
    description:
      "A play to earn NFT battle game that runs on a 2D physics engine(matter.js) and blockchain",
    image: varena,
    toolsUsed: [
      "React.js",
      "CSS",
      "Matter.js",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },
];
