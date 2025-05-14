//QueryPre.jsx
import { useEffect, useState } from "react";

// delay 초 동안 처리를 일시 정지하는 sleep 함수

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

const API_KEY = 'apikey';

// 날씨 정보를 얻기 위한 함수
const fetchWeather = async () => {
  // 처리 지연을 위한 더미 휴지 처리
  await sleep(2000);

  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${API_KEY}`);
  const data = await res.json()
  console.log(data)
  if (res.ok) {
    return data;
  }
  //res 에 await 반환 결과 저장 `https://api.openweathermap.org/data/2.5/weather?q=Seoul&lang=ko&appid=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
  //성공이면 결과를 json결과를 리턴
  // 오류 발생 시 해당 내용을 슬로우
  throw new Error(res.statusText);
};

export default function QueryPre({ id }) {
  // 날씨 정보(info), loading(로딩 중인가?), error(오류 정보) 준비 error(오류 정보) 준비
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 컴포넌트 실행 시 날씨 정보 획득
  useEffect(() => {
    setLoading(true);
    fetchWeather()
      .then((res) => setData(res))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
    console.log(data);

    // 실패 시 error 업데이트

    // 성공 여부와 상관없이 isLoading 업데이트
  }, []);

  // 로딩 중이라면 로딩 메시지 표시
  if (isLoading) {
    return <p>Loading...</p>;
  }

  // 통신 오류 발생 시 오류 메시지 표시
  if (error) {
    return <p>Error: {error}</p>;
  }

  // 로딩 중이거나 오류가 아닌 경우 결과 표시
  return (
    <figure>
      <img
        src={`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}.png`}
        alt={data?.weather?.[0]?.main}
      />
      <figcaption>{data?.weather?.[0]?.description}</figcaption>
      <ul>
        <li>
          <strong> 지역 : </strong> {data.main.name}
        </li>
        <li>
          <strong> 온도 : </strong> {} ℃
        </li>
        <li>
          <strong> 습도 : </strong> {data.main.humidity} %
        </li>
        <li>
          <strong> 풍속 : </strong> {} m/s
        </li>
      </ul>
    </figure>
  );
}
