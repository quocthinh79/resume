import { Divider, Timeline } from "@cv/components";
import React from "react";

function SoftSkills() {
  return (
    <>
      <Divider orientation="left">Soft Skills</Divider>
      <Timeline
        items={[
          {
            children: "Communication",
          },
          {
            children: "Be proactive at work",
          },
          {
            children: "Creative",
          },
          {
            children: "Self learning",
          },
          {
            children: "Team work",
          },
        ]}
      />
    </>
  );
}

export default SoftSkills;
