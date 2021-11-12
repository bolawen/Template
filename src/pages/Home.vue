<template>
    <h1>柏拉文模板</h1>
    <div>
        <img src="../assets/images/avatar.png" alt="" />
    </div>
    <div>
        <h1>功能特色</h1>
        <ul>
            <li>基于 Vue3.0</li>
            <li>基于 TypeScript</li>
            <li>基于 Webpack 5.0</li>
            <li>两套 axios 封装方案</li>
            <li>Eslint 与 Prettier 相结合的工业级代码规范</li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'Home',
    setup() {},
});
</script>

<style lang="scss" scoped>
img {
    width: 400px;
    height: 400px;
}
</style>
