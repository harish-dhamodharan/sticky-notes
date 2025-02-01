import { getColorById, getRandomPosition } from "./utils";

const LS_NOTES_KEY = "notes";
const NEW_NOTE = {
  $id: Math.floor(Math.random() * 100),
  text: "",
  colors: getColorById("color-yellow"),
  position: getRandomPosition(),
};
export { LS_NOTES_KEY, NEW_NOTE };
