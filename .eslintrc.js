module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:jsx-a11y/recommended',
    'plugin:jest/recommended',
    'plugin:jest-dom/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', 'react-hooks', 'jsx-a11y', 'jest', 'jest-dom'],
  rules: {
    'linebreak-style': 0,
    'comma-dangle': ['error', 'never'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/webpack.*.js',
          '**/setupTests.js',
          '**/*.test.js',
          '**/*.test.jsx'
        ]
      }
    ]
  }
};
