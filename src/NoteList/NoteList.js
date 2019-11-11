import React, { Component } from "react";
import Note from "../Note/Note";

class NoteList extends Component {
  render() {
    let notes = this.props.store.notes;

    if (this.props.folderId) {
      notes = this.props.store.notes.filter(
        item => item.folderId === this.props.folderId
      );
    }
    return (
      <div className="notes">
        {notes.map((name, id) => (
          <Note key={id} {...name} />
        ))}
      </div>
    );
  }
}

export default NoteList;
