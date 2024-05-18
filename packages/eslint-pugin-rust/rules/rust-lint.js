const { execSync } = require('child_process')

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Lint Rust code using clippy',
      category: 'Possible Errors',
      recommended: true,
    },
    schema: [], // 如果规则有选项，可以在这里定义
  },
  create: function (context) {
    return {
      Program(node) {
        const filePath = context.getFilename()

        if (filePath.endsWith('.rs')) {
          try {
            // 运行 `cargo clippy` 对 Rust 文件进行 lint 检查
            const result = execSync(`cargo clippy --message-format=json`, {
              encoding: 'utf-8',
            })

            // 解析 `clippy` 输出并报告任何问题
            const errors = parseClippyOutput(result)
            errors.forEach((error) => {
              context.report({
                node,
                message: error.message,
                loc: {
                  start: error.start,
                  end: error.end,
                },
              })
            })
          } catch (error) {
            context.report({
              node,
              message: `Error running clippy: ${error.message}`,
            })
          }
        }
      },
    }
  },
}

// 解析 `clippy` 输出并提取错误信息
function parseClippyOutput(output) {
  const errors = []
  const messages = output.split('\n').filter((line) => line.trim() !== '')

  messages.forEach((line) => {
    try {
      const message = JSON.parse(line)
      if (
        message.reason === 'compiler-message' &&
        message.message.level === 'error'
      ) {
        const spans = message.message.spans
        if (spans.length > 0) {
          const primarySpan = spans[0]
          errors.push({
            message: message.message.message,
            start: {
              line: primarySpan.line_start,
              column: primarySpan.column_start,
            },
            end: { line: primarySpan.line_end, column: primarySpan.column_end },
          })
        }
      }
    } catch (e) {
      console.error('Error parsing clippy output:', e)
    }
  })

  return errors
}
