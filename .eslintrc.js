module.exports = {
  root: true,
  extends: 'standard',
  plugins: [
    'json',
    'mocha'
  ],
  rules: {
    'no-unused-vars': 1,
    'linebreak-style': ['warn', 'unix'],
    'brace-style': [2, "1tbs", { "allowSingleLine": false }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    "mocha/no-exclusive-tests": "error"
  }
}
