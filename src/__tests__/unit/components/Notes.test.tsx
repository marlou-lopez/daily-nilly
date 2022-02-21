import { fireEvent, render, screen } from "@testing-library/react";
import NoteForm from "../../../components/Notes/NoteForm";
import { NotesContext, NotesProvider } from "../../../contexts/notes-context";
jest.mock("uuid", () => ({ v4: () => "123" }));

describe("Notes unit test", () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.useRealTimers();
  });

  test("Textfield input", () => {
    render(
      <NotesProvider>
        <NoteForm id="123" content="test content" />
      </NotesProvider>
    );

    const textFieldInput = screen.getByTestId(
      "notes-textfield-input"
    ) as HTMLInputElement;
    fireEvent.change(textFieldInput, {
      target: {
        value: "test",
      },
    });

    expect(textFieldInput.value).toBe("test");
  });

  test("Submit input - existing content", () => {
    const mockDispatch = jest.fn();
    const value = {
      state: {
        notes: [],
      },
      dispatch: mockDispatch,
    };
    render(
      <NotesContext.Provider value={value}>
        <NoteForm id="123" content="test" />
      </NotesContext.Provider>
    );

    const textFieldInput = screen.getByTestId(
      "notes-textfield-input"
    ) as HTMLInputElement;
    fireEvent.change(textFieldInput, {
      target: {
        value: "test-edit",
      },
    });

    fireEvent.submit(textFieldInput);

    expect(mockDispatch).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "edit",
      payload: {
        id: "123",
        content: "test-edit",
      },
    });
  });

  test("Submit input - non existing content", () => {
    jest.useFakeTimers().setSystemTime(new Date());
    const mockDispatch = jest.fn();

    const value = {
      state: {
        notes: [],
      },
      dispatch: mockDispatch,
    };
    render(
      <NotesContext.Provider value={value}>
        <NoteForm id="" content="" />
      </NotesContext.Provider>
    );

    const textFieldInput = screen.getByTestId(
      "notes-textfield-input"
    ) as HTMLInputElement;
    fireEvent.change(textFieldInput, {
      target: {
        value: "test",
      },
    });

    fireEvent.submit(textFieldInput);

    expect(mockDispatch).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "add",
      payload: {
        id: "123",
        date: new Date(),
        content: "test",
      },
    });
  });
});
