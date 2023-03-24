import { Divider, Timeline } from "@cv/components";
import React from "react";

function PersonalSummary() {
  return (
    <>
      <Divider orientation="left">PERSONAL SUMMARY</Divider>
      <Timeline
        items={[
          {
            children:
              "More than six - month experience working as front-end developer with ReactJS in DeepTech",
          },
          {
            children:
              "Experience working with web development technologies, including: ReactJS, NextJS, Java",
          },
          {
            children:
              "Knowledge of HTML5/CSS3/TailwindCSS/JavaScript and Typescript",
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
            children: "Experience with front-end development (ReactJS)",
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

export default PersonalSummary;
