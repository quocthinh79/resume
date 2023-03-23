import dynamic from "next/dynamic";
const Col = dynamic(() => import("antd/es/col"), { ssr: false });

export default Col;
