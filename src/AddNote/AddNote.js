import React, { Component } from "react";

class AddNote extends Component {
  onSubmit(e) {
    e.preventDefault();
    this.context.AddNote(e.target.name.value);
  }

  render() {
    return (
      <div className="add-note">
        <form onSubmit={this.onSubmit}>
          <label>Note Name</label>
          <input name="name" type="text"></input>
        </form>
        <button>Add Note</button>
      </div>
    );
  }
}

export default AddNote;
