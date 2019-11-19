import React, { Component } from "react";
import Folder from "../Folder/Folder";

import NotefulContext from "../NotefulContext";
import "./FolderList.css";

class FolderList extends Component {
  static contextType = NotefulContext;

  componentDidMount() {
    fetch("http://localhost:9090/folders")
      .then(res => res.json())
      .then(folders => this.context.setFolders(folders));
  }

  render() {
    return (
      <div className="folders">
        {this.context.folders.map((name, id) => (
          <Folder key={id} {...name} />
        ))}
      </div>
    );
  }
}

export default FolderList;
