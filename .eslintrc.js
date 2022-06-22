module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true,
        commonjs: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    extends: [
        'eslint:recommended',
        'airbnb',
        'prettier',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:react/jsx-runtime',
    ],
    plugins: [
        'react',
        'react-hooks',
        'import',
        'prettier',
        '@typescript-eslint',
    ],
    rules: {
        semi: 2,
        'import/no-unresolved': [
            2,
            {
                ignore: ['^@/'], // @ 是设置的路径别名
            },
        ],
        'import/extensions': [
            'error',
            {
                ignorePackages: true,
                pattern: {
                    js: 'always',
                    jsx: 'never',
                    ts: 'never',
                    tsx: 'never',
                    scss: 'never',
                    vue: 'always',
                    png: 'always',
                    jpg: 'always',
                    svg:'always',
                },
            },
        ],
        'react/jsx-filename-extension': [1, {extensions: ['.js', '.tsx']}],
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/triple-slash-reference': 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            node: {
                extensions: [
                    '.js',
                    '.ts',
                    '.jsx',
                    '.tsx',
                    '.json',
                    '.scss',
                    '.less',
                ],
            },
        },
        'import/extensions': [
            '.js',
            '.ts',
            '.jsx',
            '.tsx',
            '.json',
            '.scss',
            '.less',
        ],
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
    },
};
