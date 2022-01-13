import React from "react";

interface Notes {
  content: string
}

type Action = { type: "add", payload: Notes } | { type: "update" } | { type: "delete"};
type Dispatch = (action: Action) => void;
type State = { notes: Notes[] };
type NotesProviderProps = { children: React.ReactNode };

const NotesContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

const notesReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'add': {
      return {
        notes: [...state.notes, action.payload]
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

const NotesProvider = ({children}: NotesProviderProps) => {
  const [state, dispatch] = React.useReducer(notesReducer, {notes: []})
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = {state, dispatch}
  return (
    <NotesContext.Provider value={value}>
      {children}
    </NotesContext.Provider>
  )
}

const useNotes = () => {
  const context = React.useContext(NotesContext);
  if (context === undefined) {
    throw new Error('useNotes must be used within a NotesProvider');
  }
  return context;
}

export {NotesProvider, useNotes}