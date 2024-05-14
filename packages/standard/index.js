'use strict'
// 基本eslint-配置
module.exports = {
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module', // 启用ES模块
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  reportUnusedDisableDirectives: true,
  extends: [
    'plugin:import/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:jsonc/recommended-with-jsonc',
    'plugin:yml/standard',
    'plugin:markdown/recommended',
    'eslint-config-standard',
    'prettier',
  ],
  ignorePatterns: [
    '*.min.*',
    '*.d.ts',
    'CHANGELOG.md',
    'dist',
    'LICENSE*',
    'output',
    'coverage',
    'public',
    'temp',
    'packages-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
    '__snapshots__',
    '!.github',
    '!.vitepress',
    '!.vscode',
  ],
  plugins: ['html', 'unicorn', 'prettier'],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.mjs'] },
    },
  },
  overrides: [
    {
      files: ['*.json', '*.json5'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/array-bracket-spacing': ['error', 'never'],
        'jsonc/comma-dangle': 'off',
        'jsonc/comma-style': ['error', 'last'],
        'jsonc/indent': ['error', 2],
        'jsonc/key-spacing': [
          'error',
          { beforeColon: false, afterColon: true },
        ],
        'jsonc/no-octal-escape': 'error',
        'jsonc/object-curly-newline': [
          'error',
          { multiline: true, consistent: true },
        ],
        'jsonc/object-curly-spacing': 'off',
        'jsonc/object-property-newline': [
          'error',
          { allowMultiplePropertiesPerLine: true },
        ],
      },
    },
    {
      files: ['*.yaml', '*.yml'],
      parser: 'yaml-eslint-parser',
      rules: {
        'spaced-comment': 'off',
      },
    },
    {
      files: ['package.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/sort-keys': [
          // 设置 package.json 的字段顺序
          'error',
          {
            pathPattern: '^$',
            order: [
              'publisher',
              'name',
              'displayName',
              'type',
              'version',
              'private',
              'packageManager',
              'description',
              'author',
              'license',
              'funding',
              'homepage',
              'repository',
              'bugs',
              'keywords',
              'categories',
              'sideEffects',
              'exports',
              'main',
              'module',
              'unpkg',
              'jsdelivr',
              'types',
              'typesVersions',
              'bin',
              'icon',
              'files',
              'engines',
              'activationEvents',
              'contributes',
              'scripts',
              'peerDependencies',
              'peerDependenciesMeta',
              'dependencies',
              'optionalDependencies',
              'devDependencies',
              'pnpm',
              'overrides',
              'resolutions',
              'husky',
              'simple-git-hooks',
              'lint-staged',
              'eslintConfig',
            ],
          },
          {
            pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
            order: { type: 'asc' },
          },
          {
            pathPattern: '^exports.*$',
            order: ['types', 'require', 'import'],
          },
        ],
      },
    },
    {
      files: ['*.d.ts'],
      rules: {
        // 不需要检查d.ts文件的prettier规则
        'prettier/prettier': 'off',
        'import/no-duplicates': 'off', // 有时候会有重复的 import
      },
    },
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off', // js 文件中可以使用 require
      },
    },
    {
      files: ['scripts/**/*.*', 'cli.*'],
      rules: {
        'no-console': 'off', // 脚本中可以使用 console
      },
    },
    {
      files: ['*.test.ts', '*.test.js', '*.spec.ts', '*.spec.js'],
      rules: {
        'no-unused-expressions': 'off', // 测试文件中可以使用 expect
      },
    },
    {
      // Code blocks in markdown file
      files: ['**/*.md/*.*'],
      rules: {
        '@typescript-eslint/no-redeclare': 'off', // 有时候会有重复的变量
        '@typescript-eslint/no-unused-vars': 'off', // 有时候会有未使用的变量
        '@typescript-eslint/no-use-before-define': 'off', // 有时候会有未定义的变量
        '@typescript-eslint/no-var-requires': 'off', // 有时候会有 require
        '@typescript-eslint/comma-dangle': 'off', // 有时候会有多余的逗号
        'import/no-unresolved': 'off', // 有时候会有未解析的路径
        'no-alert': 'off', // 有时候会有 alert
        'no-console': 'off', // 有时候会有 console
        'no-restricted-imports': 'off', // 有时候会有不允许的 import
        'no-undef': 'off', // 有时候会有未定义的变量
        'no-unused-expressions': 'off', // 有时候会有未使用的表达式
        'no-unused-vars': 'off', // 有时候会有未使用的变量
      },
    },
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        // 禁止末尾逗号
        trailingComma: 'none',
      },
    ],
    // import
    'import/order': 'error', // 引入顺序
    'import/first': 'error', // 引入顺序
    'import/no-mutable-exports': 'error', // 禁止使用 let 和 var 导出
    'import/no-unresolved': 'off', // 有时候会有未解析的路径
    'import/no-absolute-path': 'off', // 有时候会有绝对路径

    // Common
    // 函数最大行数
    'max-lines-per-function': 'off',
    indent: 'off', // 强制使用一致的缩进
    semi: 'off', // 禁止使用分号
    curly: 'off', // 强制使用大括号
    quotes: 'off', // 强制使用单引号
    'arrow-parens': 'off', // 要求箭头函数的参数使用圆括号
    'quote-props': 'off', // 强制对象属性使用单引号
    'no-unused-vars': 'warn', // 有时候会有未使用的变量
    'no-param-reassign': 'off', // 有时候会有对参数重新赋值
    'array-bracket-spacing': ['error', 'never'], // 禁止使用空格
    'brace-style': ['error', '1tbs', { allowSingleLine: false }], // 强制大括号风格
    'block-spacing': ['error', 'always'], // 强制在代码块中开括号前和闭括号后有空格
    camelcase: 'off', // 有时候会有驼峰命名
    'comma-spacing': ['error', { before: false, after: true }], // 强制在逗号前后使用一致的空格
    'comma-style': ['error', 'last'], // 强制使用一致的逗号风格
    'comma-dangle': 'off', // 强制在对象字面量的属性和方法中使用一致的逗号
    'no-constant-condition': 'warn', // 有时候会有常量条件
    'no-debugger': 'error', // 禁止使用 debugger
    'no-console': ['error', { allow: ['warn', 'error'] }], // 禁止使用 console
    'no-cond-assign': ['error', 'always'], // 禁止条件表达式中出现赋值操作符
    'func-call-spacing': ['off', 'never'], // 禁止在函数标识符和其调用之间有空格
    'key-spacing': ['error', { beforeColon: false, afterColon: true }], // 强制在对象字面量的属性中键和值之间使用一致的间距

    'no-restricted-syntax': [
      // 禁止使用特定的语法
      'error',
      'DebuggerStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'object-curly-spacing': ['error', 'always'], // 强制在大括号中使用一致的空格
    'no-return-await': 'off', // 有时候会有 return await
    'space-before-function-paren': [
      // 强制在 function的左括号之前使用一致的空格
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 1 }], // 禁止出现多行空行

    // es6
    'no-var': 'error', // 禁止使用 var
    'prefer-const': [
      // 要求使用 const 声明那些声明后不再被修改的变量
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true,
      },
    ],
    'prefer-arrow-callback': [
      // 要求回调函数使用箭头函数
      'error',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],
    'object-shorthand': [
      // 要求或禁止对象字面量中方法和属性使用简写语法
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],
    'prefer-exponentiation-operator': 'error', // 要求使用**操作符
    'prefer-rest-params': 'error', // 要求使用剩余参数而不是 arguments
    'prefer-spread': 'off', // 要求使用扩展运算符而非 .apply()
    'prefer-template': 'error', // 要求使用模板字面量而非字符串连接
    'template-curly-spacing': 'error', // 要求或禁止模板字符串中的嵌入表达式周围空格的使用

    'generator-star-spacing': 'off', // 强制 generator 函数中 * 号周围使用一致的空格
    'spaced-comment': [
      'error',
      'always',
      {
        // 强制在注释中 // 或 /* 使用一致的空格
        line: {
          markers: ['/'],
          exceptions: ['/', '#'],
        },
        block: {
          markers: ['!'],
          exceptions: ['*'],
          balanced: true,
        },
      },
    ],

    // best-practice
    'array-callback-return': 'error', // 强制数组方法的回调函数中有 return 语句
    'block-scoped-var': 'error', // 强制把变量的使用限制在其定义的作用域范围内
    'consistent-return': 'off', // 要求 return 语句要么总是指定返回的值，要么不指定
    complexity: ['off', 11], // 强制可控的对象字面量中只能出现一次指定的属性
    eqeqeq: ['error', 'smart'], // 要求使用 === 和 !==
    'no-alert': 'warn', // 禁用 alert、confirm 和 prompt
    'no-case-declarations': 'error', // 不允许在 case 子句中使用词法声明
    'no-multi-spaces': 'error', // 禁止使用多个空格
    'no-multi-str': 'error', // 禁止使用多行字符串
    'no-with': 'error', // 禁用 with 语句
    'no-void': 'error', // 禁用 void 操作符
    'no-useless-escape': 'off', // 禁用不必要的转义字符
    'no-prototype-builtins': 'off', // 禁止直接使用 Object.prototypes 的内置属性
    'vars-on-top': 'error', // 要求所有的 var 声明出现在它们所在的作用域顶部
    'require-await': 'off', // 禁止使用不带 await 表达式的 async 函数
    'no-return-assign': 'off', // 禁止在 return 语句中使用赋值语句
    'operator-linebreak': 'off', // 强制操作符使用一致的换行符风格

    // unicorns
    // 要求抛出错误时传入 Error 对象而不是字符串
    'unicorn/error-message': 'error',
    // 要求正则表达式中使用 u 标志
    'unicorn/escape-case': 'error',
    // 禁止使用 Array 构造函数
    'unicorn/no-instanceof-array': 'error',
    // 禁止使用 new Buffer()
    'unicorn/no-new-buffer': 'error',
    // 禁止正则表达式字面量中出现多个空格
    'unicorn/no-unsafe-regex': 'off',
    // 要求数字字面量具有正确的前缀
    'unicorn/number-literal-case': 'error',
    // 要求使用 includes() 而不是 indexOf() 方法
    'unicorn/prefer-includes': 'error',
    // 要求使用 startsWith() 和 endsWith() 方法代替其他更多复杂的选项
    'unicorn/prefer-starts-ends-with': 'error',
    // 要求使用 textContent 而不是 innerText
    'unicorn/prefer-text-content': 'error',
    // 要求抛出 TypeError 异常而不是 Error
    'unicorn/prefer-type-error': 'error',
    // 要求抛出 Error 对象而不是字符串
    'unicorn/throw-new-error': 'error',

    'no-use-before-define': [
      'error',
      { functions: false, classes: false, variables: true },
    ], // 禁止在变量定义之前使用它们
    'eslint-comments/disable-enable-pair': 'off', // 禁止在 eslint-disable-next-line 注释中禁用多个规则
    'import/no-named-as-default-member': 'off', // 禁止将默认导出的名称用作命名导出
    'import/no-named-as-default': 'off', // 禁止将默认导出的名称用作命名导出
    'import/namespace': 'off', // 禁止将默认导出的名称用作命名导出
    'n/no-callback-literal': 'off', // 禁止将默认导出的名称用作命名导出
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: false,
      },
    ],
    // yml
    'yml/quotes': ['error', { prefer: 'single', avoidEscape: false }], // 禁止使用双引号
    'yml/no-empty-document': 'off', // 禁止空文档
  },
}
