import { Divider, Timeline } from "@cv/components";
import React from "react";

function SpecializedSkills() {
  return (
    <>
      <Divider orientation="left">Specialized Skills</Divider>
      <Timeline
        items={[
          {
            children:
              "Experience working with web development technologies, including: ReactJS, NextJS, Java",
          },
          {
            children: "Knowledge of HTML5/CSS3/JavaScript and Typescript",
          },
          {
            children: "Knowledge of CSS framework: TailwindCSS",
          },
          {
            children: "Knowledge of design system: Ant Design",
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
            children:
              "Knowledge working with database system: MySQL, SQL Server",
          },
        ]}
      />
    </>
  );
}

export default SpecializedSkills;
