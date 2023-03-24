import {
  Avatar,
  DescriptionItem,
  Descriptions,
  Divider,
  Flex,
  ItemMeta,
  List,
  ListItem,
  Text,
} from "@cv/components";
import { EFlexAlign, EJustifyFlex } from "@cv/core";
import React from "react";

function AcademicQualifications() {
  const data = [
    {
      title: "NONG LAM UNIVERSITY (2019 - 2023)",
      avatar: "/images/icons/ucmuaf.png",
      description: (
        <Descriptions>
          <DescriptionItem label="GPA">3.12</DescriptionItem>
        </Descriptions>
      ),
    },
  ];
  return (
    <>
      <Divider orientation="left">Academic Qualifications</Divider>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={data}
        renderItem={({ title, avatar, description }) => (
          <>
            <ListItem key={title}>
              <ItemMeta
                avatar={<Avatar src={avatar} />}
                title={<Text>{title}</Text>}
                description={description}
              />
            </ListItem>
          </>
        )}
      />
    </>
  );
}

export default AcademicQualifications;
