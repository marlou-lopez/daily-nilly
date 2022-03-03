import React, { useContext, useReducer } from "react";
import CreateNoteModal from "../components/Modals/CreateNoteModal";
import CreateQuestModal from "../components/Modals/CreateQuestModal";

export enum ModalTypes {
  CREATE_NOTE,
  CREATE_QUEST
}


type Action =
  | { type: "open", modalType: ModalTypes, modalProps?: any }
  | { type: "close", modalType: ModalTypes, modalProps?: any }
type Dispatch = (action: Action) => void;
type State = { isOpen: boolean, modalType: ModalTypes, modalProps: any }

type ModalContextProps = { children: React.ReactNode }

const ModalContext = React.createContext<{
  state: State;
  dispatch: Dispatch
} | undefined>(undefined);


const modalReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "open": {
      return {
        ...state,
        isOpen: true,
        modalType: action.modalType,
        modalProps: {
          ...state.modalProps,
          ...action?.modalProps
        },
      }
    }
    case "close": {
      return {
        isOpen: false,
        modalType: action.modalType,
        modalProps: {
          ...state.modalProps,
          ...action?.modalProps
        },
      }
    }
    default: {
      throw new Error("Unhandled action type")
    }
  }
}

const ModalProvider = ({ children }: ModalContextProps) => {
  const [state, dispatch] = useReducer(modalReducer, { isOpen: false, modalType: ModalTypes.CREATE_NOTE, modalProps: {} })

  const renderModal = () => {
    switch (state.modalType) {
      case ModalTypes.CREATE_NOTE: {
        return (
          <CreateNoteModal />
        )
      }
      case ModalTypes.CREATE_QUEST: {
        return (
          <CreateQuestModal />
        )
      }
    }
  }

  return (
    <ModalContext.Provider value={{ state, dispatch }}>
      {renderModal()}
      {children}
    </ModalContext.Provider>
  )
}

const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }

  return context;
}

export { ModalProvider, useModal };