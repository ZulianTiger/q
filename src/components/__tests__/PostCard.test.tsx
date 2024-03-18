import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import PostCard from "../PostCard";

describe("PostCard component", () => {
  test("renders post details", async () => {
    render(
      <BrowserRouter>
        <PostCard id={1} title="Post Title" userName="John Doe" />
      </BrowserRouter>
    );

    expect(screen.getByText("Post Title")).toBeInTheDocument();
    expect(screen.getByText("By: John Doe")).toBeInTheDocument();
  });

  test("renders post comments", async () => {
    render(
      <BrowserRouter>
        <PostCard id={1} title="Post Title" userName="John Doe" />
      </BrowserRouter>
    );

    await waitFor(() => {
      const commentBubbles =
        document.getElementsByClassName("comment-container");
      expect(commentBubbles.length).toBeGreaterThan(0);
    });
  });
});
