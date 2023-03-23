import dynamic from "next/dynamic";
const Divider = dynamic(() => import("antd/es/divider"), { ssr: false });

export default Divider;
