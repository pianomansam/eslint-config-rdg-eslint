module.exports = {
  parser: 'babel-eslint',
  extends: [
    'react-app',
    'eslint-config-airbnb-base',
    // 'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    jest: true,
  },
  // plugins: ['prettier'],
  rules: {
    'global-require': 0,
    'no-restricted-syntax': 0,
    'no-await-in-loop': 0,
    'no-return-assign': 0,
    'class-methods-use-this': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'prettier/prettier': [
      1,
      {
        singleQuote: true,
        bracketSpacing: true,
        trailingComma: 'all',
      },
    ],
  },
};
