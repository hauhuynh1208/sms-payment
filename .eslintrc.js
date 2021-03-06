module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['react', 'prettier'],
  globals: {
    window: true,
    document: true,
    navigator: true,
  },
  env: {
    jest: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json', '.android.js', '.ios.js'],
      },
    },
  },
  rules: {
    indent: ['error', 2],
    'max-len': [1, 80, 2, { ignoreComments: true }],
    semi: [2, 'always'],
    'comma-dangle': 'warn',
    camelcase: 'warn',
    'consistent-return': 0,
    'prefer-destructuring': 'warn',
    'no-param-reassign': 'warn',
    'linebreak-style': 0,
    'operator-linebreak': 'off',
    'no-underscore-dangle': 'off',
    'class-methods-use-this': 'off',
    'arrow-parens': 'off',
    'import/prefer-default-export': 'off',
    'no-plusplus': 'off',
    'no-return-assign': 'off',
    'no-prototype-builtins': 'warn',
    'no-use-before-define': ['error', { variables: false }],
    'react/destructuring-assignment': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-uses-vars': [2],
    'react/jsx-uses-react': 1,
    'react/no-unused-state': 'warn',
    'react/sort-comp': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    'react/prefer-stateless-function': 'off',
    'react/prop-types': 'off',
    'react/no-array-index-key': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', 'jsx'],
      },
    ],
  },
};
