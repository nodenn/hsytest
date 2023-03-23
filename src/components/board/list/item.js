import React from "react";
import ImageDefault from "@/components/board/ImageDefault";
import Link from "next/link";
import { useRouter } from "next/router";

import { itemWrapper, itemContent } from "@/styles/board/Item.module.css";

const Item = ({ item }) => {
  const router = useRouter();

  const { seq, title, image, summary } = item;

  return (
    <Link
      href={{
        pathname: `/board/detail/${item.seq}`,
        query: { title: `${title}`, summary: `${summary}`, image: `${image}` },
      }}
      as={`/board/detail/${item.seq}`}
      className={itemWrapper}
    >
      <ImageDefault src={image} width={300} height={150} alt={title} />
      <div className={itemContent}>
        <h3>{title}</h3>
        <p>{summary}</p>
      </div>
    </Link>
  );
};

export default Item;
