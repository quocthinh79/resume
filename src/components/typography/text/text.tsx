import dynamic from "next/dynamic";
const Text = dynamic(() => import("antd/es/typography/Text"), { ssr: false });

export default Text;
