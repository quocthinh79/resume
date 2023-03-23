import dynamic from "next/dynamic";
const Item = dynamic(() => import("antd/es/list/Item"), { ssr: false });

export default Item;
