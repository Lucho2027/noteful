import React, { Component } from "react";
import NotefulContext from "../NotefulContext";
import FolderList from "../FolderList/FolderList";
import {Link} from"react-router-dom"
import Note from "../Note/Note";

class NoteListFiltered extends Component {
  
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
    console.log(notes)

    return (
      <div className="notes">
        <FolderList/>
        <Link to="/addnote">
          <button>Add a New Note</button>
        </Link>
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

export default NoteListFiltered;
