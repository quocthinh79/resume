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
  upperCase?: boolean;
  lowerCase?: boolean;
}

const StyledText = styled(TextCustom)``;

export function Text({
  children,
  strong,
  italic,
  underline,
  upperCase,
  lowerCase,
}: TextProps) {
  const passProps = { strong, italic, underline };
  return (
    <StyledText
      style={
        upperCase
          ? { textTransform: "uppercase" }
          : lowerCase
          ? { textTransform: "lowercase" }
          : { textTransform: "none" }
      }
      {...passProps}
    >
      {children}
    </StyledText>
  );
}

export default Text;
