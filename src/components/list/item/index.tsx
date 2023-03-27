import styled from "@emotion/styled";
import { ReactNode } from "react";
import { default as ListItemCustom } from "./list-item";

const StyledListItem = styled(ListItemCustom)`
  .ant-list-item-meta-description {
    font-size: 16px !important;
  }
`;

export interface ListItemProps {
  children?: ReactNode;
  extra?: ReactNode;
}

export function ListItem({ children, extra }: ListItemProps) {
  const passProps = { extra };
  return <StyledListItem {...passProps}>{children}</StyledListItem>;
}

export default ListItem;
