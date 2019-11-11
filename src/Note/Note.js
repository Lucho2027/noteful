import React, { Component } from "react";
import { Link } from "react-router-dom";

class Note extends Component {
  render() {
    return (
      <div className="Note">
        <Link to={"/note/" + this.props.id} className="note-button">
          {this.props.name}

          <p>Modified on {this.props.modified}</p>
          <button>Delete Note</button>
        </Link>
      </div>
    );
  }
}

export default Note;
