import { render, screen } from "@testing-library/react";
import Home from "../src/app/page";
import userEvent from "@testing-library/user-event";

describe("Home Page", () => {
  describe("Rendering", () => {
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

    it("should have an input with label Enter Specific Text", () => {
      render(<Home />);
      const input = screen.getByLabelText(/Enter Specific Text/i);
      expect(input).toBeInTheDocument();
    });

    it("should find input field by display value", () => {
      render(<Home />);
      const audi = screen.getByDisplayValue(/AUDI/);
      expect(audi).toBeInTheDocument();
    });

    it("should not find element with text: This is the text!", () => {
      render(<Home />);
      const text = screen.queryByText(/This is the text!/i);
      expect(text).not.toBeInTheDocument();
    });
  });

  describe("Behavior", () => {
    it("should click on show text button and find new text", async () => {
      const user = userEvent;

      render(<Home />);

      const button = screen.getByRole("button", { name: /Show Text/i });
      const beforeClickText = screen.queryByText(/This is the text!/i);
      expect(beforeClickText).not.toBeInTheDocument();

      await user.click(button);

      const afterClickText = screen.getByText(/This is the text!/i);
      expect(afterClickText).toBeInTheDocument();
    });
  });
});
