import React from "react";
import "./MessageStyle.css";

const Message = ({ messages }) => {
    console.log("messages:", messages); // 메시지 배열 확인

    return (
        <>
            {messages.map((msg, index) => {
                console.log("Rendering message:", msg); // 각 메시지가 어떻게 렌더링 되는지 확인
                return (
                    <div key={index} className="wrapper">
                        {msg}
                    </div>
                );
            })}
        </>
    );
};

export default Message;
