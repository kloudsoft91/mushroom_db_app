module.exports = {
  testEnvironmentOptions: {
      customExportConditions: ["node", "node-addons"],
   },
  rootDir: "./",
  modulePaths: [
    "<rootDir>/"
  ],
  moduleNameMapper: {
      '^~/(.*)$': '<rootDir>/$1',
      '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
      '\\.(jpg|jpeg|png|gif|webp|svg)$': 'identity-obj-proxy',
    },
  moduleFileExtensions: [
    'ts',
    'js',
    'vue',
    'json'
  ],
  setupFiles: ['<rootDir>/test-setup.js'],
  transform: {
      '^.+\\.ts$': 'ts-jest',
      '^.+\\.js$': 'babel-jest',
      '^.+\\.vue$': '@vue/vue3-jest'
    },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/pages/*.vue'
  ],
  testEnvironment: 'jsdom'
}