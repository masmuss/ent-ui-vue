import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/style/style.css'
import App from './App.vue'
import router from './router'
import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.baseURL = `${import.meta.env.VITE_API_ENDPOINT}`

createApp(App).use(createPinia()).use(router).mount('#app')
