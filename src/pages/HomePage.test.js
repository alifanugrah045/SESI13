import { fireEvent, render, screen } from "@testing-library/react";
// import App from "./App";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";

test("renders learn react link", () => {
  render(
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>,
  );
  const linkElement = screen.getByText(/Why do we need/i);
  expect(linkElement).toBeInTheDocument();

  const linkElement1 = screen.getByText(/To guarantee our code quality.And to show the people that we also care about it and wish to give something that already proven, at least by ourself/i);
  expect(linkElement1).toBeInTheDocument();

  const btn1 = screen.getByRole("button");
  expect(btn1).toBeInTheDocument();
  expect(btn1).toHaveTextContent("Go To Data Comments");

  // fireEvent.click(btn1);

  // const btn2 = screen.getByRole("button");
  // expect(btn2).toBeInTheDocument();
  // expect(btn2).toHaveTextContent("Back Home");
});
