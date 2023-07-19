import { rest } from "msw";

export const handlers = [
  rest.get("https://localhost:3000/api/users", (req, res, ctx) => {
    return res(ctx.json([{ id: 1, username: "anthony" }]));
  }),
];
