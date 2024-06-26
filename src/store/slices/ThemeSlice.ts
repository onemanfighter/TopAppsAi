/**
 * Author: Amit raikwar
 * Last updated: 04 Feb, 2024
 */
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  getThemeData,
  setThemeData,
} from "../../services/local-storage/theme/ThemeStorageApi";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Theme types.
 */
enum Theme {
  LIGHT = "light",
  DARK = "synthwave",
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Theme state.
 */
interface ThemeState {
  theme: Theme;
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Initial theme state.
 */
const initialTheme: ThemeState = {
  theme: getThemeData() === Theme.DARK ? Theme.DARK : Theme.LIGHT,
};

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * The name of the theme slice.
 */
const THEME = "theme";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * The theme slice.
 */
export const themeSlice = createSlice({
  name: THEME,
  initialState: initialTheme,
  reducers: {
    setTheme: (_state: ThemeState, action: PayloadAction<ThemeState>) => {
      setThemeData(action.payload.theme);
      return action.payload;
    },
    getTheme: (_state: ThemeState, action: PayloadAction<ThemeState>) => {
      return action.payload;
    },
  },
});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Export the theme slice.
export const { setTheme, getTheme } = themeSlice.actions;
export default themeSlice.reducer;

export type { ThemeState };
export { Theme };

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// End of file
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
