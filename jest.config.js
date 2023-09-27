// jest.config.js
module.exports = {
    preset: 'jest-expo',
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
    // setupFilesAfterEnv: ['./jest.setup.js'], // if you have a jest setup file
  };
  