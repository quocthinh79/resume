import styled from "@emotion/styled";
import { default as ImageCustom } from "./image";

const StyledImage = styled(ImageCustom)``;

export interface ImageProps {
  alt?: string;
  height?: string | number;
  width?: string | number;
  preview?: boolean;
  src?: string;
}

export function Image({ alt, height, preview, src, width }: ImageProps) {
  const passProps = { alt, height, preview, src, width };
  return <StyledImage {...passProps} />;
}

export default Image;
