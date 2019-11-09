import React, { Component } from "react";

class Note extends Component {
  render() {
    return (
      <div className="folder">
        <h1>{this.props.name}</h1>
        <p>{this.props.content}</p>
        <button>Delete Note</button>
      </div>
    );
  }
}

export default Note;
