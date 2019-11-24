import React, { Component } from "react";
import NotefulContext from "../NotefulContext";

class AddNote extends Component {
  static contextType = NotefulContext;
  onSubmit(e) {
    console.log(e);
    e.preventDefault();

    fetch(`http://localhost:9090/notes/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON"
      },
      body: JSON.stringify({
        name: e.target.name.value,
        folder_id: this.props.folderId
      })
    })
    .then(res => {
      if(res.ok){
        return res.json();
      }
      throw new Error(res.message);
    })
    .then(res => this.context.AddNote(res))
    .catch(err => (console.log(err)));
     
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
