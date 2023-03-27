import {
  Avatar,
  ContainerFixed,
  DescriptionItem,
  Descriptions,
  Link,
  SizeProps,
  Space,
  Title,
} from "@cv/components";
import { EAlignSpace, EBreakpoint, EDirectionType } from "@cv/core";

function PersonalInformation() {
  return (
    <ContainerFixed breakpoint={EBreakpoint.MD} position="center">
      <Space
        widthFull
        size={60}
        direction={EDirectionType.Horizontal}
        align={EAlignSpace.Start}
      >
        <Avatar shape="square" size={330} src="/images/cv-avatar.jpg" />
        <Space size={SizeProps.Large} direction={EDirectionType.Vertical}>
          <Space>
            <Title bold level={1}>
              QUOC THINH LE
            </Title>
            <Title level={3}>Front End Developer</Title>
          </Space>
          <Descriptions column={1} size="small">
            <DescriptionItem label="Birthday">May 1, 2001</DescriptionItem>
            <DescriptionItem label="Location">Ho Chi Minh City</DescriptionItem>
            <DescriptionItem label="Github">
              <Link href="https://github.com/quocthinh79">
                www.github.com/quocthinh79
              </Link>
            </DescriptionItem>
            <DescriptionItem label="Linkedin">
              <Link href="https://www.linkedin.com/in/quocthinh524">
                www.linkedin.com/in/quocthinh524
              </Link>
            </DescriptionItem>
            <DescriptionItem label="Email">
              <Link href="mailto:thinhquocle524@gmail.com">
                thinhquocle524@gmail.com
              </Link>
            </DescriptionItem>
            <DescriptionItem label="Phone">
              <Link href="tel:+84982625202">+84982625202</Link>
            </DescriptionItem>
            <DescriptionItem label="Facebook">
              <Link href="https://www.facebook.com/unlocker0808">
                www.facebook.com/unlocker0808
              </Link>
            </DescriptionItem>
          </Descriptions>
        </Space>
      </Space>
    </ContainerFixed>
  );
}

export default PersonalInformation;
