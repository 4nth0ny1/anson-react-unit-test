import { UserList } from "../src/components/UserList";
import { render, screen } from "@testing-library/react";

describe("UserList - Rendering", () => {
  it("should should have text anthony", async () => {
    render(<UserList />);
    expect(await screen.findByText("anthony")).toBeInTheDocument();
  });
});
