import Vue from 'vue'

export type LoadingType = 'balls' | 'bars' | 'beat' | 'bubbles' | 'cylon' | 'spin' | 'spiningDubbles' | 'barsCylon'

export function install (vue: typeof Vue): void

export class VueLoading extends Vue {
  // loading type
  type: LoadingType

  // loading color
  color: string

  // loading size
  size: { width: string, height: string }
}

