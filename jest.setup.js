import "@testing-library/jest-dom/extend-expect";
import { server } from "./mocks/server";
import "whatwg-fetch";

beforeAll(() => {
  server.listen();
});

// beforeEach(() => {});

afterAll(() => {
  server.close();
});

afterEach(() => {
  server.resetHandlers();
});
