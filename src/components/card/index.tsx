import styled from "@emotion/styled";
import { CSSProperties, ReactNode } from "react";
import { default as CardCustom } from "./card";

const StyledCard = styled(CardCustom)``;

export interface CardProps {
  children?: ReactNode;
  hoverable?: boolean;
  cover?: ReactNode;
  style?: CSSProperties;
}

export function Card({ children, hoverable, cover, style }: CardProps) {
  const passProps = { hoverable, cover, style };
  return <StyledCard {...passProps}>{children}</StyledCard>;
}

export default Card;
