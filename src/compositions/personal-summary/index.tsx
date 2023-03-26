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
              "I want to be a website developer specializing in front end",
          },
          {
            children:
              "I have learnt about these things: HTML, CSS, SCSS, JavaScript, TypeScript, ReactJS, NextJS, MySQL, SQL Server",
          },
          {
            children:
              "Strive to be a mid-level web developer with ReactJS in the next years",
          },
        ]}
      />
    </>
  );
}

export default PersonalSummary;
