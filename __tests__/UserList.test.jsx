import { UserList } from "../src/components/UserList";
import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { server } from "../mocks/server";

describe("UserList - Rendering", () => {
  it("should should have text anthony", async () => {
    render(<UserList />);
    expect(await screen.findByText("anthony")).toBeInTheDocument();
    expect(screen.queryByText("No Users")).not.toBeInTheDocument();
  });

  it("should have username mike rendered", async () => {
    server.use(
      rest.get("/api/users", (req, res, ctx) => {
        return res(ctx.json([{ id: 2, username: "mike" }]));
      })
    );
    render(<UserList />);
    expect(await screen.findByText("mike")).toBeInTheDocument();
  });
});
