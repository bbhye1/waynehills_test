module.exports = {
  setupFilesAfterEnv: [
    './jest.setup',
    'given2/setup',
  ],
  setupFiles: [
    'jest-plugin-context/setup',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/output/',
    '<rootDir>/dist/',
  ],
};
