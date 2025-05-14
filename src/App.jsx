import React, { useState, useEffect } from 'react';
import NoteInput from './components/NoteInput';
import NoteList from './components/NoteList';
import NoteDetails from './components/NoteDetails';
import Navbar from './components/Navbar';

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Load notes from localStorage when the app loads
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
  }, []);

  // Function to add a new note
  const addNote = (note) => {
    const newNotes = [...notes, note];
    setNotes(newNotes);
    localStorage.setItem('notes', JSON.stringify(newNotes)); // Save to localStorage
  };

  // Function to handle selecting a note
  const openNote = (note) => {
    setSelectedNote(note);
  };

  // Function to close the selected note details
  const closeNoteDetails = () => {
    setSelectedNote(null);
  };

  // Function to delete a note
  const deleteNote = (index) => {
    const newNotes = notes.filter((note, i) => i !== index); // Remove the note by index
    setNotes(newNotes);
    localStorage.setItem('notes', JSON.stringify(newNotes)); // Save the updated notes to localStorage
  };

  // Function to handle the search input
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter notes based on search query
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar searchQuery={searchQuery} handleSearch={handleSearch} />
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <NoteInput addNote={addNote} />
        {/* Pass the filtered notes and openNote function to NoteList */}
        <NoteList notes={filteredNotes} openNote={openNote} deleteNote={deleteNote} />
        
        {/* Show selected note details */}
        {selectedNote && (
          <NoteDetails note={selectedNote} closeNoteDetails={closeNoteDetails} />
        )}
      </div>
    </div>
  );
}

export default App;
