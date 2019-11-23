import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import NotePage from "./NotePage/NotePage";
import FolderList from "./FolderList/FolderList";
import NoteList from "./NoteList/NoteList";
import AddFolder from "./AddFolder/AddFolder";
import NoteListFiltered from "./NoteListFiltered/NoteListFiltered";
import Nav from "./Nav/Nav";
import "./App.css";
import NotefulContext from "./NotefulContext";

class App extends Component {
  state = {
    folders: [],
    notes: []
  };

  addNote = note => {
    this.setState({
      notes: [...this.state.notes, note]
    });
  };

  deleteNote = noteId => {
    const newNotes = this.state.notes.filter(nts => nts.id !== noteId);
    this.setState({
      notes: newNotes
    });
  };

  addFolder = folder => {
    this.setState({
      folders: [...this.state.folders, folder]
    });
  };

  deleteFolder = folderId => {
    const newFolders = this.state.folders.filter(
      fldrs => fldrs.id !== folderId
    );
    this.setState({
      folders: newFolders
    });
  };

  setFolders = folders => {
    this.setState({
      folders: folders
    });
  };

  setNotes = notes => {
    this.setState({
      notes: notes
    });
  };

  render() {
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      addNote: this.addNote,
      deleteNote: this.deleteNote,
      addFolder: this.addFolder,
      deleteFolder: this.deleteFolder,
      setFolders: this.setFolders,
      setNotes: this.setNotes
    };
    return (
      <div className="App">
        <header>
          <Link to="/">
            <h1>Noteful</h1>
          </Link>
        </header>
        <Nav />
        <NotefulContext.Provider value={contextValue}>
          <aside>
            <Route exact path="/" component={FolderList} />
          </aside>

          <main>
            <Route exact path="/" component={NoteList} />
            <Route path="/folder/:id" component={NoteListFiltered} />
            <Route path="/note/:id" component={NotePage} />
            <Route exact path="/addfolder" component={AddFolder} />
          </main>
        </NotefulContext.Provider>
      </div>
    );
  }
}

export default App;
