module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: [
        'plugin:vue/vue3-recommended',
        'airbnb-typescript/base',
        '@vue/typescript/recommended',
        '@vue/prettier',
        '@vue/prettier/@typescript-eslint',
    ],
    parserOptions: {
        ecmaVersion: 2020,
        project: './tsconfig.json',
    },
    rules: {
        'no-console': 0,
        'no-plusplus': 0,
        'no-param-reassign': 0,
        'import/extensions': [
            'error',
            {
                ignorePackages: true,
                pattern: {
                    js: 'never',
                    ts: 'never',
                    jsx: 'never',
                    tsx: 'never',
                    vue: 'always',
                    jpg: 'always',
                    json: 'always',
                    scss: 'always',
                },
            },
        ],
        '@typescript-eslint/no-unused-vars': 0,
        '@typescript-eslint/no-inferrable-types': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
    },
    settings: {
        'import/extensions': ['.js', '.jsx', '.ts', '.tsx', '.scss'],
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            alias: {
                map: [
                    ['@', './src/'],
                    ['js', './src/assets/js/'],
                    ['api', './src/api/'],
                    ['css', './src/assets/css/'],
                    ['scss', './src/assets/scss/'],
                    ['utils', './src/utils/'],
                    ['assets', './src/store/'],
                    ['images', './src/assets/images/'],
                    ['styles', './src/styles/'],
                ],
                extensions: ['.ts', '.js', '.jsx', '.json', '.scss'],
            },
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
};
