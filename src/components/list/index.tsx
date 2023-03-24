import styled from "@emotion/styled";
import { ReactNode } from "react";
import { default as ListCustom } from "./list";
import ListItem from "./item/index";
import ItemMeta from "./item-meta";
import { DescriptionsListDataProps } from "@cv/compositions";

export interface ListProps {
  itemLayout?: "horizontal" | "vertical";
  size?: "default" | "large" | "small";
  dataSource?: any[];
  renderItem?: (item: any) => ReactNode;
}

const StyledList = styled(ListCustom)``;

export function List({ dataSource, itemLayout, renderItem, size }: ListProps) {
  const passProps = { dataSource, itemLayout, renderItem, size };
  return <StyledList {...passProps} />;
}

export { ListItem, ItemMeta };
export default List;
