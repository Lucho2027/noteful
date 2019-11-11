import React, { Component } from "react";
import Folder from "../Folder/Folder";
import "./FolderList.css";

class FolderList extends Component {
  render() {
    return (
      <div className="folders">
        {this.props.store.folders.map((name, id) => (
          <Folder key={id} {...name} />
        ))}

        <button>Add Folder</button>
      </div>
    );
  }
}

export default FolderList;
