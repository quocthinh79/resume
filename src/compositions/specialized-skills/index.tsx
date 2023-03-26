import { Divider, Timeline } from "@cv/components";
import React from "react";

function SpecializedSkills() {
  return (
    <>
      <Divider orientation="left">Specialized Skills</Divider>
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
    </>
  );
}

export default SpecializedSkills;
