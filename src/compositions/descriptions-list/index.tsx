import {
  Avatar,
  Card,
  Flex,
  Image,
  ItemMeta,
  Link,
  List,
  ListItem,
  Text,
} from "@cv/components";
import { EJustifyFlex } from "@cv/core";
import React from "react";
import EFlexAlign from "src/core/types/enum/EAlignFlex";
import DescriptionsProject, {
  DescriptionsProjectProps,
} from "../descriptions-project";

export interface DescriptionsListDataProps {
  title?: string;
  avatar?: string;
  href?: string;
  description?: string;
  imageDemo?: string;
  descriptionProject?: DescriptionsProjectProps;
}

export interface DescriptionListProps {
  dataSource: DescriptionsListDataProps[];
}

export function DescriptionsList({ dataSource }: DescriptionListProps) {
  return (
    <List
      itemLayout="vertical"
      size="large"
      dataSource={dataSource}
      renderItem={({
        avatar,
        description,
        descriptionProject,
        imageDemo,
        href,
        title,
      }: DescriptionsListDataProps) => {
        return (
          <>
            <ListItem
              key={title}
              extra={
                imageDemo ? (
                  <Flex
                    height={"100%"}
                    width={"150px"}
                    align={EFlexAlign.Center}
                    justify={EJustifyFlex.Center}
                  >
                    <Link href={descriptionProject?.demoLink}>
                      <Image preview={false} alt={title} src={imageDemo} />
                    </Link>
                  </Flex>
                ) : (
                  <></>
                )
              }
            >
              <ItemMeta
                avatar={<Avatar src={avatar} />}
                title={
                  href ? <Link href={href}>{title}</Link> : <Text>{title}</Text>
                }
                description={description}
              />
              <DescriptionsProject
                key={descriptionProject?.key || ""}
                technology={descriptionProject?.technology}
                githubLink={descriptionProject?.githubLink}
                githubTitle={descriptionProject?.githubTitle}
                demoLink={descriptionProject?.demoLink}
                demoTitle={descriptionProject?.demoTitle}
                teamSize={descriptionProject?.teamSize}
                role={descriptionProject?.role}
              />
            </ListItem>
          </>
        );
      }}
    />
  );
}

export default DescriptionsList;
