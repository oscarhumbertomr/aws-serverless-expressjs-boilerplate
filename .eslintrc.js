module.exports = {
  env: {
    node: true,
    es6: true,
    commonjs: true,
    'jest/globals': true
  },
  globals: {
    myCustomGlobal: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2022
  },
  extends: ['standard', 'plugin:jest/recommended'],
  plugins: ['jest']
  // ...other config
}
