import { Divider, Text } from "@cv/components";
import React from "react";
import DescriptionsList, {
  DescriptionsListDataProps,
} from "../descriptions-list";

export function DeeptechCompany() {
  const dataSourceDeeptech: DescriptionsListDataProps[] = [
    {
      title: `Monorepo`,
      avatar: `/images/icons/nx-dev.png`,
      description:
        "Working with Monorepo front end architecture for six months, fundamental structure and configuration understanding.",
      imageDemo: "/images/nx-dev.jpg",
      descriptionProject: {
        key: 0,
        technology: ["Nx"],
        knowledge: [
          "Reusable and extensible code management",
          "Architecture of monorepo",
          "TypeScript",
          "Ant Design",
          "Working with Golang back-end",
        ],
      },
    },
    {
      href: "https://deeporium.com/",
      title: `Deeporium.com`,
      avatar: `/images/icons/html.png`,
      description:
        "With TailwindCSS, create a static website that represents the company. TailwindCSS is used to create a responsive website.",
      imageDemo: "/images/deeporium.jpg",
      descriptionProject: {
        key: 0,
        technology: ["HTML", "CSS", "TailwindCSS"],
        knowledge: [
          "Working with Figma",
          "Improve performance of landing page",
          "Responsive with TailwindCSS",
        ],
        demoLink: "https://deeporium.com/",
      },
    },
    {
      href: "https://www.deeptech.vn/",
      title: `Deeptech.vn`,
      avatar: `/images/icons/html.png`,
      description:
        "Create a static website using Bootstrap and seek animation assistance from an experienced user. The fundamentals of using the GSAP library.",
      imageDemo: "/images/deeptech.jpg",
      descriptionProject: {
        key: 0,
        technology: ["HTML", "CSS", "SCSS", "Bootstrap", "GSAP"],
        knowledge: ["Working with Figma", "Use the GSAP library"],
        demoLink: "https://www.deeptech.vn/",
      },
    },
  ];

  return (
    <>
      <Divider orientation="left">
        <Text strong italic upperCase>
          DeepTech Technology Joint Stock Company (Oct 2022 - Apr 2023)
        </Text>
      </Divider>
      <DescriptionsList dataSource={dataSourceDeeptech} />
    </>
  );
}

export default DeeptechCompany;
