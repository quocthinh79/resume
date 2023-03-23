import dynamic from "next/dynamic";
const DescriptionsItem = dynamic(() => import("antd/es/descriptions/Item"), {
  ssr: false,
});

export default DescriptionsItem;
