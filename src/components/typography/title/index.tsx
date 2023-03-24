import { default as TitleCustom } from "./title";
import styled from "@emotion/styled";
import React from "react";
import { ReactNode } from "react";

const StyledTitle = styled(TitleCustom)`
  margin: 0;
  margin-bottom: 0 !important;
`;

export interface TitleProps {
  children?: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5;
  italic?: boolean;
  type?: "secondary" | "success" | "warning" | "danger";
  underline?: boolean;
}

export function Title({
  children,
  italic,
  level,
  type,
  underline,
}: TitleProps) {
  const passProps = { italic, level, type, underline };
  return <StyledTitle {...passProps}>{children}</StyledTitle>;
}

export default Title;
