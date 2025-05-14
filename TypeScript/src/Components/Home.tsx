import Rooms from "../Rooms"
import Header from "./Header"
import Card from "./Card"
import Router from "../Router"
import '../styles.css'
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"

interface Room {
    key: number;
    name: string;
    location: string;
    totalGuest: string;
    rating: string;
    numberOfRating: string;
    price: number;
    image: string;
}

const Home = () => {
    const [rooms, setRooms] = useState<Room[]>(Rooms);
    return (
        <>
            <Router />
            <div id="wrapper">
                {rooms.map((room) => (
                    <div className="box" key={room.key}>
                        <img className="box" src={room.image} />
                        <br />
                        {room.name}
                        <br />
                        {room.location}
                        <br />
                    </div>
                ))}
            </div>
            <button onClick={() => {
                axios // 7. axios.get().then() 이용하여 데이터 가져오기
                    .get("https://mikki32sw.github.io/airanb/data.json")
                    .then((result) => {
                        console.log(result.data);
                        const copyRooms = [...rooms, ...result.data]; //8. 중요 : rooms 배열을 복사하고, result.data를 rooms 배열에 추가 !!
                        console.log(copyRooms);
                        setRooms(copyRooms); //9.새 배열(copyRooms) 주소를 setRooms() 함수로 전달)
                    })
                    .catch(() => {
                        console.log("get 실패함");
                    });
            }}>
                더보기</button >
        </>
    )
}

export default Home