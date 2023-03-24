import dynamic from "next/dynamic";

const Timeline = dynamic(() => import("antd/es/timeline"), { ssr: false });

export default Timeline;
