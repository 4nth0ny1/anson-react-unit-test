import { render, screen } from "@testing-library/react";
import Home from "../src/app/page";

describe("Home Page - Rendering", () => {
  it("should have Home Page text", () => {
    render(<Home />);
    const title = screen.getByText(/Home Page/i);
    expect(title).toBeInTheDocument();
  });

  it("should have button with text Click Me", () => {
    render(<Home />);
    const button = screen.getByRole("button", { name: "Click Me" });
    expect(button).toBeInTheDocument();
  });

  it("should have an input with label randomText", () => {
    render(<Home />);
    const input = screen.getByLabelText(/Enter Random Text/i);
    expect(input).toBeInTheDocument();
  });
});
