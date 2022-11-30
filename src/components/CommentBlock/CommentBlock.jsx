import "./CommentBlock.css";
import React, { useState } from "react";
import { useEffect } from 'react'


function CommentBlock({ title, volume, chapter, page, user }) {
  const savedComments = localStorage.getItem("comments");
  console.log(JSON.parse(savedComments));

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setComments(savedComments ? JSON.parse(savedComments) : []);
  }, []);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const addComment = () => {
    if (title && volume && chapter && page && user) {
      const newComment = {
        id: Math.random().toString(36).substr(2, 9),
        user: user,
        text: comment,
      };
      setComments(...comments, newComment);
    }
  };

  const onClickHandler = () => {
    setComments((comments) => [...comments, comment]);
  };

  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };

  return (
    <div className="comment-block">
      {comments.map((text) => (
        <div className="comment-container">{text}</div>
      ))}
      <div className="comment-flexbox">
        <h3 className="comment-text">Comment</h3>
        <textarea
          value={comment}
          onChange={onChangeHandler}
          className="input-box"
        />
        <button onClick={onClickHandler} className="comment-button">
          Submit
        </button>
      </div>
    </div>
  );
}

export default CommentBlock;
