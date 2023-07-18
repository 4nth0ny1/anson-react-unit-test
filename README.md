# React Testing Crash Course with Next.js (JavaScript Version)

https://www.youtube.com/watch?v=Q-Sg4p_iQvw&t=6538s

## Setup

npx create-next-app@latest
✔ What is your project named? … anson-react-unit-test
✔ Would you like to use TypeScript? … No
✔ Would you like to use ESLint? … Yes
✔ Would you like to use Tailwind CSS? … No
✔ Would you like to use `src/` directory? … Yes
✔ Would you like to use App Router? (recommended) … Yes
✔ Would you like to customize the default import alias? … No

## install dependencies

npm i -D jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom

## go to nextjs docs and copy/paste into jest.config.mjs

https://nextjs.org/docs/pages/building-your-application/optimizing/testing#jest-and-react-testing-library

```
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  testEnvironment: 'jest-environment-jsdom',
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)
```

## create jest.setup.js

get line from nextjs docs
https://nextjs.org/docs/pages/building-your-application/optimizing/testing#jest-and-react-testing-library

```
import "@testing-library/jest-dom/extend-expect";

```

## add script to package.json

```
    "test": "jest",
    "test:watch": "jest --watchAll"
```

## eslint setup

npm i -D eslint-plugin-testing-library eslint-plugin-jest-dom

change the eslintrc.json file to this

```
{
  "extends": [
    "next/core-web-vitals",
    "plugin:testing-library/react",
    "plugin:jest-dom/recommended"
  ]
}

```

## create a (**tests**) folder in root ( markdown doesn't like the double underscore)

create file index.test.jsx

```
describe("hello", () => {
  it("hello", () => {
    expect(1).toBe(1);
  });
});

```

npm test

should pass without error
