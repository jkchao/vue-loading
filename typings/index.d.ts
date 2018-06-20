import Vue from 'vue'

type LoadingType = 'balls' | 'bars' | 'beat' | 'bubbles' | 'cylon' | 'spin' | 'spiningDubbles' | 'barsCylon'

interface VueLoadingOptions {
  // loading type
  type: LoadingType

  // loading color
  color: string

  // loading size
  size: { width: string, height: string }
}

declare function install(vue: typeof Vue): void

declare class VueLoading extends Vue implements VueLoadingOptions {
  type: LoadingType
  color: string
  size: { width: string, height: string }
}

export { VueLoading, LoadingType, VueLoadingOptions }

export default { install }
