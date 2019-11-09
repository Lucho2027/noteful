import React, { Component } from "react";

class Folder extends Component {
  render() {
    return (
      <div className="folder">
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}

export default Folder;
