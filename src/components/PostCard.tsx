import React, { useEffect, useState } from "react";
import withLogger from "../hoc/Logger";
import { Comment } from "../types/common";
import { getPostComments } from "../services/posts";
import { Link } from "react-router-dom";
import CommentBubble from "./CommentBubble";

interface PostCardProps {
  id: number;
  title: string;
  userName: string;
}

const PostCard: React.FC<PostCardProps> = ({ id, title, userName }) => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    getPostComments(id).then((res) => setComments(res as Comment[]));
  }, []);

  return (
    <Link to={`/post/${id}`} className="post-card-container">
      <div>
        <h2>{title}</h2>
        <p>By: {userName}</p>
        <hr />
        {comments.map((comment) => (
          <CommentBubble
            key={`comment-${comment.id}`}
            id={comment.id}
            name={comment.name}
            email={comment.email}
            body={comment.body}
          />
        ))}
      </div>
    </Link>
  );
};

export default withLogger({ componentName: "PostCard" })(PostCard);
