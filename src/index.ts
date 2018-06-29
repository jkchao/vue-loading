/**
 * Vue-loading-template
 * @author jkchao
 */

import Vue from 'vue'

import VueLoading from '@/components/Loading.vue'
import { VueLoadingOptions } from '../typings'

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

  if (options) {
    const componentProps = new VueLoading().$options.props as Props

    componentProps.type.default = options.type || 'balls'
    componentProps.color.default = options.color || '#5ac1dd'
    componentProps.size.default = () => options.size || { width: '30px', height: '30px' }
  }


  vue.component('vue-loading', VueLoading)

}


// 导出模块
export { VueLoading }

export default { install }
