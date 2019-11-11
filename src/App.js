import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import NotePage from "./NotePage/NotePage";
import FolderList from "./FolderList/FolderList";
import NoteList from "./NoteList/NoteList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Link to="/">
            <h1>Noteful</h1>
          </Link>
        </header>
        <aside>
          <Route
            path="/"
            render={props => (
              <FolderList
                store={this.props.store}
                folderId={props.match.params.id}
              />
            )}
          />
        </aside>
        <main>
          <Route
            exact
            path="/"
            render={props => <NoteList store={this.props.store} />}
          />
          <Route
            path="/folder/:id"
            render={props => (
              <NoteList
                store={this.props.store}
                folderId={props.match.params.id}
              />
            )}
          />
          <Route
            exact
            path="/note/:id"
            render={props => (
              <NotePage
                store={this.props.store}
                noteId={props.match.params.id}
              />
            )}
          />
        </main>
      </div>
    );
  }
}

export default App;
