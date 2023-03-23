import dynamic from "next/dynamic";
const Row = dynamic(() => import("antd/es/row"), { ssr: false });

export default Row;
