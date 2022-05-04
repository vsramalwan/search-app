import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// eslint-disable-next-line import/extensions
import App from "./App";

test("should renders Checkboxes and SearchBar", () => {
  render(<App />);
  const checboxBulldozer = screen.getByDisplayValue(/bulldozer/i);
  expect(checboxBulldozer).toBeInTheDocument();

  const checboxCompactor = screen.getByDisplayValue(/compactor/i);
  expect(checboxCompactor).toBeInTheDocument();

  expect(screen.queryByPlaceholderText(/search companies/i)).toBeTruthy();
});

test("should be able to search", async () => {
  render(<App />);
  fireEvent.click(screen.getByRole("textbox"));
  expect(screen.getByRole("textbox")).toHaveValue("");

  const user = userEvent.setup();
  await user.type(screen.getByRole("textbox"), "Digitube");
  await waitFor(() => {
    expect(screen.getByRole("textbox")).toHaveValue("Digitube");
  });
});
