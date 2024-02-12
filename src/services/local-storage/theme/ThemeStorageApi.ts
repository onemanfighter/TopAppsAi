/**
 * Author : Amit Raikwar.
 * Last updated: 11 feb, 2023.
 */
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import { Theme } from "../../../store/slices/ThemeSlice";
import { THEME_STORAGE_KEY } from "../StorageConstants";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Theme check for dark mode.
 */
const themeCheck = getThemeData() === "dark" ? true : false;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Function to get theme data from local storage.
 * @returns theme data from local storage.
 */
function getThemeData() {
  return localStorage.getItem(THEME_STORAGE_KEY);
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Function to set theme data in local storage.
 * @param theme theme data to set in local storage.
 */
function setThemeData(theme: Theme) {
  localStorage.setItem(THEME_STORAGE_KEY, theme);
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Export the functions
export { themeCheck, getThemeData, setThemeData };
