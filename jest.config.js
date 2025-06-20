const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./", // Path to your Next.js app root
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1", // <-- map @/ to project root
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
  },
};

module.exports = createJestConfig(customJestConfig);
