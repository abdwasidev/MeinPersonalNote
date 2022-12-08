import React from 'react';
import { getInitialData } from '../utils/';
import NoteHeader from './NoteHeader';
import NoteForm from './NoteForm';
import NoteActive from './NoteActive';
import NoteArchive from './NoteArchive';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            search: '',
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);
    }

    onDeleteHandler(id) {
      const notes = this.state.notes.filter(note => note.id !== id);
      this.setState({ notes });
    }

    onAddNoteHandler({ title, body}) {
      this.setState((prevState) => {
          return {
              notes: [
                  ...prevState.notes,
                  {
                      id: +new Date(),
                      title,
                      body,
                      archived: false,
                      createdAt: new Date().toISOString(),
                  }
              ]
          }
      });
    }

    onArchiveHandler(id) {
      const notes = this.state.notes.map(note => note.id === id ? {...note, archived : !note.archived} : note);
      this.setState({ notes });
    }

    onSearchHandler(title) {
      this.setState(() => {
        return {
            search: title.target.value,
        };
    });
    }
    
    render() {
        return (
            <div className='note-app'>
              <NoteHeader search={this.state.search} onSearch={this.onSearchHandler} />
              <div className="note-app__body">
                <NoteForm addNote={this.onAddNoteHandler}/>
                <NoteActive 
                  notes={this.state.notes.filter(note => 
                    (note.archived === false) && (note.title.toLocaleLowerCase().includes(this.state.search.toLocaleLowerCase())))} 
                  key={this.state.notes.id}
                  onSearch={this.onSearchHandler}
                  onDelete={this.onDeleteHandler} 
                  onArchive={this.onArchiveHandler} />
                <NoteArchive 
                  notes={this.state.notes.filter(note => 
                    (note.archived === true) && (note.title.toLocaleLowerCase().includes(this.state.search.toLocaleLowerCase())))} 
                  key={this.state.notes.id}
                  onSearch={this.onSearchHandler}
                  onDelete={this.onDeleteHandler} 
                  onArchive={this.onArchiveHandler} />
              </div>
            </div>
        );
    }
}

export default App;