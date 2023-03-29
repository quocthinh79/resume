import styled from "@emotion/styled";
import { default as ImageCustom } from "./image";

const StyledImage = styled(ImageCustom)``;

export interface ImageProps {
  alt?: string;
  height?: string | number;
  width?: string | number;
  preview?: boolean;
  src?: string;
  loading?: "lazy" | "eager";
}

export function Image({
  alt,
  height,
  preview,
  src,
  width,
  loading = "lazy",
}: ImageProps) {
  const passProps = { alt, height, preview, src, width, loading };
  return <StyledImage {...passProps} />;
}

export default Image;
