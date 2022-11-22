import javascript from "../assets/images/skills/javascript.png";
import react from "../assets/images/skills/react.png";
import nodeJs from "../assets/images/skills/nodeJs.png";
// import typescript from "../assets/images/skills/typescript.png";
import html5 from "../assets/images/skills/html-5.png";
import css3 from "../assets/images/skills/css3.png";
// import bootstrap from "../assets/images/skills/bootstrap.png";
import chakraUI from "../assets/images/skills/chakraUI.png";
import heroku from "../assets/images/skills/heroku.png";
import vscode from "../assets/images/skills/vscode.png";
// import figma from "../assets/images/skills/figma.png";
import meanbuy from "../assets/images/projects/meanbuy1.png";
import fabbag from "../assets/images/projects/fabbag1.png";
import timecamp from "../assets/images/projects/timecamp1.png";

export const skills = [
  {
    name: "Javascript",
    description: "Web development",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    type: "development",
    image: javascript,
  },
  {
    name: "React",
    description: "Web development",
    link: "https://reactjs.org/",
    type: "development",
    image: react,
  },
  {
    name: "Node",
    description: "Web development",
    link: "https://nodejs.org/en/",
    type: "development",
    image: nodeJs,
  },
  // {
  //   name: "Typescript",
  //   description: "Web development",
  //   link: "https://www.typescriptlang.org/",
  //   type: "development",
  //   image: typescript,
  // },
  {
    name: "HTML5",
    description: "Web layouts",
    link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
    type: "development",
    image: html5,
  },
  {
    name: "CSS3",
    description: "Web design",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    type: "design",
    image: css3,
  },
  // {
  //   name: "Bootstrap",
  //   description: "Web design",
  //   link: "https://getbootstrap.com/",
  //   type: "design",
  //   image: bootstrap,
  // },
  {
    name: "Chakra UI",
    description: "Web design",
    link: "https://chakra-ui.com/",
    type: "design",
    image: chakraUI,
  },
  {
    name: "Heroku",
    description: "Devops",
    link: "https://www.heroku.com/",
    type: "devops",
    image: heroku,
  },
  //   {
  //     name: "Oracle",
  //     description: "Devops",
  //     link: "https://cloud.oracle.com/",
  //     type: "devops",
  //     image: oracle,
  //   },
  {
    name: "Visual Studio Code",
    description: "Code editor of choice",
    link: "https://code.visualstudio.com/",
    type: "development",
    image: vscode,
  },
  // {
  //   name: "Figma",
  //   description: "Collaborative Design",
  //   link: "https://www.figma.com/",
  //   type: "design",
  //   image: figma,
  // },
];

export const projects = [
  {
    name: "Sugar_Cosmetic_Clone",
    description:
      "Sugar cosmetics is well known brand for cosmetics products for women. Products are ordered online like flipkart.",
    technology: ["Javascript", "CSS3", "HTML"],
    deployLink:
      "https://silly-queijadas-a569ac.netlify.app/",
    githubLink: "https://github.com/Aaru1996/Sugar_Cosmetics_clone",
    image: timecamp,
  },
  {
    name: "travelocity",
    description:
      "Travelocity is a platform for you to buy tickets for flight, hotels,cars, cruies etc. It is e-ticketing website",
    technology: ["Javascript", "CSS3", "HTML"],
    deployLink: "https://silly-queijadas-a569ac.netlify.app/",
    githubLink: "https://github.com/Sunny7079/travelocity",
    image: meanbuy,
  },
  {
    name: "pharmEasy-Clone",
    description:
      "Fab Bag offers an online retail platform for beauty discovery and subscription. The company provides beauty and cosmetic samples on a monthly subscription basis. Member benefits also include discounts on sampled products and detailed information on how to use the products.",
    technology: ["Javascript", "CSS3", "HTML"],
    deployLink: "https://rajashu261998.github.io/pharmEasy-Clone/",
    githubLink: "https://github.com/Rajashu261998/pharmEasy-Clone",
    image: fabbag,
  },
];
