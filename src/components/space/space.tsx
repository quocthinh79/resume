import dynamic from "next/dynamic";
const Space = dynamic(() => import("antd/es/space"), { ssr: false });

export default Space;
