import React, { Component } from "react";
import Note from "../Note/Note";

class NoteList extends Component {
  render() {
    return (
      <div className="notes">
        {this.props.notes.notes.map((name, id) => (
          <Note key={id} {...name} />
        ))}

        <button>Add Folder</button>
      </div>
    );
  }
}

export default NoteList;
