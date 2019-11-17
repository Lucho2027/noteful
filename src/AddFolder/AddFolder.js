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
          <label>Folder Name: </label>
          <input name="name" type="text"></input>
          <button type='submit' >Add Folder</button>
        </form>
        
      </div>
    );
  }
}

export default AddFolder;
