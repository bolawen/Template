<template>
    <h3>欢迎光临！</h3>
    <div>
        <img src="../assets/images/girl.jpg" alt="" />
        <button @click="handleClickMe">点击我！{{ count }}次</button>
        <p>为人进出的门紧锁着，为狗爬出的洞敞开着。一个声音高叫着，爬出来吧，给你自由。我渴望自由！啊啊啊！啊啊啊啊</p>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
    name: '',
    setup() {
        const name: string = '柏拉文';
        console.log(name);

        const count = ref(0);
        onMounted(async () => {
            console.log('kjkj');
        });
        const handleClickMe = () => {
            count.value++;
        };
        return {
            count,
            handleClickMe,
        };
    },
});
</script>

<style lang="scss" scoped></style>
