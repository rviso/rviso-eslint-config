'use strict'

module.exports = {
  root: true, // 作用于当前目录及其子目录
  extends: ['@rviso/eslint-config-standard'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['@rviso/eslint-config-typescript'],
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    },
    {
      files: ['*.vue'],
      extends: ['@rviso/eslint-config-vue'],
      parserOptions: {
        parser: '@typescript-eslint/parser'
      },
      rules: {
        'prettier/prettier': 'off'
      }
    }
  ]
}
