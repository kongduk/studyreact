import React, { useState } from "react";
import axios from "axios";

export default function AxiosTest() {
  const [data, setData] = useState(null);
  const [data2, setData2] = useState(null);
  const [photos, setPhotos] = useState([]);

  const getPromise = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments/1")
      .then((response) => {
        setData(response.data);
      })
      .catch((e) => console.log("get error", e));
  };

  const getAsync = async () => {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/comments/2"
      );
      console.log(res.data);
      setData2(res.data);
    } catch (e) {
      console.log(e.stack);
    }
  };

  const getPhotos = async () => {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      console.log(res.data);
      setData(null);
      setData2(null);
      setPhotos(res.data.filter((item) => item.id <= 5));
    } catch (e) {
      console.log(e.stack);
    }
  };

  return (
    <main>
      <div>
        <h3>Axios 테스트해보기</h3>
        <button onClick={getPromise}>Promise로 불러오기</button>
        <p />
        <button onClick={getAsync}>async/await로 불러오기</button>
        <p />
        <button onClick={getPhotos}>async/await로 사진 불러오기</button>
      </div>

      {data && (
        <div>
          <h4>데이터 1 (Promise)</h4>
          <p>{data.postId}</p>
          <p>{data.email}</p>
          <p>{data.body}</p>
        </div>
      )}

      {data2 && (
        <div>
          <h4>데이터 2 (Async)</h4>
          <p>{data2.id}</p>
          <p>{data2.email}</p>
          <p>{data2.body}</p>
        </div>
      )}

      {photos.length > 0 && (
        <div>
          <h4>사진 리스트</h4>
          {photos.map((photo) => (
            <div key={photo.id}>
              <p>{photo.id} - {photo.title}</p>
              <img src={photo.url} alt={photo.title} width={200} />
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
