module.exports = {
  setupFilesAfterEnv: ['<rootDir>__tests__/setup/setupEnzyme.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testPathIgnorePatterns: [
    '<rootDir>/.c9/', 'setupEnzyme.js',
    '<rootDir>/__tests__/setup/helpers.js'
  ],
  moduleNameMapper: {
    '^Mock/(.*)$': "<rootDir>/__mocks__/$1",
    '^DATA/(.*)$': "<rootDir>/src/data/$1",
    '^Actions/(.*)$': "<rootDir>/src/actions/$1",
    '^Reducers/(.*)$': "<rootDir>/src/reducers/$1",
    '^Containers/(.*)$': "<rootDir>/src/containers/$1",
    '^Components/(.*)$': "<rootDir>/src/components/$1",
    '^\.\./data/(race|class)Images.js$': "<rootDir>/__mocks__/contextLoader.js",
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/assetsTransformer.js',
    '\\.(css|sass|scss|less)$': '<rootDir>/__mocks__/styleStub.js',
  },
};
