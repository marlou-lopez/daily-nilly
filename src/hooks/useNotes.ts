import { useQuery } from "react-query";
import { INotes } from "../contexts/notes-context";

export default function useNotes() {
  return useQuery<INotes[]>("notes", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return response.json();
  })
}