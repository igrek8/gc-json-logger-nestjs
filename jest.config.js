/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,
  rootDir: './src',
  coverageDirectory: '../coverage',
  coveragePathIgnorePatterns: ['<rootDir>/index.ts', '__fixtures__', '__mocks__', 'index.ts', '.d.ts'],
  collectCoverageFrom: ['<rootDir>/**/*.ts'],
  coverageThreshold: {
    global: {
      lines: 100,
      branches: 100,
      functions: 100,
      statements: 100,
    },
  },
};
