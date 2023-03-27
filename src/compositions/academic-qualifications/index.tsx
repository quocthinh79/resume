import {
  ContainerFixed,
  DescriptionItem,
  Descriptions,
  Divider,
  Text,
} from "@cv/components";
import { EBreakpoint } from "@cv/core";

export function AcademicQualifications() {
  return (
    <>
      <Divider orientation="left">
        <Text strong italic upperCase>
          ACADEMIC QUALIFICATIONS
        </Text>
      </Divider>
      <ContainerFixed breakpoint={EBreakpoint.MD} position="center">
        <Descriptions size="small" title="NONG LAM UNIVERSITY (2019 - 2023)">
          <DescriptionItem label="GPA">3.12</DescriptionItem>
        </Descriptions>
      </ContainerFixed>
    </>
  );
}

export default AcademicQualifications;
