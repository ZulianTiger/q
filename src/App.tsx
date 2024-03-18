import "./App.css";

import React from "react";
import Header from "./components/Header";
import Stack from "./router/Stack";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Stack />
    </div>
  );
};

export default App;
