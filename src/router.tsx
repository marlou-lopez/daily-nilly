import { Navigate, ReactLocation, Router } from "@tanstack/react-location";
import { useQueryClient } from "react-query";
import { fetchNotes } from "./hooks/useNotes";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Quests from "./pages/Quests";
import TestComp from "./TestComp";


export const PATHS = {
  HOME: 'home',
  QUESTS: 'quests',
  ACHIEVEMENTS: 'achievements'
}

const location = new ReactLocation();

export const RouterProvider: React.FC = ({ children }) => {
  const queryClient = useQueryClient();
  return (
    <Router
      location={location}
      routes={[
        {
          path: PATHS.HOME,
          element: <Home />,
          loader: () => 
            queryClient.getQueryData("notes") ??
            queryClient.fetchInfiniteQuery("notes", () => fetchNotes()).then(() => ({})),
        },
        {
          path: PATHS.QUESTS,
          children: [
            {
              path: "/",
              element: <Quests />
            },
            {
              path: "/:id",
              element: <TestComp />
            }
          ]
        },
        {
          path: PATHS.ACHIEVEMENTS,
          element: <Profile />
        },
        {
          element: <Navigate to="home"/>
        }
      ]}
    >
      {children}
    </Router>
  )
}