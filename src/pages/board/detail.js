import React from "react";
import ImageDefault from "@/components/board/ImageDefault";
import { useGetList } from "@/modules/board/hooks";
import { useRouter } from "next/router";

const Detail = ({ item }) => {
  const { listData } = useGetList();
  const { seq, title, image, summary } = item;
  return (
    <>
      {listData?.length > 0 &&
        listData.map((item) => (
          <div key={item.seq} item={item}>
            <ImageDefault src={image} width={300} height={150} alt={title} />
            <div className={itemContent}>
              <h3>{title}</h3>
              <p>{summary}</p>
            </div>
          </div>
        ))}
    </>
  );
};

export default Detail;
