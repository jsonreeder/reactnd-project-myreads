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
    'no-unused-expressions': 'error',
    'no-trailing-spaces': 'error',
    'object-curly-spacing': ['error', 'always'],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'sort-imports': ['error'],
    'sort-keys': ['error', 'asc'],
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: 'error',
  }
}
