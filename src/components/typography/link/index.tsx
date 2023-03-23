import { default as LinkCustom } from "./link";
import styled from "@emotion/styled";
import { ReactNode } from "react";

export interface LinkProps {
  children?: ReactNode;
  href?: string;
  target?: string;
}

const StyledLink = styled(LinkCustom)``;

export function Link({ children, href, target = "_blank" }: LinkProps) {
  const passProps = { href, target };
  return <StyledLink {...passProps}>{children}</StyledLink>;
}

export default Link;
