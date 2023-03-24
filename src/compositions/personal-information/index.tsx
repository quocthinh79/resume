import { Avatar, Space, Text, Title } from "@cv/components";
import { EDirectionType } from "@cv/core";
import React from "react";

function PersonalInformation() {
  return (
    <Space widthFull direction={EDirectionType.Horizontal}>
      <Avatar size={150} src="/images/cv-avatar.jpg" />
      <Space>
        <Title level={1}>Le Quoc Thinh</Title>
        <Title level={3}>Front End Developer</Title>
        <Text>1/5/2001</Text>
        <Text>Ho Chi Minh City</Text>
      </Space>
    </Space>
  );
}

export default PersonalInformation;
