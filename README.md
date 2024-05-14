# RViso ESLint Config

**English** | [中文](./README_zh-CN.md)

![npm](https://img.shields.io/npm/v/@rviso/eslint-config-vue)
![node](https://img.shields.io/badge/node-%5E18.0.0-bluegreen)
![author](https://img.shields.io/badge/author-lingann-purple)
![license](https://img.shields.io/github/license/rviso/rviso-eslint-config)

---

RViso's ESLint configurations. you can use this package to lint your JavaScript, TypeScript, and Vue3 projects.

## Installation

To install this package, run the following command:

```bash
npm install eslint @rviso/eslint-config-standard @rviso/eslint-config-typescript @rviso/eslint-config-vue --save-dev
```

## Usage

Create a `.eslintrc` file in the root directory of your project with the following content:

```json
{
  "extends": ["@rviso/eslint-config-standard"],
  "overrides": [
    {
      "files": ["*.ts", "*.tsx"],
      "extends": "@rviso/eslint-config-typescript"
    },
    {
      "files": ["*.vue"],
      "extends": "@rviso/eslint-config-vue"
    }
  ]
}
```

if you are using Vue 3 + TypeScript, you can use the following configuration:

```json
{
  "extends": ["@rviso/eslint-config-standard"],
  "overrides": [
    {
      "files": ["*.ts", "*.tsx"],
      "extends": "@rviso/eslint-config-typescript"
    },
    {
      "files": ["*.vue"],
      "extends": "@rviso/eslint-config-vue",
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

- [@rviso/eslint-config-standard](https://www.npmjs.com/package/@rviso/eslint-config-standard) - RViso's ESLint standard configurations.
- [@rviso/eslint-config-typescript](https://www.npmjs.com/package/@rviso/eslint-config-typescript) - RViso's ESLint TypeScript configurations.
- [@rviso/eslint-config-vue](https://www.npmjs.com/package/@rviso/eslint-config-vue) - RViso's ESLint Vue configurations.
