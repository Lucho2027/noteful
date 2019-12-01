import React, { Component } from "react";
import { Link } from "react-router-dom";
import NotefulContext from "../NotefulContext";
import PropTypes from "prop-types";

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
          <h1 className="Note__title">{this.props.name}</h1>
          <p>{this.props.content} </p> <br />
          <span className="Note__dates">
            {" "}
            Modified on {this.props.modified}
          </span>{" "}
          <button
            className="Note__delete"
            onClick={e => this.onClick(this.props.id)}
          >
            Remove
          </button>
        </Link>
      </div>
    );
  }
}

export default Note;
Note.propTypes = {
  modified: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  handleDelete: PropTypes.func
};
