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
              "I have more than six months of practical experience working with Monorepo, ReactJS, NextJS at DeepTech Technology Joint Stock Company",
          },
          {
            children:
              "Experience and knowledge in learning and implementing personal projects using ReactJS, NextJS, JavaScript, TypeScript, CSS, SCSS technologies.",
          },
        ]}
      />
    </>
  );
}

export default PersonalSummary;
