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

      // will fail if the onClick is delayed.
      //   const afterClickText = screen.getByText(/This is the text!/i);
      //   expect(afterClickText).toBeInTheDocument();

      // find by is better here, because if the button cannot be found then it will throw an error and the test will fail. Find by is used because we know that state needs to be updated, modals appears, button to appear or any element to appear, etc.
      // waitFor is also an option here and will done later. Where you wait for something to be true.
      //   const afterClickText = await screen.findByText(/This is the text!/i);
      //   expect(afterClickText).toBeInTheDocument();

      // also you can add a wait time to make sure the element exists before running the expect
      const afterClickTextWithTimeout = await screen.findByText(
        "This is the text!",
        {},
        { timeout: 5000 }
      );
      expect(afterClickTextWithTimeout).toBeInTheDocument();
    });
  });
});
