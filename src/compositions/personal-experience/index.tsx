import { Divider } from "@cv/components";
import React from "react";
import DescriptionsList, {
  DescriptionsListDataProps,
} from "../descriptions-list";

function PersonalExperience() {
  const dataSourcePersonal: DescriptionsListDataProps[] = [
    {
      href: "https://demo-e-commerce-laptop.netlify.app/",
      title: `E-COMMERCE LAPTOP WEBSITE`,
      avatar: `/images/icons/reactjs.png`,
      description:
        "An e-commerce website implemented with ReactJS and Ant Design",
      imageDemo: "/images/laptop-selling-website-1.png",
      descriptionProject: {
        key: 0,
        technology: ["ReactJS", "Ant Design", "Emotion Styled", "Typescript"],
        githubLink: "https://github.com/quocthinh79/ChuyenDeWeb",
        demoLink: "https://demo-e-commerce-laptop.netlify.app/",
        knowledge: ["TypeScript", "Ant Design", "Customize hooks"],
        teamSize: 1,
      },
    },
    {
      href: "https://quoc-thinh-resume.netlify.app/",
      title: `My Resume`,
      avatar: `/images/icons/nextjs.png`,
      description:
        "The website describes in detail my experience and knowledge in the field of programming",
      imageDemo: "/images/resume.png",
      descriptionProject: {
        key: 0,
        technology: ["NextJS", "Ant Design", "Typescript"],
        githubLink: "https://github.com/quocthinh79/resume",
        demoLink: "https://quoc-thinh-resume.netlify.app/",
        knowledge: ["NextJS", "Ant Design", "SEO"],
        teamSize: 1,
      },
    },
    {
      href: "https://cv-quocthinh.vercel.app/",
      title: `My old resume`,
      avatar: `/images/icons/html.png`,
      description:
        "The website describes in detail my experience and knowledge in the field of programming",
      imageDemo: "/images/old-resume.png",
      descriptionProject: {
        key: 0,
        technology: ["HTML", "CSS", "SCSS"],
        githubLink: "https://github.com/quocthinh79/CV",
        demoLink: "https://cv-quocthinh.vercel.app/",
        knowledge: ["Improve CSS skill"],
        teamSize: 1,
      },
    },
    {
      href: "https://movie-project-bdb9.vercel.app/",
      title: `Movie web`,
      avatar: `/images/icons/reactjs.png`,
      description:
        "Combined with themoviedb's API to make a website about watching movies",
      imageDemo: "/images/movie-project.png",
      descriptionProject: {
        key: 0,
        technology: [
          "ReactJS",
          "ReduxToolKit",
          "React Hook",
          "Swipper",
          "Tippy",
          "Tailwind CSS",
        ],
        githubLink: "https://github.com/quocthinh79/MovieProject",
        demoLink: "https://movie-project-bdb9.vercel.app/",
        knowledge: ["API calling"],
        teamSize: 1,
      },
    },
    {
      href: "https://deckofcard-h0mpz14rb-quocthinh79.vercel.app/",
      title: `CARD GAME`,
      avatar: `/images/icons/reactjs.png`,
      description: "A simple entertainment game made with ReactJS",
      imageDemo: "/images/deckofcard.png",
      descriptionProject: {
        key: 0,
        technology: ["ReactJS", "Axios", "SCSS"],
        githubLink: "https://github.com/quocthinh79/deckofcard",
        demoLink: "https://deckofcard-h0mpz14rb-quocthinh79.vercel.app/",
        knowledge: ["API calling", "Improve logic"],
        teamSize: 1,
      },
    },
    {
      href: "https://todo-list-beige-delta.vercel.app/",
      title: `TO DO LIST`,
      avatar: `/images/icons/reactjs.png`,
      description:
        "Todo list is simple but combined with sorting algorithms and data structures",
      imageDemo: "/images/todo-list.png",
      descriptionProject: {
        key: 0,
        technology: ["ReactJS", "Bootstrap"],
        githubLink: "https://github.com/quocthinh79/Todo_List",
        demoLink: "https://todo-list-beige-delta.vercel.app/",
        knowledge: ["Apply data structures and algorithms"],
        teamSize: 1,
      },
    },
    {
      href: "https://quocthinh79.github.io/PhotoAppReduxBasic/#/photos",
      title: "PHOTO APP",
      avatar: `/images/icons/reactjs.png`,
      description: "Simple website for redux practice",
      imageDemo: "/images/photo_app.png",
      descriptionProject: {
        key: 0,
        technology: ["ReactJS", "Redux Tool Kit"],
        githubLink: "https://github.com/quocthinh79/PhotoAppReduxBasic",
        demoLink: "https://quocthinh79.github.io/PhotoAppReduxBasic/#/photos",
        knowledge: ["Redux", "Redux tool kit"],
        teamSize: 1,
      },
    },
    {
      href: "https://newsappangular-815ac.web.app/",
      title: "NEWS WEBSITE",
      avatar: `/images/icons/angular.png`,
      description:
        "Implement newspaper reading website with RSS provided from website",
      imageDemo: "/images/news-website.png",
      descriptionProject: {
        key: 0,
        technology: ["Angular", "RXJS", "Bootstrap"],
        githubLink: "https://github.com/quocthinh79/NewsApp_Angular",
        demoLink: "https://newsappangular-815ac.web.app/",
        knowledge: ["Angular", "API calling"],
        teamSize: 3,
        role: "Lead team",
      },
    },
    {
      href: "https://github.com/quocthinh79/JSP_Servlet_LaptopSellingWebsite",
      title: "E-COMMERCE LAPTOP WEBSITE",
      avatar: `/images/icons/java.png`,
      description: "E-commerce website implemented by JSP Servlet",
      descriptionProject: {
        key: 0,
        technology: ["JSP - Servlet", "HTML", "CSS", "Ajax", "JQuery"],
        githubLink:
          "https://github.com/quocthinh79/JSP_Servlet_LaptopSellingWebsite",
        knowledge: ["Ajax", "JSP", "Servlet", "MySQL"],
        teamSize: 3,
        role: "Lead team",
      },
    },
    {
      href: "https://quocthinh79.github.io/LaptopSellingWebsite/",
      title: "E-COMMERCE LAPTOP WEBSITE",
      avatar: `/images/icons/html.png`,
      description: "Implement e-commerce website with HTML CSS JS",
      imageDemo: "/images/laptop_selling_website.png",
      descriptionProject: {
        key: 0,
        technology: ["HTML", "CSS", "JS"],
        githubLink: "https://github.com/quocthinh79/LaptopSellingWebsite/",
        demoLink: "https://quocthinh79.github.io/LaptopSellingWebsite/",
        knowledge: ["HTML", "CSS", "JS"],
        teamSize: 3,
        role: "Lead team",
      },
    },
    {
      href: "https://quocthinh79.github.io/SnakeGame/",
      title: "SNAKE GAME",
      avatar: `/images/icons/html.png`,
      description: "Simple snake hunting game with 7 levels",
      imageDemo: "/images/snake_game.png",
      descriptionProject: {
        key: 0,
        technology: ["HTML", "SCSS", "JQuery"],
        githubLink: "https://github.com/quocthinh79/SnakeGame",
        demoLink: "https://quocthinh79.github.io/SnakeGame/",
        knowledge: ["JQuery"],
        teamSize: 1,
      },
    },
    {
      href: "https://quocthinh79.github.io/TheBand/",
      title: "The Band",
      avatar: `/images/icons/html.png`,
      description: "HTML CSS practice site",
      imageDemo: "/images/the_band.png",
      descriptionProject: {
        key: 0,
        technology: ["HTML", "CSS"],
        githubLink: "https://github.com/quocthinh79/TheBand",
        demoLink: "https://quocthinh79.github.io/TheBand/",
        teamSize: 1,
      },
    },
  ];

  return (
    <>
      <Divider orientation="left">PERSONAL EXPERIENCE</Divider>
      <DescriptionsList dataSource={dataSourcePersonal} />
    </>
  );
}

export default PersonalExperience;
