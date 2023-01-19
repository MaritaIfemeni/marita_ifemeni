import React from "react";
import TodoTable from "./components/TodoTable.js";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom/extend-expect";

test("renders todotable", () => {
  const row = [{ description: "Go to coffee", date: "24.12.2023" }]
  render(<TodoTable todos={row} />);
    const tableRow = screen.getByText('Go to coffee');
  expect(tableRow).toBeInTheDocument();
//test that clear all button clears the table
  fireEvent.click(screen.getByText('Clear all', { selector: 'button' })); 
  expect(tableRow).not.toBeInTheDocument();
})

test('add todo',() => {
  render(<App/>);
  fireEvent.click(screen.getByText('To Do List'))

  const desc = screen.getByPlaceholderText('Description');
  fireEvent.change(desc, { target: { value: 'Go to coffee' } })
  const date = screen.getByPlaceholderText('Date');
  fireEvent.change(date, { target: { value: '29.11.2022' } })

  fireEvent.click(screen.getByText('Add'));
  const tableRow = screen.getByText('Go to coffee');
  expect(tableRow).toBeInTheDocument();
  
});
