module.exports = {
  plugins: [
    [
      'semantic-release-chrome',
      {
        extensionId: 'mppjhhbajcciljocgbadbhbgphjfdmhj',
        asset: 'youtube-autoclose-ads.zip',
      },
    ],
    [
      '@semantic-release/github',
      {
        assets: ['youtube-autoclose-ads.zip'],
      },
    ],
  ],
  analyzeCommits: {
    releaseRules: [
      {
        scope: 'manifest',
        release: 'patch',
      },
    ],
  },
}
