import React, { Component } from "react";
import Note from "../Note/Note";

class NotePage extends Component {
  render() {
    let note = this.props.store.notes;
    console.log(note);
    if (this.props.noteId) {
      note = this.props.store.notes.filter(
        item => item.id === this.props.noteId
      );
    }
    console.log(note);

    return (
      <div className="note-page">
        {note.map((name, id) => (
          <Note key={id} {...name} />
        ))}
      </div>
    );
  }
}

export default NotePage;
