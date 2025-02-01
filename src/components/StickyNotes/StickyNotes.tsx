import StickyNote from "../StickyNote/StickyNote";
import { IoCreateOutline } from "react-icons/io5";
import "./StickyNotes.css";
import { NoteProp } from "../../types/interface";
import { getNewNote } from "../../utils";
import useLocalStorage from "../../hooks/useLocalStorage";
import { fakeData } from "../../assets/fakeData";
import { LS_NOTES_KEY } from "../../constants";
import { useEffect, useState } from "react";

const StickyNotes = () => {
  const [lsNotes, setLSNotes] = useLocalStorage<NoteProp[]>(
    LS_NOTES_KEY,
    fakeData
  );
  const [notes, setNotes] = useState(lsNotes);

  useEffect(() => {
    setLSNotes(notes);
  }, notes);

  function handleCreate() {
    const newNotes = [...notes, getNewNote()];
    setNotes(newNotes);
  }

  function handleDelete(id: string) {
    const newNotes = notes.filter((note) => note.$id !== id);
    setNotes(newNotes);
  }

  function handleNotes(updatedNote: NoteProp): void {
    const newNotes = notes.map((note) =>
      note.$id === updatedNote.$id ? updatedNote : note
    );
    setNotes(newNotes);
  }

  return (
    <>
      <section className="create">
        <div className="create-button-wrapper">
          <button className="create-note" onClick={handleCreate}>
            <IoCreateOutline size={24} title="create new note" />
            <p className="side-text">Create note</p>
          </button>
        </div>
      </section>
      <section className="notes-area">
        {notes.length > 0
          ? notes?.map((note: NoteProp) => (
              <StickyNote
                key={note.$id}
                note={note}
                performDelete={() => handleDelete(note.$id)}
                updateNote={handleNotes}
              />
            ))
          : null}
      </section>
    </>
  );
};

export default StickyNotes;
