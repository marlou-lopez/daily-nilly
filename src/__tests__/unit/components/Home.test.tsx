import { fireEvent, render, screen } from "@testing-library/react";
import { NotesContext } from "../../../contexts/notes-context";
import Home from "../../../pages/Home";

describe("Home unit test", () => {

  
  test("Display placeholder for feed", () => {
    const mockDispatch = jest.fn();

    const value = {
      state: {
        notes: [],
      },
      dispatch: mockDispatch,
    };
    render(
      <NotesContext.Provider value={value}>
        <Home />
      </NotesContext.Provider>
    );

    const feedPlaceholder = screen.getByTestId("feed-placeholder");
    expect(feedPlaceholder).toBeInTheDocument();
    expect(feedPlaceholder).toHaveTextContent("Want to note something?");
  });

  test("Display notes", () => {
    const mockDispatch = jest.fn();

    const value = {
      state: {
        notes: [
          {
            id: "1",
            content: "test-content",
            date: new Date(),
          },
          {
            id: "2",
            content: "test-content two",
            date: new Date(),
          },
        ],
      },
      dispatch: mockDispatch,
    };
    render(
      <NotesContext.Provider value={value}>
        <Home />
      </NotesContext.Provider>
    );

    const noteOne = screen.getByTestId("note-1");
    expect(noteOne).toBeInTheDocument();
    expect(noteOne).toHaveTextContent("test-content");
  });

  test("Note handleDelete handler", () => {
    const mockDispatch = jest.fn();

    const value = {
      state: {
        notes: [
          {
            id: "1",
            content: "test-content",
            date: new Date(),
          },
          {
            id: "2",
            content: "test-content two",
            date: new Date(),
          },
        ],
      },
      dispatch: mockDispatch,
    };
    render(
      <NotesContext.Provider value={value}>
        <Home />
      </NotesContext.Provider>
    );
    
    const menuBtn = screen.getByTestId("menu-icon-1");
    expect(menuBtn).toBeInTheDocument();

    fireEvent.click(menuBtn);
    fireEvent.click(screen.getByTestId("delete-menu-1"));

    expect(mockDispatch).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "delete",
      payload: {
        id: "1"
      }
    });
  });

  test("Note handleEdit handler", () => {
    const mockDispatch = jest.fn();

    const value = {
      state: {
        notes: [
          {
            id: "1",
            content: "test-content",
            date: new Date(),
          },
          {
            id: "2",
            content: "test-content two",
            date: new Date(),
          },
        ],
      },
      dispatch: mockDispatch,
    };
    render(
      <NotesContext.Provider value={value}>
        <Home />
      </NotesContext.Provider>
    );
    
    const menuBtn = screen.getByTestId("menu-icon-1");
    expect(menuBtn).toBeInTheDocument();

    fireEvent.click(menuBtn);
    fireEvent.click(screen.getByTestId("edit-menu-1"));
    
    expect((screen.getByTestId("notes-textfield-input") as HTMLInputElement).value).toBe("test-content");
  });
});
