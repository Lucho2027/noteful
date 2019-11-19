import React, { Component } from "react";
import NotefulContext from "../NotefulContext";
import AddFolder from "../AddFolder/AddFolder";
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
    console.log(notes);

    /* if (notes.id) {
      notes = this.context.notes.id.map(
        item => item.folder.id === this.context.folderId
      );
      
    } */
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

        <AddFolder />
      </div>
    );
  }
}

export default NoteList;
