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
        "plugin:react/jsx-runtime",
    ],
    plugins: [
        'react',
        'react-hooks',
        'import',
        'prettier',
        '@typescript-eslint',
    ],
    rules: {
        'import/no-unresolved': [
            2,
            {
                ignore: ['^@/'], // @ 是设置的路径别名
            },
        ],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.tsx'] }],
        '@typescript-eslint/no-unused-vars': 'off', // 是否禁止未使用的变量
        '@typescript-eslint/no-var-requires': 'off', // 是否禁止在 import 语句之外使用 require 语句
        '@typescript-eslint/explicit-module-boundary-types': 'off', // 是否要求导出函数和类的公共类方法的显式返回和参数类型
        '@typescript-eslint/triple-slash-reference': 'off', // 是否禁止使用/// <reference path="" />，/// <reference types="" />或/// <reference lib="" />指令
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        semi: 2, // 分号 检测开关
    },
    settings: {
        react:{
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
        },
        
    },
};
