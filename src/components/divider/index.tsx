import { default as DividerCustom } from "./divider";
import React from "react";
import styled from "@emotion/styled";
import { ReactNode } from "react";

export interface DividerProps {
  children?: ReactNode;
  dashed?: boolean;
  orientation?: "left" | "right" | "center";
  plain?: boolean;
  type?: "horizontal" | "vertical";
}

const StyledDivider = styled(DividerCustom)`
  margin: 28px 0 !important;
  ::after {
    width: 0 !important;
  }
`;

export function Divider({
  children,
  dashed,
  orientation,
  plain,
  type,
}: DividerProps) {
  const passProps = { dashed, orientation, plain, type };
  return <StyledDivider {...passProps}>{children}</StyledDivider>;
}

export default Divider;
