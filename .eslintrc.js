module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier', 'react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'react/prop-types': [
      1,
      {
        ignore: ['className', 'children', 'location', 'params', 'location*'],
      },
    ],
    'no-param-reassign': [
      0,
      {
        props: false,
      },
    ],
    'no-console': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
    'react/jsx-filename-extension': 'off',
    'prettier/prettier': 'error',
  },
};
