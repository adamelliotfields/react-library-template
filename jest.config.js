const createJestConfig = require('react-scripts/scripts/utils/createJestConfig');
const path = require('path');

const jestConfig = createJestConfig((relativePath) =>
  path.join(__dirname, 'node_modules', 'react-scripts', relativePath),
);

module.exports = {
  ...jestConfig,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/stories/**/*.{js,jsx,ts,tsx}',
    '!src/index.ts',
    '!src/setupTests.js',
  ],
};
