import React, { useMemo, useState } from "react"

type ColorModeProviderProps = { children: React.ReactNode };

export const ColorModeContext = React.createContext<{
  mode: "light" | "dark",
  toggleColorMode: () => void
} | undefined>(undefined);

const ColorModeProvider = ({children}: ColorModeProviderProps) => {
  const [mode, setMode] = useState<"light" | "dark">("light");
  console.log(mode)
  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
      setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    }
  }), []);

  const value = {mode, toggleColorMode: colorMode.toggleColorMode }

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

export {ColorModeProvider, useColorMode}