import dynamic from "next/dynamic";
const Card = dynamic(() => import("antd/es/card/Card"), { ssr: false });

export default Card;
