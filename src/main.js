import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store'
import './assets/css/main.css';
import Notifications from '@kyvg/vue3-notification'

createApp(App)
    .use(store)
    .use(Notifications)
    .mount('#app')
