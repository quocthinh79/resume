import dynamic from "next/dynamic";
const Image = dynamic(() => import("antd/es/image"), { ssr: false });

export default Image;
