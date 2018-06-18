<template>
  <div
    class="vue-loading"
    v-html="svg"
    :style="loadingStyle">
    
  </div>
</template>

<script lang="ts">
import * as svgLoading from '../svg'

import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'vueLoading'
})
export default class VueLoading extends Vue {
  @Prop({ default: 'bead' })
  private type: string

  @Prop({ default: '#5ac1dd'})
  private color: string

  @Prop({ default: '#5ac1dd'})
  private size: { width: string, height: string }

  private get svg () {
    return  (svgLoading as any)[this.type]
  }

  private get loadingStyle () {
    return {
      fill: this.color,
      width: this.size.width,
      height: this.size.height
    }
  }
}

</script>

<style lang="scss" scoped>
.vue-loading {
  margin: auto;
}
</style>
