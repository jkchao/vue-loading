/**
 * Vue-loading-template
 * @author jkchao
 */

import Vue from 'vue'

import VueLoading from '@/components/Loading.vue'
import { VueLoadingOptions } from '../typings/index'

interface Props {
  type: { default: string },
  color: { default: string },
  size: { default: () => any },
  [ key: string ]: any
}

const install = (
  vue: typeof Vue,
  options?: VueLoadingOptions
) => {
  if (options && Object.keys(options).length !== 0) {
    const componentProps = new VueLoading().$options.props as Props
    componentProps.type.default = options.type
    componentProps.color.default = options.color
    componentProps.size.default = () => options.size
  }

  vue.component('vue-loading', VueLoading)
}


// 导出模块
export { VueLoading }

export default { install }
