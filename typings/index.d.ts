import Vue from 'vue'

type LoadingType = 'balls' | 'bars' | 'beat' | 'bubbles' | 'cylon' | 'spin' | 'spiningDubbles' | 'barsCylon'

declare class Component extends Vue {
  static install (vue: typeof Vue): void
}

declare class VueLoading extends Component {
  // loading type
  type: LoadingType

  // loading color
  color: string

  // loading size
  size: { width: string, height: string }
}

export { VueLoading, LoadingType }

export default VueLoading
