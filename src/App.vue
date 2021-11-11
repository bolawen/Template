<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'App',
});
</script>
<style scoped lang="sass">
#app{
    text-align: center;
    h3{
        margin-bottom:24px;
    }
    img{
        width:200px;
        height:100px;
    }
    button{
        display:block;
        margin:0 auto;
    }
}
</style>
