import React, { useEffect, useState } from "react";
import withLogger from "../hoc/Logger";
import { Comment } from "../types/common";
import { getPostComments } from "../services/posts";
import { Link } from "react-router-dom";

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
    <Link to={`/posts/${id}`} className="post-card-container">
      <div>
        <h2>{title}</h2>
        <p>By: {userName}</p>
        <hr />
        {comments.map((comment) => (
          <div className="comment-container" key={`comment-${comment.id}`}>
            <h4>{comment.email}</h4>
            <h6>{comment.name}</h6>
            <p>{comment.body}</p>
          </div>
        ))}
      </div>
    </Link>
  );
};

export default withLogger({ componentName: "PostCard" })(PostCard);
