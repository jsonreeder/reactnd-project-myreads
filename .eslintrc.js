module.exports = {
  env: {
    'browser': true,
  },
  parser: 'babel-eslint',
  plugins: [
    'react',
  ],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'max-len': ['error', 100],
    'no-undef': 'error',
    'no-unused-vars': 'error',
    'no-trailing-spaces': 'error',
    'object-curly-spacing': ['error', 'always'],
    'prefer-destructuring': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'sort-imports': 'error',
    'sort-keys': ['error', 'asc'],
    'space-before-function-paren': ['error', 'never'],
    'keyword-spacing': 'error',
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: 'error',
  }
}
