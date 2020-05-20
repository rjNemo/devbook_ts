module.exports = {
  extends: [
    'react-app',
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript',
  ],
  plugins: ['prettier', 'jest', 'cypress', '@typescript-eslint'],
  // parser: 'babel-eslint',
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  env: {
    browser: true,
    'cypress/globals': true,
    es6: true,
    'jest/globals': true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'prettier/prettier': 'warn',
    'adjacent-overload-signatures': true,
    'ban-comma-operator': true,
    'no-namespace': true,
    'no-parameter-reassignment': true,
    'no-reference': true,
    'no-unnecessary-type-assertion': true,
    'label-position': true,
    'no-conditional-assignment': true,
    'no-construct': true,
    'no-duplicate-super': true,
    'no-duplicate-switch-case': true,
    'no-duplicate-variable': [true, 'check-parameters'],
    'no-shadowed-variable': true,
    'no-empty': [true, 'allow-empty-catch'],
    'no-floating-promises': true,
    'no-implicit-dependencies': true,
    'no-invalid-this': true,
    'no-string-throw': true,
    'no-unsafe-finally': true,
    'no-void-expression': [true, 'ignore-arrow-function-shorthand'],
    'no-duplicate-imports': true,
    // Warn when an empty interface is defined. These are generally not useful.
    'no-empty-interface': {
      severity: 'warning',
    },
    'no-import-side-effect': {
      severity: 'warning',
    },
    'no-var-keyword': {
      severity: 'warning',
    },
    'triple-equals': {
      severity: 'warning',
    },
    deprecation: {
      severity: 'warning',
    },
    'prefer-for-of': {
      severity: 'warning',
    },
    'unified-signatures': {
      severity: 'warning',
    },
    'prefer-const': {
      severity: 'warning',
    },
    'trailing-comma': {
      severity: 'warning',
    },
  },
};
