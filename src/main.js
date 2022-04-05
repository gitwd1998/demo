import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/cell.less'
import MoaCell from './components/MoaCell'
import MoaCells from './components/MoaCells'
Vue.component(MoaCell.name, MoaCell)
Vue.component(MoaCells.name, MoaCells)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
