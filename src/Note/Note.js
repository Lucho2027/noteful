import React, { Component } from "react";
import { Link } from "react-router-dom";

class Note extends Component {

  
  render() {
    return (
      <div className="Note">
        <Link to={"/note/" + this.props.id} className="note-button">
          <h1>{this.props.name}</h1>
          <p>{this.props.content}</p>

          <p>Modified on {this.props.modified}</p>
          <button>Delete Note</button>
        </Link>
      </div>
    );
  }
}

export default Note;
