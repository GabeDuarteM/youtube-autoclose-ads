module.exports = {
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        releaseRules: [{ scope: 'manifest', release: 'patch' }],
      },
    ],
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
}
