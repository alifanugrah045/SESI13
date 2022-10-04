import { fireEvent, render, screen, waitFor } from "@testing-library/react";
// import App from "./App";
import { BrowserRouter } from "react-router-dom";
import CommentPage from "./CommentPage";

test("renders learn react link", async () => {
  render(
    <BrowserRouter>
      <CommentPage />
    </BrowserRouter>,
  );


  const btn2 = screen.getByRole("button");
  expect(btn2).toBeInTheDocument();
  expect(btn2).toHaveTextContent("Back Home");

  const comment = await waitFor(() => {
    return screen.findByText('id labore ex et quam laborum')
  }, {timeout: 5000})
  expect(comment).toBeInTheDocument()

  const linkElement = screen.getByText(/Comment/i);
  expect(linkElement).toBeInTheDocument();
});
