import { Colors, Position } from "./types";

export interface NoteProp {
  $id: string;
  text: string;
  colors: Colors;
  position: Position;
}
