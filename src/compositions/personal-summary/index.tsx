import { ContainerFixed, Divider, Text, Timeline } from "@cv/components";
import { EBreakpoint } from "@cv/core";
import React from "react";

function PersonalSummary() {
  return (
    <>
      <Divider orientation="left">
        <Text strong italic upperCase>
          PERSONAL SUMMARY
        </Text>
      </Divider>
      <ContainerFixed breakpoint={EBreakpoint.MD} position="center">
        <Timeline
          items={[
            {
              children: (
                <Text>
                  I have more than six months of relevant experience with
                  Monorepo, ReactJS, and NextJS at{" "}
                  <Text strong>DeepTech Technology Joint Stock Company.</Text>
                </Text>
              ),
            },
            {
              children:
                "Expertise in ReactJS, NextJS, JavaScript, TypeScript, CSS, and SCSS technologies, as well as experience researching and implementing own projects.",
            },
            {
              children:
                "One of my professional advantages is my ability to be proactive. When the opportunity arises, I am always eager to master new skills. Develop items for end users based on my knowledge. That is exactly what I seek at work.",
            },
          ]}
        />
      </ContainerFixed>
    </>
  );
}

export default PersonalSummary;
