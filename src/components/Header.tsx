import React from "react";
import { Link } from "react-router-dom";
import withLogger from "../hoc/Logger";

const Header: React.FC = () => {
  return (
    <header className="header-container">
      <nav>
        <ul className="header-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default withLogger({ componentName: "Header" })(Header);
