import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/style/style.css'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import '@fortawesome/fontawesome-free/css/all.css'

// axios.defaults.withCredentials = true
// axios.defaults.baseURL = `${import.meta.env.VITE_API_ENDPOINT}`
axios.defaults.baseURL = 'http://localhost:8000'

createApp(App).use(createPinia()).use(router).mount('#app')
