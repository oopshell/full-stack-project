import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import Note from "./Note";
import CreateNote from "./CreateNote";
import "../styles/Note.css";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(true);

  // get text and store in inputText
  const textHandler = (e) => {
    setInputText(e.target.value);
  };

  // add new note
  const addNote = () => {
    // setNotes([...notes, inputText]);
    // When setState needs to refer to previous state,
    // pass a callback function
    setNotes((prevNotes) => [...prevNotes, { id: uuid(), text: inputText }]);
    setInputText("");
  };

  const deleteNote = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
    setLoading(false);
  }, []); // the [] inside useEffect(()=>{},[]) cannot be removed, otherwise the page will be refreshed and re-rendered like crazy and unable to stop. And error in console - Warning: Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.

  //   useEffect(() => {
  //     localStorage.setItem("notes", JSON.stringify(notes));
  //   }, [notes]); // will be called when component re-renders or notes changes
  // when loading do not show items:
  useEffect(() => {
    if (loading) {
      return;
    }
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes, loading]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="notes">
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          deleteNote={deleteNote}
        />
      ))}
      <CreateNote
        textHandler={textHandler}
        addNote={addNote}
        inputText={inputText}
      />
    </div>
  );
};

export default Notes;
