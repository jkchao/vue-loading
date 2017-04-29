# vue-loading-template

--- 

Use SVG for loading.

demo: https://jkchao.github.io/vue-loading/

## Start

```javascript

  npm install vue-loading-template --save

```

## Options

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 
| :------------- |:------------- | :-----|
| type | SVG类型 | String | 'balls', 'bars', 'beat', 'bubbles', 'cylon', 'spin', 'spiningDubbles', 'barsCylon' | 'balls' |
| color | SVG 颜色 | String | - | '#5ac1dd' |
| size | SVG大小 | Object | - | { width: '40px', height: '40px' } | 

## Example in SPA

```javascript
 <template>
    <h2>bars</h2>
    <vue-loading type="bars" color="#d9544e" :size="{ width: '50px', height: '50px' }"><vue-loading>
 <template>
  <script>
  import vueLoading from './components/loading.vue'
  export default {
    name: 'app',
    components: {
      vueLoading
    }
  }
  </script>
```



