import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import CardMenu from "../../../features/Notes/NoteMenu";

describe("CardMenu unit test", () => {
  const handleDeleteMock = jest.fn();
  const handleEditMock = jest.fn();

  test("Open menu", () => {
    render(
      <CardMenu handleDelete={handleDeleteMock} handleEdit={handleEditMock} id="123"/>
    );

    const menuBtn = screen.getByTestId("menu-icon-123");
    expect(menuBtn).toBeInTheDocument();

    expect(screen.queryByTestId("menu-123")).not.toBeInTheDocument();

    fireEvent.click(menuBtn);
    
    expect(screen.getByTestId("menu-123")).toBeInTheDocument();

  });

  test("handleDeleteMenu handler", () => {
    render(
      <CardMenu handleDelete={handleDeleteMock} handleEdit={handleEditMock} id="123"/>
    );

    fireEvent.click(screen.getByTestId("menu-icon-123"));

    const deleteMenuBtn = screen.getByTestId("delete-menu-123");
    
    fireEvent.click(deleteMenuBtn);

    expect(handleDeleteMock).toHaveBeenCalled();
    expect(handleDeleteMock).toHaveBeenCalledWith("123"); 
  });

  test("handleEditMenu handler", () => {
    render(
      <CardMenu handleDelete={handleDeleteMock} handleEdit={handleEditMock} id="123"/>
    );

    fireEvent.click(screen.getByTestId("menu-icon-123"));

    const editMenuBtn = screen.getByTestId("edit-menu-123");
    
    fireEvent.click(editMenuBtn);

    expect(handleEditMock).toHaveBeenCalled();
    expect(handleEditMock).toHaveBeenCalledWith("123"); 
  })
});
