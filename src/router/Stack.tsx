import React from "react";
import { Routes, Route } from "react-router-dom";
import Posts from "./routes/Posts";
import PostDetails from "./routes/PostDetails";

const Stack: React.FC = () => {
  return (
    <Routes>
      <Route path="/posts" element={<Posts />} />
      <Route path="/post/:id" element={<PostDetails />} />
    </Routes>
  );
};

export default Stack;
