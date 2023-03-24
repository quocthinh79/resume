import { default as DescriptionsCustom } from "./description";
import styled from "@emotion/styled";
import React from "react";
import { CSSProperties } from "react";
import { ReactNode } from "react";
import DescriptionItem from "./item";

const StyledDescription = styled(DescriptionsCustom)``;

export interface DescriptionsProps {
  contentStyle?: CSSProperties;
  labelStyle?: CSSProperties;
  layout?: "horizontal" | "vertical";
  title?: ReactNode;
  size?: "default" | "middle" | "small";
  children?: ReactNode;
  column?: number;
}

export function Descriptions({
  children,
  contentStyle,
  labelStyle,
  layout,
  size = "small",
  title,
  column,
}: DescriptionsProps) {
  const passProps = { contentStyle, labelStyle, layout, size, title, column };
  return <StyledDescription {...passProps}>{children}</StyledDescription>;
}

export { DescriptionItem };
export default Descriptions;
