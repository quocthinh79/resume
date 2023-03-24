import { DescriptionItem, Descriptions, Link } from "@cv/components";
import React from "react";

export function ContactWithMe() {
  return (
    <Descriptions column={1}>
      <DescriptionItem label="Github">
        <Link href="https://github.com/quocthinh79">
          https://github.com/quocthinh79
        </Link>
      </DescriptionItem>
      <DescriptionItem label="Linkedin">
        <Link href="https://www.linkedin.com/in/quocthinh524">
          https://www.linkedin.com/in/quocthinh524
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
          https://www.facebook.com/unlocker0808
        </Link>
      </DescriptionItem>
    </Descriptions>
  );
}

export default ContactWithMe;
