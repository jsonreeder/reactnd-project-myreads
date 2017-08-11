module.exports = {
  env: {
    'browser': true,
    'mocha': true,
    'node': true,
  },
  extends: [
    'prettier'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  plugins: [
    'react',
    'prettier',
  ],
  rules: {
    'prettier/prettier': ['error', {
      singleQuote: true,
      trailingComma: 'all',
      bracketSpacing: true,
      parser: 'babylon',
    }],
    'no-undef': 'error',
    'no-unused-vars': 'error',
    'no-trailing-spaces': 'error',
    'prefer-destructuring': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-sort-props': 'error',
    'react/jsx-uses-vars': 'error',
    'sort-imports': 'error',
    'sort-keys': ['error', 'asc'],
    'space-before-function-paren': ['error', 'never'],
  }
}
