import { useState, useEffect } from "react";
import TextInput from "../../components/TextInput";
import { Post } from "../../types/common";
import { getPostDetails } from "../../services/posts";
import PostCard from "../../components/PostCard";
import { useLocation } from "react-router-dom";

export default function Posts() {
  const { pathname } = useLocation();
  const [data, setData] = useState<Post>();

  useEffect(() => {
    getPostDetails(pathname.split("/")[2]).then((res) => setData(res as Post));
  }, []);

  return (
    <div className="posts-page">
      <h1>Post details</h1>
      <h2>{data?.title}</h2>
      <p>{data?.body}</p>
    </div>
  );
}
