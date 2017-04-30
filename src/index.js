/**
 * Vue-loading-template
 * @author jkchao
 */

import vueLoading from './components/loading.vue'

// 导出模块
export default vueLoading

//global 情况下 自动安装
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('vue-loading', vueLoading)
}
