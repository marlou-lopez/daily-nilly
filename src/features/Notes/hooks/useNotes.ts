import { useInfiniteQuery } from "react-query";
import { INotes } from "../types";

export const fetchNotes = async (page: number = 1): Promise<INotes[]> => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}`);
  return response.json();
}

export default function useNotes() {
  return useInfiniteQuery('notes', ({ pageParam = 1 }) => fetchNotes(pageParam), {
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return lastPage.length > 0 ? nextPage : undefined;
    }
  })
}