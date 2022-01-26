module.exports = {
  env: {
    node: true,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser', // // Specifies the ESLint parser
    sourceType: 'module', // Allows for the use of imports
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  rules: {
    /** off **/
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-undef': 'off',
    'no-useless-escape': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-unused-vars': 'off',
    /** warn **/
    /** error **/
    'no-console': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
  },
};
