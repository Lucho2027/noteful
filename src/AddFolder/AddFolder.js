import React, { Component } from "react";

class AddFolder extends Component {
  onSubmit(e) {
    e.preventDefault();
    this.context.AddFolder(e.target.name.value);
  }

  render() {
    return (
      <div className="add-folders">
        <form onSubmit={this.onSubmit}>
          <label>Folder Name</label>
          <input name="name" type="text"></input>
        </form>
        <button>Add Folder</button>
      </div>
    );
  }
}

export default AddFolder;
