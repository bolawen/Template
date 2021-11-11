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
    rules:{
        "no-console":0,
        "no-plusplus":0,
        'import/extensions': [
            'error',
            {
                ignorePackages: true,
                pattern: {
                    js: 'never',
                    jsx: 'never',
                    json: 'always',
                    ts: 'never',
                    tsx: 'never',
                    scss: 'never',
                    vue: 'always',
                },
            },
        ],
        "@typescript-eslint/no-inferrable-types":0,
    }
};
