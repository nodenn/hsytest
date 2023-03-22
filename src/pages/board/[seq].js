import { useRouter } from "next/router";
import ImageDefault from "@/components/board/ImageDefault";

const Seq = () => {
  const router = useRouter();
  return (
    <>
      <ImageDefault src={image} width={300} height={150} alt={title} />
      <div className={itemContent}>
        <h3>{title}</h3>
        <p>{summary}</p>
      </div>
    </>
  );
};

export default Seq;
