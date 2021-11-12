import { createApp } from 'vue';
import App from '@/App.vue';
import store from '@/store';
import router from '@/router';
import 'scss/index.scss';

const app = createApp(App);
app.use(router).use(store).mount('#root');
