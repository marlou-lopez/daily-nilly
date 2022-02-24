import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../../../App";
import { ColorModeProvider } from "../../../contexts/color-mode-context";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import { getDesignTokens } from "../../../utils/theme-utils";
import { QueryClient, QueryClientProvider } from "react-query";

const customRender = (
  ui: React.ReactNode,
  { providerProps, ...renderOptions }: any
) => {
  const queryClient = new QueryClient();
  const theme = createTheme(getDesignTokens("light"));
  return render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ColorModeProvider {...providerProps}>
          <ThemeProvider theme={theme}>{ui}</ThemeProvider>
        </ColorModeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};


test("renders app", () => {
  customRender(<App />, {});
  const title = screen.getByText("Dayless");
  expect(title).toBeTruthy();
});

test("Theme switching", async () => {
  customRender(<App />, {});
  let lightModeBtn = screen.getByTestId("light-mode-btn");
  expect(lightModeBtn).toBeInTheDocument();

  fireEvent.click(lightModeBtn);

  expect(screen.queryByTestId("light-mode-btn")).not.toBeInTheDocument();

  const darkModeBtn = screen.getByTestId("dark-mode-btn");
  expect(darkModeBtn).toBeInTheDocument();

  fireEvent.click(darkModeBtn);

  expect(screen.queryByTestId("dark-mode-btn")).not.toBeInTheDocument();
});


test("app navigation", () => {
  customRender(<App />, {});

  expect(screen.getByTestId("feed-header-title")).toHaveTextContent("Home");

  const questsLink = screen.getByTestId("sidebar-quests-link");

  fireEvent.click(questsLink);

  expect(screen.getByTestId("feed-header-title")).toHaveTextContent("Quests");

  const profileLink = screen.getByTestId("sidebar-profile-link");
  fireEvent.click(profileLink);

  expect(screen.getByTestId("feed-header-title")).toHaveTextContent("Profile");

})