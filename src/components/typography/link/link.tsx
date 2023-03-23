import dynamic from "next/dynamic";
const Link = dynamic(() => import("antd/es/typography/Link"), { ssr: false });

export default Link;
