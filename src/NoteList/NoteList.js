import React, { Component } from "react";
import NotefulContext from "../NotefulContext";
import Note from "../Note/Note";
import { Link } from "react-router-dom";
import "./NoteList.css";

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
      <div className="NoteList">
        <Link to={`/addnoteto/folder/${this.props.match.params.id}`}>
          <button className="add-note-button">Add a New Note</button>
        </Link>
        {notes.map((note, id) => (
          <li key={note.id}>
            <Note
              key={id}
              name={note.name}
              id={note.id}
              modified={note.modified}
            ></Note>
          </li>
        ))}
      </div>
    );
  }
}

export default NoteList;
