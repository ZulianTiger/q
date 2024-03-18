import { Post } from "../types/common";

export const getPosts = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/posts`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to load posts");
      }
      const data: Post[] = await response.json();
      resolve(data);
    } catch (err: any) {
      return reject(err.error);
    }
  });
};

export const getPostDetails = (id: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/posts/${id}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to load post details");
      }
      const data: Post[] = await response.json();
      resolve(data);
    } catch (err: any) {
      return reject(err.error);
    }
  });
};

export const getPostComments = (id: number) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/comments?postId=${id}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to load post comments");
      }
      const data: Post[] = await response.json();
      resolve(data);
    } catch (err: any) {
      return reject(err.error);
    }
  });
};
