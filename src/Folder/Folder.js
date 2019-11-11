import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Folder.css";

class Folder extends Component {
  render() {
    return (
      <div className="folder">
        <Link to={"/folder/" + this.props.id} className="folder-button">
          {this.props.name}
        </Link>
      </div>
    );
  }
}

export default Folder;
