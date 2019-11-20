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

    notes = this.context.notes.filter(
      item => item.folderId === this.props.match.params.id
    );

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
