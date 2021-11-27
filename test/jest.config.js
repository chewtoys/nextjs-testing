const { pathsToModuleNameMapper } = require("ts-jest/utils");
const { compilerOptions } = require("../tsconfig.json");

const paths = compilerOptions.paths ? compilerOptions.paths : {};

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    rootDir: "../",
    testEnvironment: "jsdom",
    moduleFileExtensions: ["ts", "tsx", "js", "json", "jsx"],
    transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$"],
    // transform: {
    //     "^.+\\.(ts|tsx)$": "ts-jest",
    // },
    
    preset: 'ts-jest',
    // testPathIgnorePatterns: ["<rootDir>[/\\\\](node_modules|.next)[/\\\\]"],
    setupFilesAfterEnv: ["<rootDir>/test/jest.setup.ts"],
    testPathIgnorePatterns: [
        "<rootDir>/.next/",
        "<rootDir>/node_modules/",
        "<rootDir>/cypress/",
        "<rootDir>/webdriverio/",
    ],
    moduleNameMapper: {
        ...pathsToModuleNameMapper(paths, { prefix: "<rootDir>/" }),
        "\\.(scss|sass|css)$": "identity-obj-proxy",
    },
};

// module.exports = {
//     roots: ['<rootDir>'],
//     testEnvironment: 'jsdom',
//     moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
//     testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
//     transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
//     transform: {
//       '^.+\\.(ts|tsx)$': 'babel-jest',
//     },
//     watchPlugins: [
//       'jest-watch-typeahead/filename',
//       'jest-watch-typeahead/testname',
//     ],
//     moduleNameMapper: {
//       '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
//       '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
//     },
//   }
