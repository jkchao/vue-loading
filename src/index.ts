/**
 * Vue-loading-template
 * @author jkchao
 */

import Vue from 'vue'

import VueLoading from '@/components/Loading.vue'

const install = (vue: typeof Vue) => {
  vue.component('vue-loading', VueLoading)
}

// 导出模块
export { VueLoading, install }

export default { install }
