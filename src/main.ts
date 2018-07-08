import Vue from 'vue'
import App from './App.vue'

import vueLoading from './index'

Vue.use(vueLoading)

new Vue({
  render: h => h(App)
}).$mount('#app')
