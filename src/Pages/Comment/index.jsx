import { useState } from "react";
import "./Comment.css";
const Comment = () => {
  const [message, setMessage] = useState("This function is not implemented.");
  const handleClick = () => {
    setMessage("There is nothing more to see, This function is not implement.");
  };
  return (
    <div className="comment">
      <h1>{message}</h1>
      <button className="comment-button" onClick={handleClick}>
        Show more
      </button>
    </div>
  );
};

export default Comment;
