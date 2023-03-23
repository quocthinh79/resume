import dynamic from "next/dynamic";
const Avatar = dynamic(() => import("antd/es/avatar/avatar"), { ssr: false });

export default Avatar;
