// http://eslint.org/docs/user-guide/configuring

module.exports = {
  env: {
    browser: true,
  },
  extends: ['react-app', 'airbnb'],
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
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
  },
};
