import React, { Component } from "react";
import NotefulContext from "../NotefulContext";

import Note from "../Note/Note";

class NoteList extends Component {
  static contextType = NotefulContext;
  componentDidMount() {
    fetch("http://localhost:9090/notes")
      .then(res => res.json())
      .then(notes => this.context.setNotes(notes));
  }

  render() {
    let notes = this.context.notes;
    


    return (
    
      <div className="notes">
        {notes.map((note, id) => (
          <Note
            key={id}
            name={note.name}
            id={note.id}
            modified={note.modified}
>{note.content}</Note>
        ))}
      </div>
    );
  }
}

export default NoteList;
