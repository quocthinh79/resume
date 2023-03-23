import dynamic from "next/dynamic";
const Title = dynamic(() => import("antd/es/typography/Title"), { ssr: false });

export default Title;
