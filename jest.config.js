module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleFileExtensions: ['js', 'jsx'],
  testPathIgnorePatterns: ['node_modules/'],
  testMatch: ['**/*.test.(js|jsx)'],
  modulePaths: ['<rootDir>'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      './src/__mocks__/fileMocks.js',
    '\\.(css|less|scss|sass)$': '<rootDir>/src/__mocks__/styleMocks.js',
  },
}
