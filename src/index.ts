/**
 * Vue-loading-template
 * @author jkchao
 */

import Vue from 'vue'

import vueLoading from '@/components/Loading.vue'

const install = (vue: typeof Vue) => {
  vue.component('vue-loading', vueLoading)
}

// 导出模块
export { vueLoading, install }

export default { vueLoading, install }
