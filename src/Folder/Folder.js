import React, { Component } from "react";
import { Link } from "react-router-dom";
import NotefulContext from "../NotefulContext";

import "./Folder.css";

class Folder extends Component {
  static contextType = NotefulContext;
  onClick(folderId) {
    fetch(`http://localhost:9090/folders/${folderId}`, {
      method: "Delete"
    })
      .then(res => res.json())
      .then(res => this.context.deleteFolder(folderId))
      
  }

  render() {
    return (
      <div className="folder">
        <Link to={"/folder/" + this.props.id} className="folder-button">
          {this.props.name}
        </Link>

        <button onClick={e => this.onClick(this.props.id)}>Delete</button>
      </div>
    );
  }
}

export default Folder;
