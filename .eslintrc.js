module.exports = {
    root: true,
    env: {
        browser: true,
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    plugins: ['vue'],
    rules: {
        '@typescript-eslint/no-unused-vars': 'off', //是否禁止未使用的变量
        '@typescript-eslint/no-var-requires': 'off', //是否禁止在 import 语句之外使用 require 语句
        '@typescript-eslint/explicit-module-boundary-types': 'off', //是否要求导出函数和类的公共类方法的显式返回和参数类型
        '@typescript-eslint/triple-slash-reference': 'off', //是否禁止使用/// <reference path="" />，/// <reference types="" />或/// <reference lib="" />指令
        '@typescript-eslint/no-inferrable-types': 0, //是否开启推断类型
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-multi-str': 0, //字符串不能用\换行
        'vue/html-self-closing': [
            /**
             * @description:强制自动关闭标签
             */

            'error',
            {
                html: {
                    void: 'always', // 单标签（空元素）（中间没有任何内容的元素:br、meta、hr、link、input、img）
                    normal: 'never', // 双标签
                    component: 'any', //组件
                },
                svg: 'always',
                math: 'always',
            },
        ],
        'vue/prop-name-casing': ['error', 'camelCase'], // vue Template 中的属性名称强制使用小驼峰
        semi: 2, //分号 检测开关
    },
};
