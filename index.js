module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    requireConfigFile: false,
    babelOptions: {
      plugins: ['@babel/plugin-syntax-import-assertions'],
    },
  },
  globals: {
    test: 'readonly',
  },
  plugins: ['import'],
  rules: {
    camelcase: [
      2,
      {
        properties: 'never',
        ignoreDestructuring: true,
        ignoreImports: true,
        ignoreGlobals: true,
      },
    ],
    'consistent-return': 2,
    'default-case': 2,
    'import/no-unresolved': 2,
    'import/default': 2,
    'import/export': 1,
    'import/first': 1,
    'import/named': 2,
    'import/no-default-export': 1,
    'import/order': 2,
    'no-dupe-keys': 2,
    'no-else-return': 2,
    'no-undef': 2,
    'no-unneeded-ternary': 2,
    'no-unreachable': 2,
    'no-unused-expressions': 2,
    'no-unused-vars': [
      2,
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^[A-Z]',
      },
    ],
    'object-shorthand': 2,
    'operator-assignment': 2,
    'prefer-arrow-callback': 2,
    'require-await': 2,
  },
  settings: {
    'import/core-modules': ['ava'],
    'import/resolver': {
      alias: {
        map: [['#root', './src']],
      },
    },
  },
}
