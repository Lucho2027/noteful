import React, { Component } from "react";
import Folder from "../Folder/Folder";

class FolderList extends Component {
  render() {
    return (
      <div className="folders">
        {this.props.folders.folders.map((name, id) => (
          <Folder key={id} {...name} />
        ))}

        <button>Add Folder</button>
      </div>
    );
  }
}

export default FolderList;
