import {
  Avatar,
  Card,
  Image,
  ItemMeta,
  Link,
  List,
  ListItem,
  Text,
} from "@cv/components";
import React from "react";
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
                  <Link href={descriptionProject?.demoLink}>
                    <Card hoverable>
                      <Image
                        preview={false}
                        alt={title}
                        src={imageDemo}
                        width={150}
                      />
                    </Card>
                  </Link>
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
