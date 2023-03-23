import { default as DescriptionItemCustom } from "./description-item";
import styled from "@emotion/styled";
import React from "react";
import { CSSProperties } from "react";
import { ReactNode } from "react";

export interface DescriptionItemProps {
  contentStyle?: CSSProperties;
  label?: ReactNode;
  labelStyle?: CSSProperties;
  span?: number;
  children?: ReactNode;
}

const StyledDescriptionItem = styled(DescriptionItemCustom)``;

export function DescriptionItem({
  span,
  children,
  contentStyle,
  label,
  labelStyle,
}: DescriptionItemProps) {
  const passProps = { span, contentStyle, label, labelStyle };
  return (
    <StyledDescriptionItem {...passProps}>{children}</StyledDescriptionItem>
  );
}

export default DescriptionItem;
