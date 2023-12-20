module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'Feat',
        'Fix',
        'HOTFIX',
        'Chore',
        'Docs',
        'Test',
        'Refactor',
        'Perf',
        'Bump',
      ],
    ],
    'subject-empty': [2, 'never'],
    'subject-max-length': [2, 'always', 100],
    'scope-empty': [0, 'always'],
    'type-case': [2, 'always', 'pascal-case'],
    'header-max-length': [2, 'always', 100],
  },
  parserPreset: {
    parserOpts: {
      headerPattern: /^\[([a-zA-Z]*)\]\s(.*)$/,
      headerCorrespondence: ['type', 'subject'],
    },
  },
}
