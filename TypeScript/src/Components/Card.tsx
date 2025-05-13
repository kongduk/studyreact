import '../styles.css';
import { Room } from '../Rooms';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

interface CardProps {
    item?: number;
}

export default function Card() { //2. Rooms[0] 기본 props 지정
    const { id } = useParams<{ id: string }>();
    const item = parseInt(id || '0', 10);

    const [room, setRoom] = useState<Room | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        console.log("item:", item); 
        const fetchRoom = async () => {
          try {
            setLoading(true);
            const response = await axios.get(`/api/rooms/${item}`);
            setRoom(response.data);
            setError(null);
          } catch (err) {
            setError("숙소 정보를 불러오는데 실패했습니다.");
            console.error("Error fetching room:", err);
          } finally {
            setLoading(false);
          }
        };
    
        if (item != null) {
          fetchRoom();
        }
      }, [item]);
    
      if (loading) {
        return <div className="loading">로딩 중...</div>;
      }
    
      if (error) {
        return <div className="error">{error}</div>;
      }
    
      if (!room) {
        return <div className="error">숙소를 찾을 수 없습니다.</div>;
      }

    return (
        < div className="container" >
            < div className="box image" >
                < img src={room.image} className="boximage" alt="Room" />
            </ div >
            < div className="box" >
                < div className="location" > {room.location} 에 위치</ div >
                < div className="title" > {room.name} </ div >
                < hr />
                < div className="guest" >최대인원 {room.totalGuest} 명</ div >
                < div className="rating" >
                    평점: {room.rating}
                    < span className="visits" >( {room.numberOfRating} )</ span >
                </ div >
                < div className="price" >
                    {room.price} 원< span className="month" >/ month</ span >
                </ div >
            </ div >
        </ div >
    );
}
