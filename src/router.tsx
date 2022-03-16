import { Navigate, ReactLocation, Router } from "@tanstack/react-location";
import { useQueryClient } from "react-query";
import { fetchNotes } from "./features/Notes/hooks/useNotes";
import Achievements from "./pages/Achievements";
import Notes from "./pages/Notes";
import Profile from "./pages/Profile";
import Quests from "./pages/Quests";
import Rewards from "./pages/Rewards";
import TestPage from "./pages/TestPage";
import TestComp from "./TestComp";


export const PATHS = {
  HOME: 'home',
  NOTES: 'notes',
  QUESTS: 'quests',
  ACHIEVEMENTS: 'achievements',
  PROFILE: 'profile',
  REWARDS: 'rewards',
  TESTPAGE: 'testpage'
}

const location = new ReactLocation();

export const RouterProvider: React.FC = ({ children }) => {
  const queryClient = useQueryClient();
  return (
    <Router
      location={location}
      routes={[
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
          path: PATHS.NOTES,
          element: <Notes />,
          loader: () =>
          queryClient.getQueryData("notes") ??
          queryClient.fetchInfiniteQuery("notes", () => fetchNotes()).then(() => ({})),
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
          path: PATHS.TESTPAGE,
          element: <TestPage />
        },
        {
          element: <Navigate to="quests" />
        }
      ]}
    >
      {children}
    </Router>
  )
}