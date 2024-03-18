import { useState, useEffect } from "react";
import TextInput from "../../components/TextInput";
import { Post, User } from "../../types/common";
import { getPosts } from "../../services/posts";
import { getUsers } from "../../services/users";
import PostCard from "../../components/PostCard";

export default function Posts() {
  const [search, setSearch] = useState<string>("");
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getPosts().then((res) => setPosts(res as Post[]));
    getUsers().then((res) => setUsers(res as User[]));
  }, []);

  useEffect(() => {
    setPosts(
      posts.map((post) => {
        return {
          ...post,
          userName: users.filter((user) => user.id === post.userId)[0].username,
        };
      })
    );
  }, [users]);

  const handleSearchChange = (newValue: string) => {
    setSearch(newValue);
  };

  return (
    <div className="posts-page">
      <h1>All posts</h1>
      <TextInput
        value={search}
        placeholder="Search..."
        label="Search posts by username"
        onValueChange={handleSearchChange}
      />
      <div className="posts-grid">
        {posts
          .filter((post) =>
            post.userName?.toLowerCase().includes(search.trim().toLowerCase())
          )
          .map((post) => (
            <PostCard
              key={`post-${post.id}`}
              id={post.id}
              title={post.title}
              userName={post.userName}
            />
          ))}
      </div>
    </div>
  );
}
