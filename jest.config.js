module.exports = {
  roots: [
    '<rootDir>/packages',
  ],
  setupFiles: [
    "<rootDir>/__tests__/setupTest.ts"
  ],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  }
}
