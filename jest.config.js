module.exports = {
    testEnvironment: 'node',
    testMatch: ['<rootDir>/**/*.test.js'],
    collectCoverage: true,
	collectCoverageFrom: [
    "src/**/*.{js,}"
  ]
};
