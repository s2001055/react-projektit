import { useState } from 'react';
import Note from './Components/Note';
import './App.css';

const App = (props) => {
    const [notes, setNotes] = useState(props.notes);
    const [newNote, setNewNote] = useState('');
    const [showAll, setShowAll] = useState(true);

    const addNote = (event) => {
        event.preventDefault();
        console.log('Button clicked', event.target);

        const noteObject = {
            content: newNote,
            date: new Date().toISOString,
            important: Math.random() > 0.5,
            id: notes.length + 1
        }

        console.log(noteObject);
        setNotes(notes.concat(noteObject));
        setNewNote('');
    }

    const handleNoteChange = (event) => {
        console.log(event.target.value);
        setNewNote(event.target.value);
    }

    const notesToShow = showAll ? notes : notes.filter((note) => note.important === true);

    return (
        <div className="App">
            <h1>Notes</h1>

            <section className="filter">
                <p>Click to show {showAll ? 'only important' : 'all'} notes</p>

                <div>
                    <button onClick={() => setShowAll(!showAll)}>
                        Show {showAll ? ' important' : ' all'}
                    </button>
                </div>
            </section>

            <ul>
                {notesToShow.map((note) => (
                    <Note key={note.id} note={note} />
                ))}
            </ul>

            <section className="addNewNote">
                <form onSubmit={addNote}>
                    <h2>Add new Note</h2>

                    <input
                        placeholder="Type a new note here"
                        value={newNote}
                        onChange={handleNoteChange}
                    />
                    
                    <button type="submit">Save</button>
                </form>
            </section>
        </div>
    );
}

export default App;