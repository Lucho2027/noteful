import React, { Component } from "react";
import { Link } from "react-router-dom";
import NotefulContext from "../NotefulContext";

class Note extends Component {
  static contextType = NotefulContext;
  onClick(noteId) {
    fetch(`http://localhost:9090/notes/${noteId}`, {
      method: "Delete"
    })
      .then(res => res.json())
      .then(res => this.context.deleteNote(noteId));
  }

  render() {
    
    return (
      <div className="Note">
        <Link to={"/note/" + this.props.id} className="note-button">
          <h1>{this.props.name}</h1>
          <p>{this.props.content}</p>

          <p>Modified on {this.props.modified}</p>
          <button onClick={e => this.onClick(this.props.id)}>
            Delete Note
          </button>
        </Link>
      </div>
    );
  }
}

export default Note;
