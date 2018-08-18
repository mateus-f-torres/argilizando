module.exports = {
  setupTestFrameworkScriptFile: '<rootDir>__tests__/setup/setupEnzyme.js',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testPathIgnorePatterns: ['<rootDir>/.c9/', 'setupEnzyme.js'],
  moduleNameMapper: {
    '^Mock/(.*)$': "<rootDir>/__mocks__/$1",
    '^Actions/(.*)$': "<rootDir>/src/actions/$1",
    '^Reducers/(.*)$': "<rootDir>/src/reducers/$1",
    '^Containers/(.*)$': "<rootDir>/src/containers/$1",
    '^Components/(.*)$': "<rootDir>/src/components/$1",
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|sass|scss|less)$': 'identity-obj-proxy',
  },
};
