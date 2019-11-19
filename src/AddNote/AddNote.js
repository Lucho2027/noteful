import React, { Component } from "react";
import NotefulContext from "../NotefulContext";

class AddNote extends Component {
  static contextType = NotefulContext;
  onSubmit(e) {
    console.log(e);
    e.preventDefault();

    fetch(`http://localhost:9090/${this.props.folderId}/note`, {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON"
      },
      body: JSON.stringify({
        name: e.target.name.value,
        folder_id: this.props.folderId
      })
    })
      .then(res => res.json())
      .then(res => this.context.addNote(res));
  }
  render() {
    return (
      <div className="add-note">
        <form onSubmit={e => this.onSubmit(e)}>
          <label>Note Name: </label>
          <input name="name" type="text"></input>
          <button>Add Note</button>
        </form>
      </div>
    );
  }
}

export default AddNote;
