import { Navigate, ReactLocation, Router } from "@tanstack/react-location";
import { useQueryClient } from "react-query";
import { fetchNotes } from "./features/Notes/hooks/useNotes";
import Achievements from "./pages/Achievements";
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import Profile from "./pages/Profile";
import Quests from "./pages/Quests";
import Rewards from "./pages/Rewards";
import TestComp from "./TestComp";


export const PATHS = {
  HOME: 'home',
  NOTES: 'notes',
  QUESTS: 'quests',
  ACHIEVEMENTS: 'achievements',
  PROFILE: 'profile',
  REWARDS: 'rewards'
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
        },
        {
          path: PATHS.NOTES,
          element: <Notes />,
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
          path: PATHS.PROFILE,
          element: <Profile />
        },
        {
          path: PATHS.ACHIEVEMENTS,
          element: <Achievements />
        },
        {
          path: PATHS.REWARDS,
          element: <Rewards />
        },
        {
          element: <Navigate to="home" />
        }
      ]}
    >
      {children}
    </Router>
  )
}