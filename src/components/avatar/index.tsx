import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import { default as AvatarCustom } from "./avatar";

export interface AvatarProps {
  children?: ReactNode;
  size?:
    | number
    | "large"
    | "small"
    | "default"
    | {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
        xxl: number;
      };
  src?: string | ReactNode;
}

const StyledAvatar = styled(AvatarCustom)``;

export function Avatar({ children, size, src }: AvatarProps) {
  const passProps = { size, src };
  return <StyledAvatar {...passProps}>{children}</StyledAvatar>;
}

export default Avatar;
