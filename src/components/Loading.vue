<script lang="tsx">

import * as svgLoading from '../svg'

import { Component, Vue, Prop } from 'vue-property-decorator'

type StyleLoading = Record<string, any>

@Component({
  name: 'vueLoading'
})
export default class VueLoading extends Vue {
  @Prop({ default: 'bead', type: String, required: false })
  private type: string

  @Prop({ default: '#5ac1dd', type: String, required: false})
  private color: string

  @Prop({ default: () => ({ width: '30px', height: '30px' }), type: Object, required: false})
  private size: { width: string, height: string }

  private get svg () {
    return  (svgLoading as StyleLoading)[this.type]
  }

  private get loadingStyle () {
    return {
      fill: this.color,
      width: this.size.width,
      height: this.size.height
    }
  }

  private render () {
    return (
      <div
        class="vue-loading"
        domPropsInnerHTML={this.svg}
        style={ this.loadingStyle }>
      </div>
    )
  }
}
</script>

<style scoped>
.vue-loading {
  margin: auto;
}
</style>

