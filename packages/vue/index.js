'use strict'
module.exports = {
  extends: ['plugin:vue/vue3-recommended'],
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
    },
  ],
  rules: {
    // ------------------基础规则相关------------------
    // 禁用 console
    'no-console': 'off',
    // 函数最大行数
    'max-lines-per-function': 'off',
    // 禁止使用未导出的名称
    'import/named': 'off',

    // ------------------vue相关------------------
    // 有关vue的规则请参考：https://eslint.vuejs.org/rules/
    // 属性换行
    'vue/max-attributes-per-line': 'off',
    // 禁止使用 v-html
    'vue/no-v-html': 'off',
    // 禁止使用 prop-types
    'vue/require-prop-types': 'off',
    // 禁止使用 default-prop
    'vue/require-default-prop': 'off',
    // 组件名必须是多个单词
    'vue/multi-word-component-names': 'off',
    // 优先使用 import from vue
    'vue/prefer-import-from-vue': 'off',
    // 响应式转换
    'vue/no-setup-props-destructure': 'off',
    // 组件标签顺序
    'vue/component-tags-order': [
      'error',
      {
        order: ['template', 'script', 'style'],
      },
    ],
    // 块级标签换行
    'vue/block-tag-newline': [
      'error',
      {
        singleline: 'always',
        multiline: 'always',
      },
    ],
    // 组件名必须是kebab-case
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      {
        registeredComponentsOnly: false,
      },
    ],
    // 组件名必须是PascalCase
    'vue/component-options-name-casing': ['error', 'PascalCase'],
    // 定义宏顺序
    'vue/define-macros-order': [
      'error',
      {
        order: ['defineProps', 'defineEmits'],
      },
    ],
    // 属性顺序
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION', // 组件定义
          'LIST_RENDERING', // 列表渲染
          'CONDITIONALS', // 条件渲染
          'RENDER_MODIFIERS', // 渲染修饰符
          'GLOBAL', // 全局属性
          'UNIQUE', // 唯一属性
          'TWO_WAY_BINDING', // 双向绑定
          'OTHER_DIRECTIVES', // 其他指令
          'OTHER_ATTR', // 其他属性
          'EVENTS', // 事件
          'CONTENT', // 内容
        ],
        alphabetical: false,
      },
    ],
    // html注释内容空格
    'vue/html-comment-content-spacing': [
      'error',
      'always',
      {
        exceptions: ['-'],
      },
    ],
    // 禁止使用v-bind
    'vue/no-restricted-v-bind': ['error', '/^v-/'],
    // 禁止使用无意义的v-bind
    'vue/no-useless-v-bind': 'error',
    // 禁止在组件上使用v-text和v-html
    'vue/no-v-text-v-html-on-component': 'error',
    // 块级元素之间必须有空行
    'vue/padding-line-between-blocks': ['error', 'always'],
    // 静态class必须单独使用
    'vue/prefer-separate-static-class': 'error',
    // 事件名必须是kebab-case
    'vue/v-on-event-hyphenation': ['error', 'always'],
    // 属性名必须是kebab-case
    'vue/attribute-hyphenation': ['error', 'always'],
    // kebab-case
    'vue/custom-event-name-casing': ['error', 'kebab-case'],
    // 数组括号内不允许有空格
    'vue/array-bracket-spacing': ['error', 'never'],
    // 箭头函数空格
    'vue/arrow-spacing': ['error', { before: true, after: true }],
    // 块级空格
    'vue/block-spacing': ['error', 'always'],
    // 1tbs
    'vue/brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
    // 逗号
    'vue/comma-dangle': 'off',
    // 逗号后面必须有空格
    'vue/comma-spacing': ['error', { before: false, after: true }],
    // 逗号风格
    'vue/comma-style': ['error', 'last'],
    // 强制实施一致点样式
    'vue/dot-location': ['error', 'property'],
    // 使用点号表示法
    'vue/dot-notation': ['error', { allowKeywords: true }],
    // 强制使用全等
    'vue/eqeqeq': ['error', 'smart'],
    // 强制在对象字面量的键和值之间使用一致的间距
    'vue/key-spacing': ['error', { beforeColon: false, afterColon: true }],
    // 关键字空格
    'vue/keyword-spacing': ['error', { before: true, after: true }],
    // 禁止在条件中使用常量表达式
    'vue/no-constant-condition': 'warn',
    // 禁止使用空解构模式
    'vue/no-empty-pattern': 'error',
    // 禁止不必要的括号
    'vue/no-extra-parens': ['error', 'functions'],
    // 禁止不规则的空白
    'vue/no-irregular-whitespace': 'error',
    // 禁止数字字面量中使用前导和末尾小数点
    'vue/no-loss-of-precision': 'error',
    // 禁止使用特定的语法
    'vue/no-restricted-syntax': [
      'error',
      'DebuggerStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    // 禁止稀疏数组
    'vue/no-sparse-arrays': 'error',
    // 对象大括号换行
    'vue/object-curly-newline': [
      'error',
      { multiline: true, consistent: true },
    ],
    // 对象大括号空格
    'vue/object-curly-spacing': ['error', 'always'],
    // 对象属性换行
    'vue/object-property-newline': [
      'error',
      { allowMultiplePropertiesPerLine: true },
    ],
    // 对象简写
    'vue/object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],
    // 操作符换行
    'vue/operator-linebreak': 'off',
    // 模板字符串
    'vue/prefer-template': 'error',
    // 强制对象字面量属性名称使用引号
    'vue/quote-props': 'off',
    // 括号内不允许有空格
    'vue/space-in-parens': ['error', 'never'],
    // 操作符前后必须有空格
    'vue/space-infix-ops': 'error',
    // 一元运算符前后必须有空格
    'vue/space-unary-ops': ['error', { words: true, nonwords: false }],
    // 模板大括号空格
    'vue/template-curly-spacing': 'error',
  },
}
