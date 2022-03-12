import React from "react";
import { INotes } from "../features/Notes/types";

type Action =
  | { type: "add"; payload: INotes }
  | { type: "edit"; payload: Pick<INotes, "id" | "content"> }
  | { type: "delete"; payload: Pick<INotes, "id"> };
type Dispatch = (action: Action) => void;
type State = { notes: INotes[] };
type NotesProviderProps = { children: React.ReactNode };

export const NotesContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

const notesReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "add": {
      return {
        ...state,
        notes: [action.payload, ...state.notes],
      };
    }
    case "edit": {
      return {
        ...state,
        notes: state.notes.map((note) => {
          if (note.id === action.payload.id) {
            return {
              ...note,
              content: action.payload.content,
            };
          }
          return note;
        }),
      };
    }
    case "delete": {
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload.id),
      };
    }
    default: {
      throw new Error("Unhandled action type");
    }
  }
};

const NotesProvider = ({ children }: NotesProviderProps) => {
  const [state, dispatch] = React.useReducer(notesReducer, { notes: [] });
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch };
  return (
    <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
  );
};

const useNotesContext = () => {
  const context = React.useContext(NotesContext);
  if (context === undefined) {
    throw new Error("useNotes must be used within a NotesProvider");
  }
  return context;
};

export { NotesProvider, useNotesContext };
