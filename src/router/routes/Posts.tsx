import { useState, useEffect } from "react";
import TextInput from "../../components/TextInput";
import { Post, User } from "../../types/common";
import { getPosts } from "../../services/posts";
import { getUsers } from "../../services/users";

export default function Posts() {
  const [search, setSearch] = useState<string>("");
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getPosts().then((res) => setPosts(res as Post[]));
    getUsers().then((res) => setUsers(res as User[]));
  }, []);

  const handleSearchChange = (newValue: string) => {
    setSearch(newValue);
  };

  return (
    <div>
      <h1>Posts page</h1>
      <TextInput
        value={search}
        placeholder="Search..."
        label="Search posts by username"
        onValueChange={handleSearchChange}
      />
    </div>
  );
}
