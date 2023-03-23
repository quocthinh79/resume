import styled from "@emotion/styled";
import { ReactNode } from "react";
import { default as ItemMetaCustom } from "./item-meta";

const StyledItemMeta = styled(ItemMetaCustom)``;

export interface ItemMetaProps {
  avatar?: ReactNode;
  description?: ReactNode;
  title?: ReactNode;
}

export function ItemMeta({ avatar, description, title }: ItemMetaProps) {
  const passProps = { avatar, description, title };
  return <StyledItemMeta {...passProps} />;
}

export default ItemMeta;
