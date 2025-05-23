import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import CompositionComps from './components/CompositionComps.vue'
import OptionsComps from './components/OptionsComps.vue'

const app = createApp(App)

// Global Component, no need to import

app.component('CompositionComps', CompositionComps).component('OptionsComps', OptionsComps)

app.mount('#app')
