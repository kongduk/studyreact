import React, { useState } from "react";
import "./postList.css";
import Bost from "./Post";
import posts from "./ThemePost";

export default function PostList() {
  const [count, setCount] = useState(0);
  const [postList, setPostList] = useState(posts);
  return (
    <div className="comment-list">
      {postList.map((comment, index) => (
        <>
          <Bost
            key={index}
            name={comment.name}
            comment={comment.comment}
            time={comment.time}
            avatar={comment.avatar}
          >
            <button
              className="delete"
              onClick={() => {
                let copy = [...postList];
                copy = copy.filter((_, i) => i !== index);
                setPostList(copy);
              }}
            >
              삭제
            </button>
          </Bost>
        </>
      ))}
    </div>
  );
}
