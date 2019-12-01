import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import NotePage from "./NotePage/NotePage";
import FolderList from "./FolderList/FolderList";
import NoteList from "./NoteList/NoteList";
import AddFolder from "./AddFolder/AddFolder";
import NoteListFiltered from "./NoteListFiltered/NoteListFiltered";
import Nav from "./Nav/Nav";
import NotefulErrorBoundry from "./NotefulErrorBoundry";
import "./App.css";
import NotefulContext from "./NotefulContext";
import AddNote from "./AddNote/AddNote";

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
        <header className="App__header">
          <Link to="/">
            <h1>Noteful</h1>
          </Link>
        </header>

        <NotefulContext.Provider value={contextValue}>
          <aside className="App__nav">
            <NotefulErrorBoundry>
              <Route component={FolderList} />
            </NotefulErrorBoundry>
            <Nav />
          </aside>

          <main className="App__main">
            <NotefulErrorBoundry>
              <Route exact path="/" component={NoteList} />
            </NotefulErrorBoundry>
            <NotefulErrorBoundry>
              <Route exact path="/folder/:id" component={NoteListFiltered} />
            </NotefulErrorBoundry>
            <NotefulErrorBoundry>
              <Route path="/note/:id" component={NotePage} />
            </NotefulErrorBoundry>
            <NotefulErrorBoundry>
              <Route exact path="/addnoteto/folder/:id" component={AddNote} />
            </NotefulErrorBoundry>
            <NotefulErrorBoundry>
              <Route exact path="/addfolder" component={AddFolder} />
            </NotefulErrorBoundry>
          </main>
        </NotefulContext.Provider>
      </div>
    );
  }
}

export default App;
