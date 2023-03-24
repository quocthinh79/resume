import {
  Avatar,
  Card,
  Col,
  ContainerFixed,
  DescriptionItem,
  Descriptions,
  Divider,
  Link,
  Row,
  Space,
  Text,
  Title,
} from "@cv/components";
import { DescriptionsList, DescriptionsListDataProps } from "@cv/compositions";
import { EBreakpoint, EDirectionType } from "@cv/core";
import { Inter } from "next/font/google";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const dataSourcePersonal: DescriptionsListDataProps[] = [
    {
      href: "https://demo-e-commerce-laptop.netlify.app/",
      title: `Laptop Selling Website 2`,
      avatar: `/images/icons/reactjs.png`,
      description: "This is description of project",
      imageDemo: "/images/laptop-selling-website-1.png",
      descriptionProject: {
        key: 0,
        technology: ["ReactJS", "Ant Design", "Emotion Styled", "Typescript"],
        githubLink: "https://github.com/quocthinh79/ChuyenDeWeb",
        demoLink: "https://demo-e-commerce-laptop.netlify.app/",
      },
    },
    {
      href: "https://quoc-thinh-resume.netlify.app/",
      title: `My Resume`,
      avatar: `/images/icons/nextjs.png`,
      description: "This is description of project",
      imageDemo: "/images/laptop_selling_website.png",
      descriptionProject: {
        key: 0,
        technology: ["NextJS", "Ant Design", "Typescript"],
        githubLink: "https://github.com/quocthinh79/resume",
        demoLink: "https://quoc-thinh-resume.netlify.app/",
      },
    },
    {
      href: "https://movie-project-bdb9.vercel.app/",
      title: `Movie web`,
      avatar: `/images/icons/reactjs.png`,
      description: "This is description of project",
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
      },
    },
    {
      href: "https://deckofcard-h0mpz14rb-quocthinh79.vercel.app/",
      title: `CARD GAME`,
      avatar: `/images/icons/reactjs.png`,
      description: "This is description of project",
      imageDemo: "/images/deckofcard.png",
      descriptionProject: {
        key: 0,
        technology: ["ReactJS", "Axios", "SCSS"],
        githubLink: "https://github.com/quocthinh79/deckofcard",
        demoLink: "https://deckofcard-h0mpz14rb-quocthinh79.vercel.app/",
      },
    },
    {
      href: "https://todo-list-beige-delta.vercel.app/",
      title: `TO DO LIST`,
      avatar: `/images/icons/reactjs.png`,
      description: "This is description of project",
      imageDemo: "/images/todo-list.png",
      descriptionProject: {
        key: 0,
        technology: ["ReactJS", "Bootstrap"],
        githubLink: "https://github.com/quocthinh79/Todo_List",
        demoLink: "https://todo-list-beige-delta.vercel.app/",
      },
    },
    {
      href: "https://quocthinh79.github.io/PhotoAppReduxBasic/#/photos",
      title: "PHOTO APP",
      avatar: `/images/icons/reactjs.png`,
      description: "This is description of project",
      imageDemo: "/images/photo_app.png",
      descriptionProject: {
        key: 0,
        technology: ["ReactJS", "Redux Tool Kit"],
        githubLink: "https://github.com/quocthinh79/PhotoAppReduxBasic",
        demoLink: "https://quocthinh79.github.io/PhotoAppReduxBasic/#/photos",
      },
    },
    {
      href: "https://newsappangular-815ac.web.app/",
      title: "NEWS WEBSITE",
      avatar: `/images/icons/angular.png`,
      description: "This is description of project",
      imageDemo: "/images/laptop_selling_website.png",
      descriptionProject: {
        key: 0,
        technology: ["Angular", "RXJS", "Bootstrap"],
        githubLink: "https://github.com/quocthinh79/NewsApp_Angular",
        demoLink: "https://newsappangular-815ac.web.app/",
      },
    },
    {
      href: "https://github.com/quocthinh79/JSP_Servlet_LaptopSellingWebsite",
      title: "ECOMMERCE WEBSITE",
      avatar: `/images/icons/java.png`,
      description: "This is description of project",
      descriptionProject: {
        key: 0,
        technology: ["JSP - Servlet", "HTML", "CSS", "Ajax", "JQuery"],
        githubLink:
          "https://github.com/quocthinh79/JSP_Servlet_LaptopSellingWebsite",
      },
    },
    {
      href: "https://quocthinh79.github.io/LaptopSellingWebsite/",
      title: "ECOMMERCE WEBSITE",
      avatar: `/images/icons/html.png`,
      description: "This is description of project",
      imageDemo: "/images/laptop_selling_website.png",
      descriptionProject: {
        key: 0,
        technology: ["HTML", "CSS", "JS"],
        githubLink: "https://github.com/quocthinh79/LaptopSellingWebsite/",
        demoLink: "https://quocthinh79.github.io/LaptopSellingWebsite/",
      },
    },
    {
      href: "https://quocthinh79.github.io/SnakeGame/",
      title: "SNAKE GAME",
      avatar: `/images/icons/html.png`,
      description: "This is description of project",
      imageDemo: "/images/snake_game.png",
      descriptionProject: {
        key: 0,
        technology: ["HTML", "SCSS", "JQuery"],
        githubLink: "https://github.com/quocthinh79/SnakeGame",
        demoLink: "https://quocthinh79.github.io/SnakeGame/",
      },
    },
    {
      href: "https://quocthinh79.github.io/TheBand/",
      title: "The Band",
      avatar: `/images/icons/html.png`,
      description: "This is description of project",
      imageDemo: "/images/the_band.png",
      descriptionProject: {
        key: 0,
        technology: ["HTML", "SCSS"],
        githubLink: "https://github.com/quocthinh79/TheBand",
        demoLink: "https://quocthinh79.github.io/TheBand/",
      },
    },
  ];

  const dataSourceDeeptech: DescriptionsListDataProps[] = [
    {
      title: `Monorepo`,
      avatar: `/images/icons/nx-dev.png`,
      description: "This is description of project",
      descriptionProject: {
        key: 0,
        teamSize: 3,
        role: "Fresher",
      },
    },
    {
      href: "https://deeporium.com/",
      title: `Deeporium.com`,
      avatar: `/images/icons/reactjs.png`,
      description: "This is description of project",
      imageDemo: "/images/deeporium.png",
      descriptionProject: {
        key: 0,
        technology: ["ReactJS", "TailwindCSS"],
        demoLink: "https://deeporium.com/",
        teamSize: 1,
      },
    },
    {
      href: "https://www.deeptech.vn/",
      title: `Deeptech.vn`,
      avatar: `/images/icons/reactjs.png`,
      description: "This is description of project",
      imageDemo: "/images/deeptech.png",
      descriptionProject: {
        key: 0,
        technology: ["ReactJS", "Bootstrap", "GSAP"],
        demoLink: "https://www.deeptech.vn/",
        teamSize: 2,
        role: "Member",
      },
    },
  ];

  return (
    <>
      <Head>
        <title>Le Quoc Thinh - Resume</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContainerFixed position="center" breakpoint={EBreakpoint.XL}>
        <Card>
          <Row>
            <Col span={10}>
              <Space widthFull direction={EDirectionType.Horizontal}>
                <Avatar size={150} src="/images/cv-avatar.jpg" />
                <Space>
                  <Title level={1}>Le Quoc Thinh</Title>
                  <Title level={3}>Front End Developer</Title>
                  <Text>1/5/2001</Text>
                  <Text>Ho Chi Minh City</Text>
                </Space>
              </Space>
            </Col>
            <Col span={7} offset={7}>
              <Descriptions column={1}>
                <DescriptionItem label="Github">
                  <Link href="https://github.com/quocthinh79">
                    https://github.com/quocthinh79
                  </Link>
                </DescriptionItem>
                <DescriptionItem label="Linkedin">
                  <Link href="https://www.linkedin.com/in/quocthinh524">
                    https://www.linkedin.com/in/quocthinh524
                  </Link>
                </DescriptionItem>
                <DescriptionItem label="Email">
                  <Link href="mailto:thinhquocle524@gmail.com">
                    thinhquocle524@gmail.com
                  </Link>
                </DescriptionItem>
                <DescriptionItem label="Phone">
                  <Link href="tel:+84982625202">+84982625202</Link>
                </DescriptionItem>
                <DescriptionItem label="Facebook">
                  <Link href="https://www.facebook.com/unlocker0808">
                    https://www.facebook.com/unlocker0808
                  </Link>
                </DescriptionItem>
              </Descriptions>
            </Col>
          </Row>
          <Divider orientation="left">PERSONAL SUMMARY</Divider>
          <Divider orientation="left">PERSONAL EXPERIENCE</Divider>
          <DescriptionsList dataSource={dataSourcePersonal} />
          <Divider orientation="left">
            DeepTech Technology Joint Stock Company (Oct 2022 - Apr 2023)
          </Divider>
          <DescriptionsList dataSource={dataSourceDeeptech} />
        </Card>
      </ContainerFixed>
    </>
  );
}
