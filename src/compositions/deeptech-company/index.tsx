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
      description: "This is description of project",
      descriptionProject: {
        key: 0,
        teamSize: 3,
        role: "Fresher",
        technology: ["Nx"],
      },
    },
    {
      href: "https://deeporium.com/",
      title: `Deeporium.com`,
      avatar: `/images/icons/html.png`,
      description: "This is description of project",
      imageDemo: "/images/deeporium.png",
      descriptionProject: {
        key: 0,
        technology: ["HTML", "CSS", "TailwindCSS"],
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
      <Divider orientation="left">
        DeepTech Technology Joint Stock Company (Oct 2022 - Apr 2023)
      </Divider>
      <DescriptionsList dataSource={dataSourceDeeptech} />
    </>
  );
}

export default DeeptechCompany;
