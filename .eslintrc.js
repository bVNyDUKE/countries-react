/* eslint-env node */
module.exports = {
  'env': {
    'browser': true,
    'es6': true,
  },
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    'prettier',
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2020,
    'sourceType': 'module'
  },
  'plugins': [],
  'rules': {
    'react/prop-types': 0
  },
  'settings': {
    'react': {
      'version': 'detect'
    }
  },
  'ignorePatterns':[
    'tailwind.config.js',
    '.eslintrc.js'
  ]
}