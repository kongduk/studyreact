import React, { useState } from "react";
import "./postList.css";
import {posts} from "./post.js";

const Post = ({ name, comment, avatar, time }) => {
  return (
    <div className="comment">
      <img src={avatar} alt="user-avatar" className="avatar" />
      <div className="comment-details">
        <div className="user-name">{name}</div>
        <div className="comment-text">{comment}</div>
        <div className="comment-time">{time}</div>
      </div>
    </div>
  );
};

export default function PostList2() {
    const [comments, setComments] = useState(posts);
  return (
    <div className="comment-list">
      {posts.map((comment, index) => (
        <Post
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
