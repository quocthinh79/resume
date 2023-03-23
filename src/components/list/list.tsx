import dynamic from "next/dynamic";
const List = dynamic(() => import("antd/es/list"), { ssr: false });

export default List;
