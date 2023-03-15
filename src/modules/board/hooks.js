import { useEffect, useState } from "react";

export const useGetList = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    setListData([
      {
        seq: 1,
        image: "",
        title: "제목1",
        summary: "어쩌구저쩌구",
      },
      {
        seq: 2,
        image: "",
        title: "제목제목제목제목제목제목제목2",
        summary: "어쩌구저쩌구",
      },
      {
        seq: 3,
        image: "/FQEVvcaagAIUzP5.jpg",
        title: "제목3",
        summary:
          "어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구",
      },
      {
        seq: 4,
        image: "",
        title: "제목4",
        summary: "어쩌구저쩌구",
      },
      {
        seq: 5,
        image: "",
        title: "제목5",
        summary: "어쩌구저쩌구",
      },
    ]);
  }, []);

  return { listData };
};
