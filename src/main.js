import { createApp } from 'vue'
import './assets/style/style.css'
import App from './App.vue'
import router from './router'
import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:8000/'

createApp(App).use(router).mount('#app')
