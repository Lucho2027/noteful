import React, { Component } from "react";

class NotePage extends Component {
  render() {
    let note = this.props.store.notes;
    console.log(note);
    if (note) {
      note = this.props.store.notes.find(
        item => item.notesId === this.props.notesId
      );
      console.log(note);
    }

    return (
      <div className="note-selected">
        <h1>{note.name}</h1>
        <p>{note.content}</p>
      </div>
    );
  }
}

export default NotePage;
