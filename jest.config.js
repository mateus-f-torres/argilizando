module.exports = {
  setupTestFrameworkScriptFile: '<rootDir>__tests__/setup/setupEnzyme.js',
  snapshotSerializers: [
    'enzyme-to-json/serializer'
  ],
  testPathIgnorePatterns: [
    '<rootDir>/.c9/',
    'setupEnzyme.js', 
    '<rootDir>/__tests__/setup/helpers.js'
  ],
  moduleNameMapper: {
    '^Store/(.*)$': "<rootDir>/src/store/$1",
    '^Components/(.*)$': "<rootDir>/src/components/$1",
    '^Types/(.*)$': "<rootDir>/types/$1",
    '^Mocks/(.*)$': "<rootDir>/__mocks__/$1",
    '^DATA/(.*)$': "<rootDir>/src/data/$1",
    '^Helpers$': "<rootDir>/__tests__/setup/helpers.js",
    // mock require.context
    '^Context/(race|class)Images.js$': "<rootDir>/__mocks__/contextLoader.js",
    // mock images
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
};
