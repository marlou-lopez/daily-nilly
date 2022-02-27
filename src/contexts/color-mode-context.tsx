import { PaletteMode } from "@mui/material";
import React, { useMemo, useState } from "react"

type ColorModeProviderProps = { children: React.ReactNode };

export const ColorModeContext = React.createContext<{
  mode: PaletteMode,
  toggleColorMode: () => void
} | undefined>(undefined);

const ColorModeProvider = ({ children }: ColorModeProviderProps) => {
  const appTheme = localStorage.getItem("app.theme") as PaletteMode;
  const [mode, setMode] = useState<PaletteMode>(appTheme || "light");
  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
      setMode((prevMode) => {
        const toggledMode = (prevMode === "light" ? "dark" : "light");
        localStorage.setItem("app.theme", toggledMode)
        return toggledMode;
      })
    }
  }), []);

  const value = { mode, toggleColorMode: colorMode.toggleColorMode }

  return (
    <ColorModeContext.Provider value={value}>
      {children}
    </ColorModeContext.Provider>
  )
}

const useColorMode = () => {
  const context = React.useContext(ColorModeContext);
  if (context === undefined) {
    throw new Error("useColorMode must be used within a ColorModeProvier");
  }

  return context;
}

export { ColorModeProvider, useColorMode }