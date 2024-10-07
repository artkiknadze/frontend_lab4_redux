import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchTheme: (state, action) => {
      state.theme = !state.theme;
    },
  },
});

export const { switchTheme } = themeSlice.actions;
export default themeSlice.reducer;
