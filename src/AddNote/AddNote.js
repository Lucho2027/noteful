import React, { Component } from "react";
import NotefulContext from "../NotefulContext";
import ValidationError from "../AddFolder/ValidationError";
import PropTypes from "prop-types";
import Dropdown from "../Dropdown/Dropdown";

class AddNote extends Component {
  static contextType = NotefulContext;

  constructor(props) {
    super(props);

    this.state = {
      name: {
        value: "",
        touched: false
      },
      content: {
        value: "",
        touched: false
      }
    };
  }
  updateNameNote = name => {
    this.setState({ name: { value: name, touched: true } });
  };
  updateContentNote = content => {
    this.setState({ content: { value: content, touched: true } });
  };

  updateFolderId = folder => {
    this.setState({ folderId: { value: folder, touched: true } });
  };

  validateNameNote(fieldValue) {
    const name = this.state.name.value.trim();

    if (name.length === 0) {
      return "Name is required";
    } else if (name.length < 3) {
      return "Name must be at least 3 characters long";
    }
  }

  onSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:9090/notes/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON"
      },
      body: JSON.stringify({
        name: this.state.name.value,
        content: this.state.content.value,
        modified: new Date(),
        folderId: this.props.match.params.id
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(res.message);
      })
      .then(res => {
        this.context.addNote(res);
      })

      .then(res => {
        this.props.history.push("/folder/" + this.props.match.params.id);
      })

      .catch(err => err.message);
  }

  render() {
    return (
      <div className="add-note">
        <form onSubmit={e => this.onSubmit(e)}>
          <label>Note Name: </label>
          <br></br>
          <input
            name="note-name"
            placeholder="Jose"
            type="text"
            required
            onChange={e => this.updateNameNote(e.target.value)}
          ></input>
          <br></br>
          <label>Select Folder:</label>
          <Dropdown updateFolderId={this.updateFolderId} />
          <label>Note Content: </label>

          <input
            name="note-content"
            rows="10"
            cols="60"
            type="text"
            required
            onChange={e => this.updateContentNote(e.target.value)}
          ></input>

          <button className="add-note" type="submit">
            Add Note
          </button>
          {this.state.name.touched && (
            <ValidationError message={this.validateNameNote()} />
          )}
        </form>
      </div>
    );
  }
}

AddNote.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  })
};

export default AddNote;
