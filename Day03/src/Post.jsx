import { useState } from "react";

export default function Bost({ name, comment, avatar, time, children }) {
  const [count, setCount] = useState(0);
  return (
    <div className="comment">
      <img src={avatar} alt="user-avatar" className="avatar" />
      <div className="comment-details">
        <div className="user-name">{name}</div>
        <div className="comment-text">{comment}</div>
        <sapn onClick={() => setCount(count + 1)}>{"👍"}</sapn>
        <sapn>{count}</sapn>
        <div className="comment-time">{time}</div>
      </div>
      {children}
    </div>
  );
}
