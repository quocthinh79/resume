import styled from "@emotion/styled";
import React from "react";
import { ReactNode } from "react";
import { default as TextCustom } from "./text";

export interface TextProps {
  children?: ReactNode;
  strong?: boolean;
  italic?: boolean;
  type?: "secondary" | "success" | "warning" | "danger";
  underline?: boolean;
}

const StyledText = styled(TextCustom)``;

export function Text({ children, strong, italic, underline }: TextProps) {
  const passProps = { strong, italic, underline };
  return <StyledText {...passProps}>{children}</StyledText>;
}

export default Text;
