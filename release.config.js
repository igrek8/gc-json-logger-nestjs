module.exports = {
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'conventionalcommits',
        releaseRules: [
          {
            type: 'build',
            scope: 'deps',
            release: 'patch',
          },
        ],
      },
    ],
    '@semantic-release/release-notes-generator',
    ['@semantic-release/npm'],
    ['@semantic-release/github'],
  ],
  branches: ['main'],
};
