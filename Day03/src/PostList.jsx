import React, { useState } from "react";
import "./postList.css";
import Bost from "./Post";
import posts from "./ThemePost"

export default function PostList() {
    const [count, setCount] = useState(0);
  return (
    <div className="comment-list">
      {posts.map((comment, index) => (
        <Bost
          key={index}
          name={comment.name}
          comment={comment.comment}
          time={comment.time}
          avatar={comment.avatar}
        />
      ))}
    </div>
  );
}
