import "./App.css";

import React from "react";
import { Link } from "react-router-dom";
import Stack from "./router/Stack";

const App: React.FC = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
      </ul>
      <hr />
      <Stack />
    </div>
  );
};

export default App;
