import React from "react";
import withLogger from "../hoc/Logger";
import { Comment } from "../types/common";

const CommentBubble: React.FC<Comment> = ({ email, name, body }) => {
  return (
    <div className="comment-container">
      <h4>{email}</h4>
      <h6>{name}</h6>
      <p>{body}</p>
    </div>
  );
};

export default withLogger({ componentName: "CommentBubble" })(CommentBubble);
