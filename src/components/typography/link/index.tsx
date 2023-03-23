import { default as LinkCustom } from "./link";
import styled from "@emotion/styled";
import { ReactNode } from "react";

export interface LinkProps {
  children?: ReactNode;
  href?: string;
}

const StyledLink = styled(LinkCustom)``;

export function Link({ children, href }: LinkProps) {
  const passProps = { href };
  return <StyledLink {...passProps}>{children}</StyledLink>;
}

export default Link;
