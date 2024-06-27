import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import axios, { AxiosInstance } from 'axios'

const apiKey = process.env.VUE_APP_API_KEY;
const apiBaseUrl = process.env.VUE_APP_API_BASE_URL;

const apiClient: AxiosInstance = axios.create({
  baseURL: apiBaseUrl,
  params: {
    apiKey,
  },
});

const app = createApp(App)

app.use(router).use(createPinia()).mount('#app')

export { apiClient }
