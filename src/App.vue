<template>
  <div id="app">
    <div class="balls item">
      <h2>balls</h2>
      <vue-loading type="balls" color="#FF4949" :size="{ width: '40px', height: '40px' }"></vue-loading>
    </div>
    <div class="bars item">
      <h2>bars</h2>
      <vue-loading type="bars" color="#20A0FF" :size="{ width: '30px', height: '30px' }"></vue-loading>
    </div>
    <div class="beat item">
      <h2>beat</h2>
      <vue-loading type="beat" color="#F7BA2A" :size="{ width: '30px', height: '30px' }"></vue-loading>
    </div>
    <div class="bubbles item">
      <h2>bubbles</h2>
      <vue-loading type="bubbles" color="#efad4c" :size="{ width: '40px', height: '40px' }"></vue-loading>
    </div>
    <div class="cylon item">
      <h2>cylon</h2>
      <vue-loading type="cylon" color="#5ab95c" :size="{ width: '40px', height: '40px' }"></vue-loading>
    </div>
    <div class="spin item">
      <h2>spin</h2>
      <vue-loading type="spin" color="black" :size="{ width: '50px', height: '50px' }"></vue-loading>
    </div>
    <div class="spiningDubbles item">
      <h2>spiningDubbles</h2>
      <vue-loading type="spiningDubbles" color="#5ac1dd" :size="{ width: '60px', height: '60px' }"></vue-loading>
    </div>
    <div class="barsCylon item">
      <h2>barsCylon</h2>
      <vue-loading type="barsCylon" color="#457e86" :size="{ width: '40px', height: '40px' }"></vue-loading>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// import VueLoading from './components/Loading'

@Component({
  // components: {
  //   VueLoading
  // }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 800px;
  margin: 100px auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.item {
  width: 200px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
