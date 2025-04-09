import React, { useState, useEffect } from "react";

const Modal = ({ onUnmount }) => {
    useEffect(() => {
        return () => {
            alert("Modal 컴포넌트 언마운트");
            onUnmount();
        };
    }, [onUnmount]);

    return (
        <div style={{ height: '20%', width: '70%', background: 'lightcyan', padding: '10px' }}>
            useEffect 실습입니다.
        </div>
    );
};

export default function UseEffect1() {
    const [inputs, setInputs] = useState({ name: '', nickname: '' });
    const [depname, setDepname] = useState('');
    const [modal, setModal] = useState(true);

    const { name, nickname } = inputs;

    const onChange = (e) => {
        const { name, value } = e.target;
        setInputs((prev) => ({ ...prev, [name]: value }));
    };

    useEffect(() => {
        console.log('마운트될 때 실행');
        const timer = setTimeout(() => {
            setModal(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        console.log(`effect함수 변경 후 이름: ${depname}`);
        return () => {
            console.log(`effect함수 변경 전 이름: ${depname}`);
        };
    }, [depname]);

    return (
        <div>
            <div>
                <input
                    name="name"
                    value={name}
                    onChange={onChange}
                    placeholder="이름을 입력하세요"
                />
                <input
                    name="nickname"
                    value={nickname}
                    onChange={onChange}
                    placeholder="닉네임을 입력하세요"
                />
                <button onClick={() => setDepname(name)}>이름 출력</button>
            </div>
            <div>
                <h3>이름:</h3> {name}
            </div>
            <div>
                <h3>닉네임:</h3> {nickname}
            </div>
            {modal && <Modal onUnmount={() => console.log('Modal unmounted')} />}
        </div>
    );
}
