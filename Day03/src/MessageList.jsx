import React from "react";
import Message from "./Message";

const msgLists = [
    "안녕하세요. 오늘의 일정입니다.",
    "점심시간이 11시 30분으로 변경되었습니다.",
    "이제 곧 회의가 시작됩니다."
];

const MessageList = () => {
    return (
        <div className="message-list-wrapper">
            <Message messages={msgLists} />
        </div>
    );
};

export default MessageList;
