import { useParams } from "react-router-dom";

export default function Detail() {
  const { id } = useParams(); // URL에 있는 id 값을 가져옴
  return <div>선택한 ID: {id}</div>;
}