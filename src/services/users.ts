import { User } from "../types/common";

export const getUsers = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/users`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to load users");
      }
      const data: User[] = await response.json();
      resolve(data);
    } catch (err: any) {
      return reject(err.error);
    }
  });
};
