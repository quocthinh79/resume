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
        "In six months, be contacted and work using monorepo architecture.",
      imageDemo: "/images/nx-dev.png",
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
        "One of the static websites about DeepTech Technology Joint Stock Company",
      imageDemo: "/images/deeporium.png",
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
        "One of the static websites about DeepTech Technology Joint Stock Company",
      imageDemo: "/images/deeptech.png",
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
