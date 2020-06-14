import Vue from 'vue'
import App from './App'
import './common/styles/style.css'
import '@/utils/date.js'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
