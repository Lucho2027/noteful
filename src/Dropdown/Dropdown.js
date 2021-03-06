import React, { Component } from "react";
import NotefulContext from "../NotefulContext";
import PropTypes from "prop-types";

export default class Dropdown extends Component {
  static contextType = NotefulContext;

  render() {
    const { folders = [] } = this.context;

    return (
      <select
        className="dropdown"
        onChange={e => this.props.updateFolderId(e.target.value)}
      >
        {folders.map(folder => (
          <option key={folder.id} value={folder.id} className="folderOption">
            {folder.name}
          </option>
        ))}
      </select>
    );
  }
}
Dropdown.propTypes = {
  updateFolderId: PropTypes.func
};
