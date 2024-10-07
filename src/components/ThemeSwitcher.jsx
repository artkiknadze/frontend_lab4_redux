import { switchTheme } from "../slices/themeSlice";

export const ThemeSwitcher = ({ dispatch, theme }) => (
  <button
    className={"button_" + (theme ? "dark" : "light")}
    onClick={() => dispatch(switchTheme())}
  >
    Switch theme to {theme ? "dark" : "light"}
  </button>
);
