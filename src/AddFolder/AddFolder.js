import React, { Component } from "react";
import NotefulContext from "../NotefulContext";
import FolderList from "../FolderList/FolderList";

class AddFolder extends Component {
  static contextType = NotefulContext;

  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
  }

  onSubmit(e) {
    e.preventDefault();
    const name = this.nameInput.current.value;
    console.log("Name: ", name);

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
          <input
            className="folder_name"
            name="name"
            type="text"
            ref={this.nameInput}
            defaultValue="Enter Folder Name"
          ></input>

          <button type="submit">Create</button>
        </form>
        <FolderList />
      </div>
    );
  }
}

export default AddFolder;
