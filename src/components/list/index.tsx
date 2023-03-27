import styled from "@emotion/styled";
import { ReactNode } from "react";
import ItemMeta from "./item-meta";
import ListItem from "./item/index";
import { default as ListCustom } from "./list";

export interface ListProps {
  itemLayout?: "horizontal" | "vertical";
  size?: "default" | "large" | "small";
  dataSource?: any[];
  renderItem?: (item: any) => ReactNode;
}

const StyledList = styled(ListCustom)`
  .ant-list-item {
    flex-direction: row-reverse;
    gap: 3rem;
  }
`;

export function List({ dataSource, itemLayout, renderItem, size }: ListProps) {
  const passProps = { dataSource, itemLayout, renderItem, size };
  return <StyledList {...passProps} />;
}

export { ListItem, ItemMeta };
export default List;
