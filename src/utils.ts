import { NoteProp } from "./types/interface";
import { AvailableColors } from "./types/types";
import { v6 } from "uuid";

export function setZIndex(notesRef: React.RefObject<HTMLDivElement>) {
  if (notesRef?.current == null) return;

  notesRef.current.style.zIndex = "999";
  document.querySelectorAll<HTMLDivElement>(".note").forEach((note) => {
    if (note !== notesRef.current) {
      note.style.zIndex = "998";
    }
  });
}

export function growTextArea(
  textAreaRef: React.RefObject<HTMLTextAreaElement>
) {
  if (!textAreaRef?.current) return;

  textAreaRef.current.style.height = "auto";
  textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
}

export function getNewNote(): NoteProp {
  return {
    $id: v6(),
    text: "",
    colors: getColorById("color-yellow"),
    position: getRandomPosition(),
  };
}

export function getRandomPosition() {
  return {
    x: Math.floor(Math.random() * (window.innerWidth - 400)),
    y: Math.floor(Math.random() * (window.innerHeight - 120)),
  };
}

export function getColorById(colorId: AvailableColors) {
  switch (colorId) {
    case "color-purple":
      return {
        id: "color-purple",
        colorHeader: "#FED0FD",
        colorBody: "#FEE5FD",
        colorText: "#18181A",
      };
    case "color-blue":
      return {
        id: "color-blue",
        colorHeader: "#9BD1DE",
        colorBody: "#A6DCE9",
        colorText: "#18181A",
      };
    case "color-yellow":
    default:
      return {
        id: "color-yellow",
        colorHeader: "#FFEFBE",
        colorBody: "#FFF5DF",
        colorText: "#18181A",
      };
  }
}
