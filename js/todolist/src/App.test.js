import React from "react";
import TodoTable from "./components/TodoTable.js";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("renders todotable", () => {
  const row = [{ description: "Go to coffee", date: "24.12.2023" }]
  render(<TodoTable todos={row} />);
    const tableRow = screen.getByText('Go to coffee');
  expect(tableRow).toBeInTheDocument();
});
