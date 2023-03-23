import dynamic from "next/dynamic";
const Descriptions = dynamic(() => import("antd/es/descriptions"), {
  ssr: false,
});

export default Descriptions;
