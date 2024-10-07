import { removeNote } from "../slices/notesSlice";

export const Note = ({ dispatch, note, theme }) => (
  <li>
    <button
      className={"button_" + (theme ? "dark" : "light")}
      onClick={() => dispatch(removeNote(note.id))}
    >
      X
    </button>
    {note.content}
  </li>
);
