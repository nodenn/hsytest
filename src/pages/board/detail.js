import React from "react";
import ImageDefault from "@/components/board/ImageDefault";
import { useGetList } from "@/modules/board/hooks";
import { useRouter } from "next/router";

const Detail = ({ item }) => {
  const { listData } = useGetList();
  const { seq, title, image, summary } = item;
  return <></>;
};

export default Detail;
