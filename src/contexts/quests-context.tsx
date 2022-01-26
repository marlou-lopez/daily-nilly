import React from "react";

interface IQuests {
  id: string;
  content: string;
  done: boolean;
}

type Action =
  | { type: "add"; payload: IQuests }
  | { type: "edit"; payload: Pick<IQuests, "id" | "content"> }
  | { type: "delete"; payload: Pick<IQuests, "id"> }
  | { type: "claim"; payload: Pick<IQuests, "id"> };

type Dispatch = (action: Action) => void;
type State = {
  quests: IQuests[];
};
type QuestsProviderProps = { children: React.ReactNode };

export const QuestsContext = React.createContext<
  | {
      state: State;
      dispatch: Dispatch;
    }
  | undefined
>(undefined);

const questsReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "add": {
      return {
        ...state,
      };
    }
    case "edit": {
      return {
        ...state,
      };
    }
    case "delete": {
      return {
        ...state,
      };
    }
    case "claim": {
      return {
        ...state,
      };
    }
    default: {
      throw new Error("Unhandled action type");
    }
  }
};

const QuestsProvider = ({ children }: QuestsProviderProps) => {
  const [state, dispatch] = React.useReducer(questsReducer, { quests: [] });

  const value = { state, dispatch };
  return (
    <QuestsContext.Provider value={value}>{children}</QuestsContext.Provider>
  );
};

const useQuests = () => {
  const context = React.useContext(QuestsContext);
  if (context === undefined) {
    throw new Error("useQuests must be used within a NotesProvider");
  }
  return context;
};

export { QuestsProvider, useQuests };
