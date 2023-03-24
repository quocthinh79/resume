import styled from "@emotion/styled";
import { ReactNode } from "react";
import { default as TimelineCustom } from "./timeline";

export interface TimelineProps {
  mode?: "left" | "alternate" | "right";
  pending?: boolean | ReactNode;
  pendingDot?: ReactNode;
  reverse?: boolean;
  items?: Items[];
}

export interface Items {
  color?: "blue" | "red" | "green" | "gray" | string;
  dot?: ReactNode;
  label?: ReactNode;
  children?: ReactNode;
  position?: "left" | "right";
}

const StyledTimeline = styled(TimelineCustom)``;

export const Timeline = ({
  items,
  mode,
  pending,
  pendingDot,
  reverse,
}: TimelineProps) => {
  const passProps = { items, mode, pending, pendingDot, reverse };
  return <StyledTimeline {...passProps} />;
};

export default Timeline;
