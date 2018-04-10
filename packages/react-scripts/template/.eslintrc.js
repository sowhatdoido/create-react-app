// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    browser: true,
  },
  extends: ['react-app', 'airbnb'],
  // Allows ESLint to resolve alias defined in react-scripts' webpack config
  settings: {
    'import/resolver': {
      webpack: {
        config: require.resolve(
          '@sowhatdoido/react-scripts/config/webpack.config.dev.js'
        ),
      },
    },
  },
  // add your custom rules here
  rules: {
    'jsx-a11y/href-no-hash': 'off', // This rule is used in CRA but has been removed in the later version of jsx-a11y used by airbnb
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
      },
    ],
    // allow optionalDependencies
    // 'import/no-extraneous-dependencies': ['error', {
    //   'optionalDependencies': ['test/unit/index.js']
    // }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
  },
};
