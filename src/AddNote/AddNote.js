import React, { Component } from "react";
import NotefulContext from "../NotefulContext";
import ValidationError  from '../AddFolder/ValidationError';
import FolderList from "../FolderList/FolderList"
class AddNote extends Component {
  static contextType = NotefulContext;

  constructor() {
    super();
    this.state = {
      name: {
        value: "",
        touched: false
      },
      content:{
        value:"",
        touched:false
      }
    };
  }
  updateNameNote(name) {
    this.setState({ name: { value: name, touched: true } });
    
  }
  updateContentNote(content) {
    this.setState({ content: { value: content, touched: true } });
    
  }

  validateNameNote(fieldValue) {
    const name = this.state.name.value.trim();

    if (name.length === 0) {
      return "Name is required";
    } else if (name.length < 3) {
      return "Name must be at least 3 characters long";
    }
  }
  validateContentNote(fieldValue) {
    const content = this.state.content.value.trim();

    if (content.length === 0) {
      return "Content is required";
    } else if (content.length < 25) {
      return "Content must be at least 25 characters long";
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
        name: e.target.name.value,
        folder_id: this.context.folderId
      })
      
    })
    
    .then(res => {
      if(res.ok){
        return res.json();
      }
      throw new Error(res.message);
    })
    .then(res => this.context.AddNote(res))
    .catch(err => (err.message))
     console.log(this.state)
  }
  

  
  render() {
    return (
      <div className="add-note">
        <FolderList/>
        <form onSubmit={e => this.onSubmit(e)}>
          <label>Note Name: </label>
          <input name="note-name"
           type="text"
           defaultValue="Enter Note Name here"
            onChange={e => this.updateNameNote(e.target.value)}
           ></input><br></br>
          <textarea name="note-content"
          rows="20"
          cols="60"
          type="text"
          onChange={e => this.updateContentNote(e.target.value)}
          ></textarea>
          <button disabled={this.validateNameNote()&& this.validateContentNote()}>Add Note</button>
          {this.state.name.touched && this.state.content.touched &&(
            <ValidationError message={this.validateNameNote()} alt={this.validateContentNote()} />
          )}
        </form>
      </div>
    );
  }
}

export default AddNote;
