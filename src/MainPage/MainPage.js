import React, { Component } from "react";
import { Link } from "react-router-dom";
import FolderList from "../FolderList/FolderList";
import NoteList from "../NoteList/NoteList";
import "./MainPage.css";

class MainPage extends Component {
  render() {
    return (
      <div className="main-page">
        <header>
          <Link to="/main-page">
            <h1>Noteful</h1>
          </Link>
        </header>
        <div className="body">
          <aside>
            <FolderList folders={this.props.store} />
          </aside>
          <main>
            <NoteList notes={this.props.store} />
          </main>
        </div>
      </div>
    );
  }
}

export default MainPage;
