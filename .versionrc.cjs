module.exports = {
  types: [
    {
      type: 'Feat',
      section: 'Features',
    },
    {
      type: 'Fix',
      section: 'Bug Fixes',
    },
    {
      type: 'HOTFIX',
      section: 'Hotfixes',
    },
    {
      type: 'Chore',
      hidden: true,
    },
    {
      type: 'Docs',
      hidden: true,
    },
    {
      type: 'Refactor',
      hidden: true,
    },
    {
      type: 'Perf',
      hidden: true,
    },
    {
      type: 'Test',
      hidden: true,
    },
  ],
  releaseCommitMessageFormat: '[Bump] release {{currentTag}}',
  tagPrefix: '',
  parserOpts: {
    headerPattern: /^\[([a-zA-Z]*)\]\s(.*)$/,
    headerCorrespondence: ['type', 'subject'],
  },
}
