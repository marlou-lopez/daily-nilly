import { PaletteMode, ThemeOptions } from "@mui/material";

/**
 * Determines which palettes to use base on the mode.
 * @param mode light or dark
 * @returns ThemeOptions object based on the mode
 */
export const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#19345E",
          },
          secondary: {
            main: "#E69E0E",
          },
          background: {
            default: "#f0f2f5",
            paper: "#ffffff"
          }
        }
      : {
        primary: {
          main: "#19345E"
        },
        secondary: {
          main: "#E69E0E",
        },
        background: {
          paper: "#4B6184",
          default: "#132645"
        }
      }),
  },
});
