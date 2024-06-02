import { createApp } from 'vue'
import App from './App.vue'

import routes from './routes'

import { vuetify } from '@/shared/plugins'


createApp(App).use(routes).use(vuetify).mount('#app')
