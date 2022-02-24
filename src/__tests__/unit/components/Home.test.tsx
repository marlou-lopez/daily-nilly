import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { setupServer } from "msw/node"
import { NotesContext } from "../../../contexts/notes-context";
import Home from "../../../pages/Home";
import { rest } from "msw";

describe("Home unit test", () => {

  const JSONPlaceholderURL = (path: string) => {
    return new URL(path, "https://jsonplaceholder.typicode.com").toString();
  }

  const server = setupServer(
    rest.get(JSONPlaceholderURL('/posts'), (req, res, ctx) => {
      return res(ctx.status(200), ctx.json([
        {
          id: 1,
          title: "SampleTitle01",
          body: "SampleBody01"
        },
        {
          id: 2,
          title: "SampleTitle01",
          body: "SampleBody01"
        },
        {
          id: 3,
          title: "SampleTitle01",
          body: "SampleBody01"
        },
        {
          id: 4,
          title: "SampleTitle01",
          body: "SampleBody01"
        },
        {
          id: 5,
          title: "SampleTitle01",
          body: "SampleBody01"
        }
      ]))
    })
  )

  let queryClient = new QueryClient();
  // establish API mocking before all tests
  beforeAll(() => server.listen())
  // reset any request handlers that are declared as a part of our tests
  // (i.e. for testing one-time error scenarios)
  afterEach(() => server.resetHandlers())
  // clean up once the tests are done
  afterAll(() => server.close())

  // test("Display placeholder for feed");

  test("Display notes", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    );
    await waitFor(() => {
      const noteOne = screen.getByTestId("note-1");
      expect(noteOne).toHaveTextContent("SampleBody01");
    })

  });

  // test("Note handleDelete handler");

  // test("Note handleEdit handler");
});
