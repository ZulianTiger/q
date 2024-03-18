import React, { useEffect, useState } from "react";
import withLogger from "../hoc/Logger";
import { Comment } from "../types/common";
import { getPostComments } from "../services/posts";

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
    <div>
      <h2>{title}</h2>
      <p>By: {userName}</p>
      <hr />
      {comments.map((comment) => (
        <div>
          <p>{comment.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default withLogger({ componentName: "PostCard" })(PostCard);
