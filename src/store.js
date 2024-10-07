import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./slices/notesSlice";
import themeReducer from "./slices/themeSlice";

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    theme: themeReducer,
  },
});
