import dynamic from "next/dynamic";
const Meta = dynamic(
  () => import("antd/es/list/Item").then((item) => item.Meta),
  { ssr: false }
);

export default Meta;
