import { useDispatch, useSelector } from "react-redux";
import { addNote } from "./slices/notesSlice";
import "./App.css";
import { useState } from "react";
import { Note } from "./components/Note";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

export const App = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes.notes);
  const theme = useSelector((state) => state.theme.theme);

  const [note, setNote] = useState("");

  const onAddNoteClicked = () => {
    const newNote = { id: Date.now(), content: note };
    dispatch(addNote(newNote));
    setNote("");
  };

  return (
    <div className={"app " + (theme ? "dark" : "light")}>
      <ThemeSwitcher dispatch={dispatch} theme={theme} />
      <br />

      <input
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className={"input_" + (theme ? "dark" : "light")}
        placeholder="enter your note here..."
      />
      <button
        className={"button_" + (theme ? "dark" : "light")}
        onClick={onAddNoteClicked}
      >
        create note
      </button>

      <ul>
        {notes.map((note) => (
          <Note key={note.id} dispatch={dispatch} note={note} theme={theme} />
        ))}
      </ul>
    </div>
  );
};
