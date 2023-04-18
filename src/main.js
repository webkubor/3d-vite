import { createApp } from 'vue'
import App from './App.vue'
import AFrame from 'aframe';

const Vue = createApp(App)
Vue.use(AFrame);

Vue.mount('#app')
