module.exports = {
    parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module'
    },
    extends: ['eslint-config-airbnb-base', 'plugin:@typescript-eslint/recommended'],
    rules: {
        curly: 'error',
        'no-undef': 'off',
        indent: 'off',
        'max-len': 'off',
        'function-paren-newline': 'off',
        'implicit-arrow-linebreak': 'off',
        'comma-dangle': 'off',
        'object-curly-spacing': 'off',
        'lines-between-class-members': 'off',
        'no-use-before-define': 'off',
        'no-new': 'off',
        'object-curly-newline': 'off',
        'no-console': 'off',
        'no-plusplus': 'off',
        'arrow-parens': 'off',
        'no-shadow': 'off',
        'prefer-destructuring': 'off',
        'func-names': ['error', 'as-needed'],
        'no-confusing-arrow': [
            'error',
            {
                onlyOneSimpleParam: true
            }
        ],
        'no-param-reassign': [
            'error',
            {
                props: false
            }
        ],
        'import/prefer-default-export': 'off',
        'import/no-unresolved': 'off',
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                ts: 'never',
                js: 'never'
            }
        ],
        '@typescript-eslint/no-non-null-assertion': 'off'
    }
};
