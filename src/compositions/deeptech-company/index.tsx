import { Divider } from "@cv/components";
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
        "Be approached and work with monorepo architecture in six month",
      descriptionProject: {
        key: 0,
        teamSize: 3,
        role: "Fresher",
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
        teamSize: 1,
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
        teamSize: 2,
        role: "Member",
      },
    },
  ];

  return (
    <>
      <Divider orientation="left">
        DeepTech Technology Joint Stock Company (Oct 2022 - Apr 2023)
      </Divider>
      <DescriptionsList dataSource={dataSourceDeeptech} />
    </>
  );
}

export default DeeptechCompany;
