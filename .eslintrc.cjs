/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'plugin:import/recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    'import/no-unresolved': 'off',
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: 'vue',
            group: 'builtin',
            position: 'before'
          }
        ],
        pathGroupsExcludedImportTypes: ['vue'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ]
  }
}
