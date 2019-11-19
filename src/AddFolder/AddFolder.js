import React, { Component } from "react";
import NotefulContext from "../NotefulContext";

class AddFolder extends Component {
  static contextType = NotefulContext;
  /* componentDidMount() {
    
      
      .then(folders => this.context.setFolders(folders));
  } */
  onSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:9090/folders", {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON"
      },
      body: JSON.stringify({
        name: e.target.name.value
      })
    })
      .then(res => res.json())
      .then(res => this.context.addFolder(res));
  }

  render() {
    return (
      <div className="add-folders">
        <form onSubmit={e => this.onSubmit(e)}>
          <label>Folder Name: </label>
          <input name="name" type="text"></input>
          <button type="submit">Add Folder</button>
        </form>
      </div>
    );
  }
}

export default AddFolder;
