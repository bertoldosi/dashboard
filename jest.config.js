const path = require("path");

module.exports = {
  rootDir: path.join(__dirname, "."),
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  setupFilesAfterEnv: ["<rootDir>/.jest/jest-setup.js"],
  moduleNameMapper: {
    "@Common/*": ["<rootDir>/src/components/common/*"],
    "@Containers/*": ["<rootDir>/src/components/containers/*"],
    "@Assets/*": ["<rootDir>/src/assets/*"],
    "@Constants/*": ["<rootDir>/src/constants/*"],
    "@Contexts/*": ["<rootDir>/src/contexts/*"],
    "@Hooks/*": ["<rootDir>/src/hooks/*"],
    "@Icons*": ["<rootDir>/src/icons/"],
    "@Pages/*": ["<rootDir>/src/pages/*"],
  },
};
