import type { Rule } from 'eslint'

export default {
  'disallow-identifiers': {
    meta: {
      type: 'suggestion',
      docs: {
        description:
          'disallow variables from starting with an uppercase letter',
        category: 'Stylistic Issues',
        recommended: false
      },
      schema: []
    },
    create: function (context) {
      return {
        VariableDeclarator(node) {
          if (
            node.init &&
            node.init.type !== 'FunctionExpression' &&
            node.init.type !== 'ArrowFunctionExpression'
          ) {
            if (node.id.type === 'Identifier' && /^[A-Z]/.test(node.id.name)) {
              context.report({
                node,
                message:
                  "Variable name '{{ name }}' should not start with an uppercase letter.",
                data: {
                  name: node.id.name
                }
              })
            }
          }
        }
      }
    }
  },
  'no-small-functional-component': {
    meta: {
      type: 'suggestion',
      docs: {
        description: 'enforce capitalization of default exports in *.tsx files',
        category: 'Stylistic Issues',
        recommended: false
      },
      schema: [] // no options
    },
    create: function (context) {
      const filename = context.filename

      // Check if the file name matches the pattern
      if (filename.endsWith('.tsx')) {
        return {
          ExportDefaultDeclaration(node) {
            const defaultExportedElement = node.declaration

            // Check if the default exported element is an identifier
            if (defaultExportedElement.type === 'Identifier') {
              const name = defaultExportedElement.name

              // Check if the name starts with a capital letter
              if (!/^[A-Z]/.test(name)) {
                context.report({
                  node,
                  message: `Default export should start with an uppercase letter.`
                })
              }
            }
          }
        }
      }

      return {}
    }
  },
  'use-client': {
    meta: {
      type: 'problem',
      docs: {
        description: "require 'use client' comment in files using hooks",
        category: 'Next.js Best Practices',
        recommended: false
      },
      schema: [] // no options
    },
    create: function (context) {
      let hookUsed = false
      let useClientDeclared = false

      return {
        // Check for Hook Usage
        CallExpression(node) {
          if (
            node.callee.type === 'Identifier' &&
            node.callee.name.startsWith('use')
          ) {
            hookUsed = true
          }
        },

        // Check for 'use client' Declaration at the Top
        Program(node) {
          const sourceCode = context.getSourceCode()
          const firstNode = sourceCode.getFirstToken(node)

          if (
            firstNode &&
            firstNode.type === 'String' &&
            firstNode.value === 'use client'
          ) {
            useClientDeclared = true
          }

          // If hooks are used and 'use client' is not declared, report an error
          if (hookUsed && !useClientDeclared) {
            context.report({
              node,
              message: "Files using hooks must declare 'use client' at the top."
            })
          }
        }
      }
    }
  }
} satisfies Record<string, Rule.RuleModule>
