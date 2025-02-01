import { useEffect, useRef, useState } from "react";
import "./StickyNote.css";
import Header from "./Header/Header";
import Body from "./Body/Body";
import { NoteProp } from "../../types/interface";
import { Colors, Position } from "../../types/types";
import React from "react";

const StickyNote = ({
  note,
  performDelete,
  updateNote,
}: {
  note: NoteProp;
  performDelete: Function;
  updateNote: (note: NoteProp) => void;
}) => {
  const notesRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<Position>(note.position);
  const [colors, setColors] = useState<Colors>(note.colors);
  const [text, setText] = useState<string>(note.text);

  useEffect(() => {
    const updatedNote: NoteProp = {
      ...note,
      text,
      colors,
      position,
    };
    updateNote(updatedNote);
  }, [position, colors, text]);

  return (
    <div
      ref={notesRef}
      className="note"
      style={{
        left: `${position?.x}px`,
        top: `${position?.y}px`,
      }}
    >
      <Header
        performDelete={performDelete}
        setPosition={setPosition}
        setColors={setColors}
        colors={colors}
        notesRef={notesRef}
      />
      <Body text={text} setText={setText} colors={colors} notesRef={notesRef} />
    </div>
  );
};

export default StickyNote;
