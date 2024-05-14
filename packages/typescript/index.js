'use strict'

module.exports = {
  extends: [
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
  ],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts'] },
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parser: '@typescript-eslint/parser',
    },
  ],
  rules: {
    'import/named': 'off', // 禁止使用未导出的名称
    indent: 'off', // 缩进
    'no-useless-constructor': 'off', // 禁止不必要的构造函数
    // TS
    '@typescript-eslint/ban-ts-comment': [
      'error',
      { 'ts-ignore': 'allow-with-description' },
    ], // 允许使用 ts-ignore
    '@typescript-eslint/member-delimiter-style': [
      'error',
      { multiline: { delimiter: 'none' } },
    ], // 接口分号
    '@typescript-eslint/type-annotation-spacing': ['error', {}], // 类型注释空格
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports', disallowTypeAnnotations: false },
    ], // 类型导入
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'], // 接口定义
    '@typescript-eslint/prefer-ts-expect-error': 'error', // 使用 ts-expect-error

    '@typescript-eslint/indent': [
      'error',
      2,
      {
        // 缩进
        SwitchCase: 1, // switch case 缩进
        VariableDeclarator: 1, // 变量声明缩进
        outerIIFEBody: 1, // IIFE 缩进
        MemberExpression: 1, // 成员表达式缩进
        FunctionDeclaration: { parameters: 1, body: 1 }, // 函数声明缩进
        FunctionExpression: { parameters: 1, body: 1 }, // 函数表达式缩进
        CallExpression: { arguments: 1 }, // 调用表达式缩进
        ArrayExpression: 1, // 数组表达式缩进
        ObjectExpression: 1, // 对象表达式缩进
        ImportDeclaration: 1, // import 缩进
        flatTernaryExpressions: false, // 三元表达式缩进
        ignoreComments: false, // 忽略注释
        ignoredNodes: [
          // 忽略节点
          'TemplateLiteral *',
          'JSXElement',
          'JSXElement > *',
          'JSXAttribute',
          'JSXIdentifier',
          'JSXNamespacedName',
          'JSXMemberExpression',
          'JSXSpreadAttribute',
          'JSXExpressionContainer',
          'JSXOpeningElement',
          'JSXClosingElement',
          'JSXFragment',
          'JSXOpeningFragment',
          'JSXClosingFragment',
          'JSXText',
          'JSXEmptyExpression',
          'JSXSpreadChild',
          'TSTypeParameterInstantiation',
        ],
        offsetTernaryExpressions: true,
      },
    ],
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // 禁止未使用的变量
    '@typescript-eslint/no-redeclare': 'error', // 禁止重复声明
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: false, variables: true },
    ], // 禁止在变量定义之前使用它们
    '@typescript-eslint/brace-style': [
      'error',
      'stroustrup',
      { allowSingleLine: true },
    ], // 大括号风格
    '@typescript-eslint/comma-dangle': 'off', // 逗号风格
    '@typescript-eslint/object-curly-spacing': ['error', 'always'], // 大括号内空格
    '@typescript-eslint/semi': ['error', 'never'], // 分号
    '@typescript-eslint/quotes': ['error', 'single'], // 引号
    '@typescript-eslint/space-before-blocks': ['error', 'always'], // 块前空格
    '@typescript-eslint/space-before-function-paren': [
      // 函数括号前空格
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    '@typescript-eslint/space-infix-ops': 'error', // 运算符前后空格
    '@typescript-eslint/keyword-spacing': [
      'error',
      { before: true, after: true },
    ], // 关键字前后空格
    '@typescript-eslint/comma-spacing': [
      'error',
      { before: false, after: true },
    ], // 逗号前后空格
    '@typescript-eslint/no-extra-parens': ['error', 'functions'], // 禁止不必要的括号
    '@typescript-eslint/no-dupe-class-members': 'error', // 禁止类成员中出现重复的名称
    '@typescript-eslint/no-loss-of-precision': 'error', // 禁止数字字面量中使用前导和末尾小数点
    '@typescript-eslint/lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true },
    ], // 要求或禁止在类成员之间出现空行
    // off
    '@typescript-eslint/consistent-indexed-object-style': 'off', // 索引签名风格
    '@typescript-eslint/naming-convention': 'off', // 命名规则
    '@typescript-eslint/explicit-function-return-type': 'off', // 函数返回值类型
    '@typescript-eslint/explicit-member-accessibility': 'off', // 成员访问
    '@typescript-eslint/no-explicit-any': 'off', // any
    '@typescript-eslint/parameter-properties': 'off', // 参数属性
    '@typescript-eslint/no-empty-interface': 'off', // 空接口
    '@typescript-eslint/ban-ts-ignore': 'off', // 禁止使用 @ts-ignore
    '@typescript-eslint/no-empty-function': 'off', // 空函数
    '@typescript-eslint/no-non-null-assertion': 'off', // 禁止使用非空断言
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 模块边界类型
    '@typescript-eslint/ban-types': 'off', // 禁止使用特定的类型
    '@typescript-eslint/no-namespace': 'off', // 禁止使用命名空间
    '@typescript-eslint/triple-slash-reference': 'off', // 三斜线指令
    '@typescript-eslint/strict-boolean-expressions': 'off', // 严格布尔表达式
  },
}
