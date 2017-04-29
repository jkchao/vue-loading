<template>
  <div class="vue-loading" v-html="svg" :style="loadingStyle"></div>
</template>

<script>
import * as svgLoading from '../svg'
export default {
  name: 'vue-loading',
  props: {
    type: {
      type: String,
      default: 'beat'
    },
    color: {
      type: String,
      default: '#5ac1dd'
    },
    size: { default: () => ({ width: '30px', height: '30px' })}
  },
  computed: {
    svg () {
      return svgLoading[this.type]
    },
    loadingStyle () {
      return { fill: this.color, width: this.size.width, height: this.size.height }
    }
  }
}
</script>

<style scoped>
.vue-loading {
  margin: auto;
}
</style>