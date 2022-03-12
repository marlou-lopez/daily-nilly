import { fireEvent, render, screen } from "@testing-library/react";
import NoteForm from "../../../features/Notes/NoteForm";
import { NotesContext, NotesProvider } from "../../../contexts/notes-context";
jest.mock("uuid", () => ({ v4: () => "123" }));

describe("Notes unit test", () => {
  afterEach(() => {
    jest.clearAllMocks();
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
  });

  test("Submit input - non existing content", () => {
  //   jest.useFakeTimers().setSystemTime(new Date());

  //   expect(mockDispatch).toHaveBeenCalled();
  //   expect(mockDispatch).toHaveBeenCalledWith({
  //     type: "add",
  //     payload: {
  //       id: "123",
  //       date: new Date(),
  //       content: "test",
  //     },
  //   });
  });
});
