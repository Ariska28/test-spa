import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import components from '@/components/UI'
import './styles/main.scss'

import * as bootstrap from 'bootstrap'


const app = createApp(App);

components.forEach((component)=> {
    app.component(component.name, component)
})

app.mount('#app')

