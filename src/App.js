
import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import NotePage from "./NotePage/NotePage";
import FolderList from "./FolderList/FolderList";
import NoteList from "./NoteList/NoteList";
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

  render() {
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      /* addNote: () => {},
  deleteNote: () => {},
  addFolder: () => {},
  deleteFolder: () => {} */
      addNote: this.addNote,
      deleteNote: this.deleteNote,
      addFolder: this.addFolder,
      deleteFolder: this.deleteFolder,
    };
    return (
      <div className="App">
        <header>
          <Link to="/">
            <h1>Noteful</h1>
          </Link>
        </header>
        <NotefulContext.Provider value={contextValue}>
          <aside>
            <Route
              path="/"
              component={FolderList}
            /* render={props => (
                <FolderList
                  store={this.props.store}
                  folderId={props.match.params.id}
                  addFolder={this.addFolder}
                />
              )} */
            />
          </aside>
          <main>
            <Route
              exact
              path="/"
              component={NoteList}
              /* render={props => <NoteList store={this.props.store} />} */
            />
            <Route
              path="/folder/:id"
              /* component={NoteList} */
              render={props => (
                <NoteList
                  store={this.props.store}
                  folderId={props.match.params.id}
                  addFolder={this.addFolder}
                />
              )}
            />
            <Route
              exact
              path="/note/:id"
              /* component={NotePage} */
              render={props => (
                <NotePage
                  store={this.props.store}
                  noteId={props.match.params.id}
                />
              )}
            />
          </main>
        </NotefulContext.Provider>
      </div>
    );
  }
}

export default App;
