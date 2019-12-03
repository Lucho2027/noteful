import React, { Component } from "react";
import Note from "../Note/Note";
import PropTypes from "prop-types";
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
        {note.map((name, id) => (
          <Note key={id} {...name} />
        ))}
      </div>
    );
  }
}
NotePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  })
};
export default NotePage;
