import {
  ContainerFixed,
  DescriptionItem,
  Descriptions,
  Divider,
  Text,
  Timeline,
} from "@cv/components";
import { EBreakpoint } from "@cv/core";
import React from "react";

function SpecializedSkills() {
  return (
    <>
      <Divider orientation="left">
        <Text strong italic upperCase>
          Specialized Skills
        </Text>
      </Divider>
      <ContainerFixed breakpoint={EBreakpoint.MD} position="center">
        <Timeline
          items={[
            {
              children: "Web development technologies: ReactJS, NextJS, Java",
            },
            {
              children: "HTML5/CSS3/JavaScript and Typescript",
            },
            {
              children: "CSS framework: TailwindCSS",
            },
            {
              children: "Design system: Ant Design",
            },
            {
              children:
                "Using IDE: Visual Studio Code, IntelliJ, WebStorm, Eclipse",
            },
            {
              children:
                "Project management tools: Trello, Notion, Git GUI (GitKraken Gitfork, TortoiseGit), GitHub, GitLab",
            },
            {
              children: "Database system: MySQL, SQL Server",
            },
          ]}
        />
      </ContainerFixed>
    </>
  );
}

export default SpecializedSkills;
