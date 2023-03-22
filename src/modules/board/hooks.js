import { useEffect, useState } from "react";

export const useGetList = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    setListData([
      {
        seq: 1,
        title: "제목1",
        image: "",
        summary: "어쩌구저쩌구",
      },
      {
        seq: 2,
        title: "제목제목제목제목제목제목제목2",
        image: "",
        summary: "어쩌구저쩌구",
      },
      {
        seq: 3,
        title: "제목3",
        image: "/FQEVvcaagAIUzP5.jpg",
        summary:
          "어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구",
      },
      {
        seq: 4,
        title: "제목4",
        image: "",
        summary: "어쩌구저쩌구",
      },
      {
        seq: 5,
        title: "제목5",
        image: "",
        summary: "어쩌구저쩌구",
      },
    ]);
  }, []);

  return { listData };
};
