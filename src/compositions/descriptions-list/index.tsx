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
import styled from "@emotion/styled";
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
                <Flex
                  height={"100%"}
                  width={"200px"}
                  align={EFlexAlign.Center}
                  justify={EJustifyFlex.Center}
                >
                  <Link href={descriptionProject?.demoLink}>
                    {imageDemo ? (
                      <Card>
                        <Image preview={false} alt={title} src={imageDemo} />
                      </Card>
                    ) : (
                      <></>
                    )}
                  </Link>
                </Flex>
              }
            >
              <ItemMeta
                // avatar={<Avatar src={avatar} />}
                title={
                  href ? (
                    <Link href={href} upperCase>
                      {title}
                    </Link>
                  ) : (
                    <Text upperCase>{title}</Text>
                  )
                }
                description={description}
              />
              <DescriptionsProject {...descriptionProject} />
            </ListItem>
          </>
        );
      }}
    />
  );
}

export default DescriptionsList;
