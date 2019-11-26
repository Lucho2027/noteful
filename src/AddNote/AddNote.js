import React, { Component } from "react";
import NotefulContext from "../NotefulContext";
import ValidationError  from '../AddFolder/ValidationError';
import FolderList from "../FolderList/FolderList";
import Dropdown from"../Dropdown/Dropdown";

class AddNote extends Component {
  static contextType = NotefulContext;

  constructor(props) {
    
    super(props);
    
    this.state = {
      name: {
        value: "",
        touched: false
      },
      content:{
        value:"",
        touched:false
      },
      /*folderId:this.props.match.params.id*/
      
    };
    
  }
  updateNameNote = (name) => {
      this.setState({ name: { value: name, touched: true } });
      console.log('pew pew')
      
  }
  updateContentNote = (content)=> {
    this.setState({ content: { value: content, touched: true } });
    
  }
  /*updateFolderIdNote(folderId) {
    this.setState({ folderId: folderId });
    
  }*/
  updateFolderId = (folder) =>{
    this.setState({ folderId: {value: folder, touched:true}})
  }

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
        name: e.target.name.value,
        
      
      })
      
    })
    
    .then(res => {
      if(res.ok){
        return res.json();
        
        
      }
      throw new Error(res.message);
      
    })
    .then(res => this.context.addNote(res))
    .then(res=>{
      this.setState({
        name:{ value:''},
        modified:'',
        folderId:{ value:''},
        content:{value:''}
      });
     this.state.addNote(res)
  
    })
   
    
    .catch(err => (err.message))
    console.log("PROPS:",this.props)
    console.log("STATE:",this.state)
    console.log("CONTEXT:",this.context)
  }
  

  
  render() {
   /*console.log("PROPS:",this.props)
    console.log("STATE:",this.state)
    console.log("CONTEXT:",this.context)*/
    
    
    return (
      <div className="add-note">
        
        <form onSubmit={e => this.onSubmit(e)}>
          <label>Note Name: </label><br></br>
          <input name="note-name"
          
           type="text"
           onChange={e => this.updateNameNote(e.target.value)}
           ></input><br></br>
           <Dropdown
           updateFolderId={this.updateFolderId}/>
           <label>Note Content: </label><br></br>
          <input name="note-content"
          rows="10"
          cols="60"
          type="text"
          onChange={e => this.updateContentNote(e.target.value)}
          ></input>
          

        
          <button type="submit"disabled={this.validateNameNote()}>Add Note</button>
          {this.state.name.touched}
            <ValidationError message={this.validateNameNote()}/>
        
          
        </form>
        <FolderList/>
      </div>
    );
  }
}

export default AddNote;
