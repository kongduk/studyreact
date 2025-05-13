import Rooms from "../Rooms"
import Header from "./Header"
import Card from "./Card"
import Router from "../Router"
import '../styles.css'
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";

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
            {/* <button onClick={
                
            }>더보기</button> */}
        </>
    )
}

export default Home