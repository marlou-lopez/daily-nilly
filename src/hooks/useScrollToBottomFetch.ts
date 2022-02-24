import { useEffect } from "react";

interface IScrollToBottomFetch {
  fetchNextPage: Function;
  hasNextPage?: boolean;
  isFetching: boolean;
}

export default function useScrollToBottomFetch({ fetchNextPage, hasNextPage, isFetching}: IScrollToBottomFetch) {
  useEffect(() => {
    const onScroll: EventListener = async (event: Event) => {
      const targetDoc: Document = event.target as Document;
      const { scrollHeight, scrollTop, clientHeight } = targetDoc.scrollingElement as Element;

      if (!isFetching && scrollHeight - scrollTop <= clientHeight * 1.05) {
        if (hasNextPage) await fetchNextPage();
      }
    }
    document.addEventListener("scroll", onScroll)
    return () => {
      document.removeEventListener("scroll", onScroll)
    }
  }, [isFetching, hasNextPage, fetchNextPage])
}