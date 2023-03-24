import {
  Avatar,
  DescriptionItem,
  Descriptions,
  SizeProps,
  Space,
  Text,
  Title,
} from "@cv/components";
import { EDirectionType, templateStringToClassName } from "@cv/core";
import React from "react";
import AcademicQualifications from "../academic-qualifications";

function PersonalInformation() {
  return (
    <Space
      widthFull
      size={SizeProps.Large}
      direction={EDirectionType.Horizontal}
    >
      <Avatar size={150} src="/images/cv-avatar.jpg" />
      <Space>
        <Title level={1}>Le Quoc Thinh</Title>
        <Title level={3}>Front End Developer</Title>
        <Descriptions size="small">
          <DescriptionItem label="Birthday">1/5/2001</DescriptionItem>
        </Descriptions>
        <Descriptions size="small">
          <DescriptionItem label="Location">Ho Chi Minh City</DescriptionItem>
        </Descriptions>
        <Descriptions size="small" title="NONG LAM UNIVERSITY (2019 - 2023)">
          <DescriptionItem label="GPA">3.12</DescriptionItem>
        </Descriptions>
      </Space>
    </Space>
  );
}

export default PersonalInformation;
