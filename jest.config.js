module.exports = {
    preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
    cacheDirectory: '<rootDir>/jest-cache',
    moduleFileExtensions: ['js', 'jsx', 'json', 'vue', 'ts', 'tsx'],
    transform: {
        '^.+\\.vue$': 'vue-jest',
        '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
        '^.+\\.tsx?$': 'ts-jest',
    },
    transformIgnorePatterns: ['node_modules'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    snapshotSerializers: ['jest-serializer-vue'],
    testMatch: ['**/src/**/*.spec.(js|jsx|ts|tsx)'],
    testURL: 'http://localhost:8080/',
    watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
    globals: {
        'ts-jest': {
            babelConfig: true,
        },
    },
    collectCoverage: true,
    collectCoverageFrom: ['**/src/**/*.{ts,js,tsx,vue}', '!**/node_modules/**', '!**/src/App.ts', '!**/src/main.ts'],
    coverageDirectory: './coverage',
    verbose: true,
    coverageReporters: ['json', 'text', 'html', 'lcov'],
    coverageThreshold: {
        global: {
            statements: 80,
            branches: 80,
            functions: 80,
            lines: 80,
        },
    },
};
