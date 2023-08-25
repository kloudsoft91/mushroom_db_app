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
      },
    moduleFileExtensions: [
      'ts',
      'js',
      'vue',
      'json'
    ],
    transform: {
        '^.+\\.ts$': 'ts-jest',
        '^.+\\.js$': 'babel-jest',
        '^.+\\.vue$': '@vue/vue3-jest'
      },
    //collectCoverage: true,
    //collectCoverageFrom: [
     // '<rootDir>/components/**/*.vue',
      //'<rootDir>/pages/**/*.vue'
    //],
    testEnvironment: 'jsdom'
  }