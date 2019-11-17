import React, { Component } from "react";
import NotefulContext from '../NotefulContext';

import Note from "../Note/Note";

class NoteList extends Component {
  static contextType = NotefulContext;
  render() {
    let notes = this.context.notes;

    if (this.context.folderId) {
      notes = this.context.notes.filter(
        item => item.folderId === this.context.folderId
      );
    }

    return (
      <div className="notes">
        {notes.map((note, id) => (
          <Note
            key={id}
            name={note.name}
            id={note.id}
            modified={note.modified}
          />
        ))}
      </div>
    );
  }
}

export default NoteList;
