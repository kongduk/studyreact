import "../styles.css";
import { useParams } from "react-router-dom";
import Rooms from "../Rooms";
import { Nav, Button } from "react-bootstrap";
import { useState, useContext } from "react";

export default function DetailTab() {
    const [tab, setTab] = useState(0);
    // const [theme, toggleTheme] = useContext(context1);
    const { id } = useParams<{ id: string }>();
    const room = Rooms.find((room) => room.key === Number(id));

    if (!room) return <div>Room not found</div>
    return (
        <main>
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
                        평점: {room.rating}{" "}
                        < span className="visits" >( {room.numberOfRating} )</ span >
                    </ div >
                    < div className="price" >
                        {room.price} 원< span className="month" >/ month</ span >;
                    </ div >
                </ div >
            </ div >
            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link onClick={() => setTab(0)} eventKey="link0">
                        상세정보
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => setTab(1)} eventKey="link1">
                        리뷰
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => setTab(2)} eventKey="link2" disabled>
                        상품Q&A
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContext tab={tab} />
        </main>
    )

}

interface TabContextProps {
    tab: number;
}
export const TabContext: React.FC<TabContextProps> = ({ tab }) => {
    return (
        <div>
            {tab == 0 && (<div>
                <div>
                    <p>
                        5~9층에 위치한 스탠다드 룸은 편안함과 쾌적함이 인상적인 휴식환경을 제공합니다.
                    </p>
                    <p>
                        모던한 아름다움과 신라호텔 수준의 고급 침구 및 침대 그리고 고급 어메니티로 한 단계 업그레이드 된 휴식을 경험하십시오.
                    </p>
                    <br /> 위치 5~9층
                    <br /> 룸구성 : 침실 1, 욕실 1
                    <br /> 문의 전화 : 02-2230-0700
                </div>
            </div>)}
            {tab == 1 && <div><div>내용 1</div></div>}
            {tab == 2 && <div><div>내용 2</div></div>}
        </div>
    )
}