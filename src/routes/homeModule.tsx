import React from "react";

const homeModule = {
  element: () => import("../components/Notes/NoteList").then((module) => <module.default />)
};

export default homeModule;