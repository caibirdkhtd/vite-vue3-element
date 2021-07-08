import { createApp } from 'vue'
import { ElButton, ElDatePicker } from 'element-plus'
// import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue'
const app = createApp(App)

import 'dayjs/locale/zh-cn'
import locale from 'element-plus/lib/locale/index.js'

import lang from 'element-plus/lib/locale/lang/zh-cn'

locale.use(lang)
const components = [
  ElButton,
  ElDatePicker
]

components.forEach(component => {
  app.component(component.name, component)
})


app.mount('#app')
