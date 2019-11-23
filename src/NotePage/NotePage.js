import React, { Component } from "react";
import Note from "../Note/Note";
import AddNote from "../AddNote/AddNote";
import FolderList from "../FolderList/FolderList";
import NotefulContext from "../NotefulContext";

class NotePage extends Component {
  static contextType = NotefulContext;
  render() {
    let note = this.context.notes;

    note = this.context.notes.filter(
      item => item.id === this.props.match.params.id
    );

    return (
      <div className="note-page">
        <FolderList />
        <AddNote folderId={this.props.folderId} />
        {note.map((name, id) => (
          <Note key={id} {...name} />
        ))}
      </div>
    );
  }
}

export default NotePage;
