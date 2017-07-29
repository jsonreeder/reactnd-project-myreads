module.exports = {
  parser: 'babel-eslint',
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'max-len': ['error', 100],
    'no-undef': 'error',
    'no-unused-vars': 'error',
    'no-unused-expressions': 'error',
    'no-trailing-spaces': 'error',
    'object-curly-spacing': ['error', 'always'],
    'sort-imports': ['error'],
    'sort-keys': ['error', 'asc'],
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: 'error',
  }
}
