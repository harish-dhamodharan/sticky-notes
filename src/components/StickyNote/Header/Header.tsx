import { MdOutlineDelete } from "react-icons/md";
import { AvailableColors, Colors, Position } from "../../../types/types";
import { setZIndex, getColorById } from "../../../utils";
import { ColorPicker } from "../../ColorPicker/ColorPicker";
import "./Header.css";

const Header = ({
  colors,
  setColors,
  setPosition,
  performDelete,
  notesRef,
}: {
  colors: Colors;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
  setColors: React.Dispatch<React.SetStateAction<Colors>>;
  notesRef: React.RefObject<HTMLDivElement>;
  performDelete: any;
}) => {
  let initialPosition = { x: 0, y: 0 };

  function handleMouseMove(e: MouseEvent) {
    if (!notesRef?.current) return;

    const newPos = {
      x: initialPosition.x - e.clientX,
      y: initialPosition.y - e.clientY,
    };

    setPosition({
      x: notesRef.current.offsetLeft - newPos.x,
      y: notesRef.current.offsetTop - newPos.y,
    });

    initialPosition.x = e.clientX;
    initialPosition.y = e.clientY;
  }

  function handleMouseDown(e: React.MouseEvent) {
    setZIndex(notesRef);
    initialPosition.x = e.clientX;
    initialPosition.y = e.clientY;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  }

  function handleMouseUp() {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  }

  function handleColorChange(color: AvailableColors) {
    setColors(getColorById(color));
  }
  return (
    <div
      className="note-header"
      style={{
        backgroundColor: `${colors.colorHeader}`,
      }}
      onMouseDown={handleMouseDown}
    >
      <span
        style={{
          backgroundColor: `${colors.colorBody}`,
        }}
      >
        <MdOutlineDelete onClick={performDelete} />
      </span>
      <ColorPicker selected={colors.id} setNoteColor={handleColorChange} />
    </div>
  );
};

export default Header;
