import React from "react";
import ImageDefault from "@/components/board/ImageDefault";
import Link from "next/link";

import { itemWrapper, itemContent } from "@/styles/board/Item.module.css";

const Item = ({ item }) => {
  const { seq, title, image, summary } = item;
  return (
    <Link href={`/board/detail/${item.seq}`} className={itemWrapper}>
      <ImageDefault src={image} width={300} height={150} alt={title} />
      <div className={itemContent}>
        <h3>{title}</h3>
        <p>{summary}</p>
      </div>
    </Link>
  );
};

export default Item;
