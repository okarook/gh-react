import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);

  expect(screen.getByText(/learn react/i)).toBeInTheDocument();
  expect(screen.getByText(/esto es un error/i)).toBeInTheDocument();
});
