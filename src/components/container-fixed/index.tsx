import { cx } from "@emotion/css";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { EBreakpoint, templateStringToClassName } from "../../core";

const StyledContainerFixed = styled("div")``;

export interface ContainerFixedProps {
  children?: ReactNode;
  className?: string;
  breakpoint?: EBreakpoint;
  position?: "left" | "center" | "right";
}

export function ContainerFixed({
  children,
  className,
  breakpoint = EBreakpoint.XS,
  position = "left",
}: ContainerFixedProps) {
  const passProps = {
    className: cx(
      className,
      templateStringToClassName()`
         width: 100%;
         max-width: ${(() => {
           switch (breakpoint) {
             case "xs":
               return 480;
             case "sm":
               return 576;
             case "md":
               return 768;
             case "lg":
               return 992;
             case "xl":
               return 1200;
             case "xxl":
               return 1600;
             default:
               return "md";
           }
         })()}px;
         ${(() => {
           switch (position) {
             case "center":
               return "margin: auto";
             case "right":
               return "margin-left: auto; margin-right: 0;";

             default:
               return "";
           }
         })()}
       `
    ),
  };
  return <StyledContainerFixed {...passProps}>{children}</StyledContainerFixed>;
}

export default ContainerFixed;
