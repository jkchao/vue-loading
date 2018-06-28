import Vue from 'vue'

type LoadingType = 'balls' | 'bars' | 'beat' | 'bubbles' | 'cylon' | 'spin' | 'spiningDubbles' | 'barsCylon'

interface VueLoadingOptions {
  // loading type
  type?: LoadingType

  // loading color
  color?: string

  // loading size
  size?: { width: string, height: string }
}

declare function install(vue: typeof Vue, options?: VueLoadingOptions): void

declare class VueLoading extends Vue {}

declare const _default: {
  install: typeof install
}

export { VueLoading, LoadingType, VueLoadingOptions }

export default _default
