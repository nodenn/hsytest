import React from "react";
import { useRouter } from "next/router";
import ImageDefault from "@/components/board/ImageDefault";
import { useGetList } from "@/modules/board/hooks";

const Seq = ({ item }) => {
  const router = useRouter();
  return (
    <>
      <h3>{router.query.title}</h3>
      <ImageDefault
        src={router.query.image}
        width={300}
        height={150}
        alt={router.query.title}
      />
      <p>{router.query.summary}</p>
    </>
  );
};

export default Seq;
