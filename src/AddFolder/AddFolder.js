import React, { Component } from "react";
import NotefulContext from "../NotefulContext";
import FolderList from "../FolderList/FolderList";
import ValidationError from "./ValidationError";

class AddFolder extends Component {
  static contextType = NotefulContext;

  constructor(props) {
    super(props);
    this.state = {
      name: {
        value: "",
        touched: false
      },
      
    };
  }
  updateName(name) {
    this.setState({ name: { value: name, touched: true } });
    
  }
  validateName(fieldValue) {
    const name = this.state.name.value.trim();

    if (name.length === 0) {
      return "Name is required";
    } else if (name.length < 3) {
      return "Name must be at least 3 characters long";
    }
  }
  onSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:9090/folders", {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON"
      },
      body: JSON.stringify({
        name: e.target.name.value
      })
    })
      .then(res => {
        if(res.ok){
          return res.json();
        }
        throw new Error(res.message);
      })
      .then(res => this.context.addFolder(res))
      .catch(err => (err.message));
  }

  render() {
    console.log("PROPS:",this.props)
    console.log("STATE:",this.state)
    console.log("CONTEXT:",this.context)
    return (
      <div className="add-folders">
        <form onSubmit={e => this.onSubmit(e)}>
          <label>Folder Name: </label>
          <input
            className="folder-name"
            name="name"
            type="text"
            defaultValue="Enter Folder Name here"
            onChange={e => this.updateName(e.target.value)}
          ></input>
          <button type="submit" disabled={this.validateName()}>
            Create
          </button>
          {this.state.name.touched && (
            <ValidationError message={this.validateName()} />
          )}
        </form>
        <FolderList />
      </div>
    );
  }
}

export default AddFolder;
