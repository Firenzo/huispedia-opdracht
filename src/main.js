import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//Components - Main
import OptionCard from './components/OptionCard.vue'

Vue.component ("OptionCard", OptionCard);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
