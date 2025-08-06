import './assets/main.css'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'primevue/resources/themes/lara-light-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import './assets/main.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)
app.mount('#app')
app.component('LOGINButton', Button)
