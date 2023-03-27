import { arrayToString } from "@cv/core";
import { DescriptionItem, Descriptions, Link, Text } from "@cv/components";
import React, { Key } from "react";

export interface DescriptionsProjectProps {
  key?: string | number | Key;
  technology?: string[];
  githubLink?: string;
  githubTitle?: string;
  demoLink?: string;
  demoTitle?: string;
  role?: string;
  teamSize?: number;
  knowledge?: string[];
}

export function DescriptionsProject({
  demoLink,
  demoTitle,
  githubLink,
  githubTitle,
  technology,
  key,
  role,
  teamSize,
  knowledge,
}: DescriptionsProjectProps) {
  const _technology = arrayToString(technology);
  const _knowledge = arrayToString(knowledge);

  return (
    <Descriptions key={key} column={1}>
      {technology && (
        <DescriptionItem label="Technology">{_technology}</DescriptionItem>
      )}
      {role && <DescriptionItem label="Role">{role}</DescriptionItem>}
      {teamSize && (
        <DescriptionItem label="Team size">{teamSize}</DescriptionItem>
      )}
      {knowledge && (
        <DescriptionItem label="Knowledge">{_knowledge}</DescriptionItem>
      )}
      {(demoLink || demoTitle) && (
        <DescriptionItem label="Demo">
          {demoLink ? (
            <Link href={demoLink}>{demoLink}</Link>
          ) : (
            <Text>{demoTitle}</Text>
          )}
        </DescriptionItem>
      )}
      {(githubLink || githubTitle) && (
        <DescriptionItem label="Github">
          {githubLink ? (
            <Link href={githubLink}>{githubLink}</Link>
          ) : (
            <Text>{githubTitle}</Text>
          )}
        </DescriptionItem>
      )}
    </Descriptions>
  );
}

export default DescriptionsProject;
