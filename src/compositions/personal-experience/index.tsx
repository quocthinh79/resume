import { ContainerFixed, Divider, Text } from "@cv/components";
import { EBreakpoint } from "@cv/core";
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
        "Create an e-commerce site with ReactJS and TypeScript. Manage reusable code and practice custom hooks",
      imageDemo: "/images/laptop-selling-website-1.jpg",
      descriptionProject: {
        key: 0,
        technology: ["ReactJS", "Ant Design", "Emotion Styled", "Typescript"],
        githubLink: "https://github.com/quocthinh79/ChuyenDeWeb",
        demoLink: "https://demo-e-commerce-laptop.netlify.app/",
        knowledge: ["TypeScript", "Ant Design", "Customize hooks"],
      },
    },
    {
      href: "https://quoc-thinh-resume.netlify.app/",
      title: `My Resume`,
      avatar: `/images/icons/nextjs.png`,
      description:
        "NextJS fundamental training and Ant Design skills practice.",
      imageDemo: "/images/resume.jpg",
      descriptionProject: {
        key: 0,
        technology: ["NextJS", "Ant Design", "Typescript"],
        githubLink: "https://github.com/quocthinh79/resume",
        demoLink: "https://quoc-thinh-resume.netlify.app/",
        knowledge: ["NextJS", "Ant Design", "SEO"],
      },
    },
    {
      href: "https://cv-quocthinh.vercel.app/",
      title: `My old resume`,
      avatar: `/images/icons/html.png`,
      description: "Develop and practice your HTML and CSS abilities.",
      imageDemo: "/images/old-resume.jpg",
      descriptionProject: {
        key: 0,
        technology: ["HTML", "CSS", "SCSS"],
        githubLink: "https://github.com/quocthinh79/CV",
        demoLink: "https://cv-quocthinh.vercel.app/",
        knowledge: ["Improve CSS skill"],
      },
    },
    {
      href: "https://movie-project-bdb9.vercel.app/",
      title: `Movie web`,
      avatar: `/images/icons/reactjs.png`,
      description: "Using themoviedb's given API knowledge",
      imageDemo: "/images/movie-project.jpg",
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
      },
    },
    {
      href: "https://deckofcard-h0mpz14rb-quocthinh79.vercel.app/",
      title: `CARD GAME`,
      avatar: `/images/icons/reactjs.png`,
      description:
        "Create a small game with ReactJS while honing my reasoning abilities and leveraging API",
      imageDemo: "/images/deckofcard.jpg",
      descriptionProject: {
        key: 0,
        technology: ["ReactJS", "Axios", "SCSS"],
        githubLink: "https://github.com/quocthinh79/deckofcard",
        demoLink: "https://deckofcard-h0mpz14rb-quocthinh79.vercel.app/",
        knowledge: ["API calling", "Improve logic"],
      },
    },
    {
      href: "https://todo-list-beige-delta.vercel.app/",
      title: `TO DO LIST`,
      avatar: `/images/icons/reactjs.png`,
      description:
        "To-do lists are straightforward but paired with data structures and sorting algorithms. using data structures and algorithms to address issues in the real world",
      imageDemo: "/images/todo-list.jpg",
      descriptionProject: {
        key: 0,
        technology: ["ReactJS", "Bootstrap"],
        githubLink: "https://github.com/quocthinh79/Todo_List",
        demoLink: "https://todo-list-beige-delta.vercel.app/",
        knowledge: ["Apply data structures and algorithms"],
      },
    },
    {
      href: "https://quocthinh79.github.io/PhotoAppReduxBasic/#/photos",
      title: "PHOTO APP",
      avatar: `/images/icons/reactjs.png`,
      description: "Simple website for Redux practice",
      imageDemo: "/images/photo_app.jpg",
      descriptionProject: {
        key: 0,
        technology: ["ReactJS", "Redux Tool Kit"],
        githubLink: "https://github.com/quocthinh79/PhotoAppReduxBasic",
        demoLink: "https://quocthinh79.github.io/PhotoAppReduxBasic/#/photos",
        knowledge: ["Redux", "Redux tool kit"],
      },
    },
    {
      href: "https://newsappangular-815ac.web.app/",
      title: "NEWS WEBSITE",
      avatar: `/images/icons/angular.png`,
      description:
        "Implement newspaper reading website with RSS provided from website",
      imageDemo: "/images/news-website.jpg",
      descriptionProject: {
        key: 0,
        technology: ["Angular", "RXJS", "Bootstrap"],
        githubLink: "https://github.com/quocthinh79/NewsApp_Angular",
        demoLink: "https://newsappangular-815ac.web.app/",
        knowledge: ["Angular", "API calling"],
      },
    },
    {
      href: "https://github.com/quocthinh79/JSP_Servlet_LaptopSellingWebsite",
      title: "E-COMMERCE LAPTOP WEBSITE",
      avatar: `/images/icons/java.png`,
      description: "E-commerce website implemented by JSP Servlet",
      imageDemo: "/images/laptop_selling_website.jpg",
      descriptionProject: {
        key: 0,
        technology: ["JSP - Servlet", "HTML", "CSS", "Ajax", "JQuery"],
        githubLink:
          "https://github.com/quocthinh79/JSP_Servlet_LaptopSellingWebsite",
        knowledge: ["Ajax", "JSP", "Servlet", "MySQL"],
      },
    },
    {
      href: "https://quocthinh79.github.io/LaptopSellingWebsite/",
      title: "E-COMMERCE LAPTOP WEBSITE",
      avatar: `/images/icons/html.png`,
      description: "Implement e-commerce website with HTML CSS JS",
      imageDemo: "/images/laptop_selling_website.jpg",
      descriptionProject: {
        key: 0,
        technology: ["HTML", "CSS", "JS"],
        githubLink: "https://github.com/quocthinh79/LaptopSellingWebsite/",
        demoLink: "https://quocthinh79.github.io/LaptopSellingWebsite/",
        knowledge: ["HTML", "CSS", "JS"],
      },
    },
    {
      href: "https://quocthinh79.github.io/SnakeGame/",
      title: "SNAKE GAME",
      avatar: `/images/icons/html.png`,
      description:
        "A straightforward 7-level snake-hunting game. Boost your knowledge of logic and JQuery.",
      imageDemo: "/images/snake_game.jpg",
      descriptionProject: {
        key: 0,
        technology: ["HTML", "SCSS", "JQuery"],
        githubLink: "https://github.com/quocthinh79/SnakeGame",
        demoLink: "https://quocthinh79.github.io/SnakeGame/",
        knowledge: ["JQuery"],
      },
    },
    {
      href: "https://quocthinh79.github.io/TheBand/",
      title: "The Band",
      avatar: `/images/icons/html.png`,
      description: "HTML CSS practice site",
      imageDemo: "/images/the_band.jpg",
      descriptionProject: {
        key: 0,
        technology: ["HTML", "CSS"],
        githubLink: "https://github.com/quocthinh79/TheBand",
        demoLink: "https://quocthinh79.github.io/TheBand/",
      },
    },
  ];

  return (
    <>
      <Divider orientation="left">
        <Text strong italic upperCase>
          personal experience
        </Text>
      </Divider>
      <DescriptionsList dataSource={dataSourcePersonal} />
    </>
  );
}

export default PersonalExperience;
