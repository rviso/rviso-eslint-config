# Blanc Nova ESLint Config

**English** | [中文](./README_zh-CN.md)

![npm](https://img.shields.io/npm/v/@blanc-nova/eslint-config-vue)
![node](https://img.shields.io/badge/node-%5E18.0.0-bluegreen)
![author](https://img.shields.io/badge/author-lingann-purple)
![license](https://img.shields.io/github/license/lingann/blanc-nova-eslint-config)

---

Blanc Nova's ESLint configurations. you can use this package to lint your JavaScript, TypeScript, and Vue3 projects.

## Installation

To install this package, run the following command:

```bash
npm install eslint @blanc-nova/eslint-config-standard @blanc-nova/eslint-config-typescript @blanc-nova/eslint-config-vue --save-dev
```

## Usage

Create a `.eslintrc` file in the root directory of your project with the following content:

```json
{
  "extends": ["@blanc-nova/eslint-config-standard"],
  "overrides": [
    {
      "files": ["*.ts", "*.tsx"],
      "extends": "@blanc-nova/eslint-config-typescript"
    },
    {
      "files": ["*.vue"],
      "extends": "@blanc-nova/eslint-config-vue"
    }
  ]
}
```

if you are using Vue 3 + TypeScript, you can use the following configuration:

```json
{
  "extends": ["@blanc-nova/eslint-config-standard"],
  "overrides": [
    {
      "files": ["*.ts", "*.tsx"],
      "extends": "@blanc-nova/eslint-config-typescript"
    },
    {
      "files": ["*.vue"],
      "extends": "@blanc-nova/eslint-config-vue",
      "parserOptions": {
        "parser": "@typescript-eslint/parser"
      }
    }
  ]
}
```

## Vscode Settings

If you are using Visual Studio Code, you can add the following settings to your `settings.json` file:

```json
{
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "eslint.enable": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "html",
    "vue-html",
    "json",
    "jsonc",
    "markdown",
    "yaml"
  ]
}
```

To make these settings take effect, you need to install the following plugins:

- [ESLint - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Volta - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=volta.volta)

## License

[MIT](./LICENSE)

## Related

- [@blanc-nova/eslint-config-standard](https://www.npmjs.com/package/@blanc-nova/eslint-config-standard) - Blanc Nova's ESLint standard configurations.
- [@blanc-nova/eslint-config-typescript](https://www.npmjs.com/package/@blanc-nova/eslint-config-typescript) - Blanc Nova's ESLint TypeScript configurations.
- [@blanc-nova/eslint-config-vue](https://www.npmjs.com/package/@blanc-nova/eslint-config-vue) - Blanc Nova's ESLint Vue configurations.
