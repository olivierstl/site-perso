// .eslintrc.js ou équivalent

require('@rushstack/eslint-patch/modern-module-resolution')

/* eslint-env node */
module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    // Gère l'ordre de tous les plugins installés
    'alsacreations'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    "@typescript-eslint/prefer-function-type": "off",
    "vue/custom-event-name-casing": ["error", "kebab-case"]
  }
}
