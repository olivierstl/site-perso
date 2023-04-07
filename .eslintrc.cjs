// .eslintrc.js ou équivalent

require('@rushstack/eslint-patch/modern-module-resolution')

/* eslint-env node */
module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'plugin:astro/recommended',
    '@vue/eslint-config-typescript',
    'prettier',
    // Gère l'ordre de tous les plugins installés
    'alsacreations'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ['*.astro'],
      // Allows Astro components to be parsed.
      parser: 'astro-eslint-parser',
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro']
      },
      rules: {
        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
      }
    }
    // ...
  ],
  rules: {
    '@typescript-eslint/prefer-function-type': 'off',
    'vue/custom-event-name-casing': ['error', 'kebab-case'],
    'prettier/prettier': 'error'
  },
  plugins: ['prettier']
}
