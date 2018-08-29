// http://eslint.org/docs/user-guide/configuring
// You may disable eslint by exporting an empty object

module.exports = {
  root: true,
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
  rules: {
    // disable destructure requirement on context, props, and state
    // TODO: we may want to enable this in the future to encourage stateless functions and keeping things DRY
    //       that way the code isn't peppered with `this.state` and you'd be required to pass state into functions
    'react/destructuring-assignment': 'off',
    // require file extensions for all files except the ones listed
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
      },
    ],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['.storybook/**', '**/*.stories.jsx'],
      },
    ],
    // disable warning for linebreak styles for cross platform development
    // TODO: we should find a way to fix this from the dev environment level
    'linebreak-style': 'off',
  },
};
