import { useEffect, useRef } from "react";
import { growTextArea, setZIndex } from "../../../utils";
import "./Body.css";
import { Colors } from "../../../types/types";
import React from "react";

const Body = ({
  colors,
  text,
  notesRef,
  setText,
}: {
  colors: Colors;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  notesRef: React.RefObject<HTMLDivElement>;
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    growTextArea(textAreaRef);
  }, []);

  function handleTextInput() {
    if (textAreaRef.current) {
      setText(textAreaRef.current.value);
    }
  }

  return (
    <div
      className="note-body"
      style={{
        backgroundColor: `${colors.colorBody}`,
        color: `${colors.colorText}`,
      }}
    >
      <textarea
        defaultValue={text}
        ref={textAreaRef}
        onFocus={() => setZIndex(notesRef)}
        onBlur={handleTextInput}
        onInput={() => growTextArea(textAreaRef)}
      />
    </div>
  );
};

export default Body;
