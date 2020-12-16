import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import './router/permission'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
createApp(App).use(router).use(ElementPlus, {
    size: 'medium'
}).mount('#app')
