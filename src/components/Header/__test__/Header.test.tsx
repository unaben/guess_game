import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header Component", () => {
  it("renders correctly", () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });

  it("renders heading text", () => {
    render(<Header />);
    const headingEl = screen.getByRole("heading", { level: 1 });
    expect(headingEl).toBeInTheDocument();
    expect(headingEl).toHaveTextContent(/Let's play a numbers game/i);
  });

  it("renders paragraph text", () => {
    render(<Header />);
    const paragraphEl = screen.getByTestId("guess");
    expect(paragraphEl).toBeInTheDocument();
    expect(paragraphEl).toHaveTextContent(/Guess a number between 1 and 30/i);
  });
});
