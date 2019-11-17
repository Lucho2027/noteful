import React, { Component } from "react";
import Folder from "../Folder/Folder";
import AddFolder from'../AddFolder/AddFolder';
import NotefulContext from '../NotefulContext';
import "./FolderList.css";

class FolderList extends Component {
  static contextType = NotefulContext;
  render() {
    return (
      <div className="folders">
        {this.context.folders.map((name, id) => (
          <Folder key={id} {...name} />
        ))}

        <AddFolder/>
      </div>
    );
  }
}

export default FolderList;
