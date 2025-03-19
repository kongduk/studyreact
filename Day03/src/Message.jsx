import React from "react";
import "./MessageStyle.css";

const Message = ({ messages }) => {
    return (
        <div className="wrapper">
            {messages.map((msg, index) => (
                <div key={index} className="message">
                    {msg}
                </div>
            ))}
        </div>
    );
};

export default Message;
