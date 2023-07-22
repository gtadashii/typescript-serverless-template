export default {
  collectCoverage: true,
  coveragePathIgnorePatters: ["/node_modules/"],
  moduleDirectories: ["node_modules"],
  testMatch: ["**/*.test.ts"],
  transform: {
    '^.+\\.ts?$': [
      'esbuild-jest',
      {
        sourcemap: true,
      },
    ],
  },
};