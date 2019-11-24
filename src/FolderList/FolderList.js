import React, { Component } from "react";
import Folder from "../Folder/Folder";


import NotefulContext from "../NotefulContext";
import "./FolderList.css";

class FolderList extends Component {
  static contextType = NotefulContext;

  constructor(props){
    
    super(props);
    this.state={
      hasError:false
    }
  
  }

  componentDidMount() {
    fetch("http://localhost:9090/folders")
    .then(res => {
      if(!res.ok){
        throw new Error('Something went wrong');
      }
      return res;
      
    })
    .then(res=>res.json())
    .then(res => this.context.setFolders(res))
    .catch(error =>{this.setState({hasError:true

    })

  })   
  }

  render() {
    return (
      <div className="folders">
        
        {this.context.folders.map((name, id) => (
          <Folder key={id} {...name} />
        ))}
        
      </div>
    );
  }
}

export default FolderList;
