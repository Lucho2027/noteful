import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/addfolder">
          <button>Add a New Folder</button>
        </Link>
      </div>
    );
  }
}

export default Nav;
