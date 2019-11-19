import React, { Component } from "react";
import Note from "../Note/Note";
import AddNote from "../AddNote/AddNote";
import NotefulContext from "../NotefulContext";

class NotePage extends Component {
  static contextType = NotefulContext;
  render() {
    let note = this.context.notes;

    /* if (this.context.id) {
      note = this.context.notes.filter(
        item => item.id === this.context.note.id
      );
    }
 */
    return (
      <div className="note-page">
        {note.map((name, id) => (
          <Note key={id} {...name} />
        ))}
        <AddNote folderId={this.props.folderId} />
      </div>
    );
  }
}

export default NotePage;
