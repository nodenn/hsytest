import React from "react";
import { listWrapper } from "@/styles/board/List.module.css";

import Item from "@/components/board/list/Item";
import { useGetList } from "@/modules/board/hooks";

const List = () => {
  const { listData } = useGetList();

  return (
    <>
      <h1>BOARD</h1>
      <div className={listWrapper}>
        {listData?.length > 0 &&
          listData.map((item) => <Item key={item.seq} item={item} />)}
      </div>
    </>
  );
};

export default List;
