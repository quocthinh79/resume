import { default as LinkCustom } from "./link";
import styled from "@emotion/styled";
import { ReactNode } from "react";

export interface LinkProps {
  children?: ReactNode;
  href?: string;
  target?: string;
  upperCase?: boolean;
  lowerCase?: boolean;
}

const StyledLink = styled(LinkCustom)``;

export function Link({
  children,
  href,
  target = "_blank",
  upperCase,
  lowerCase,
}: LinkProps) {
  const passProps = { href, target };
  return (
    <StyledLink
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
    </StyledLink>
  );
}

export default Link;
