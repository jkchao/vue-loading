# vue-loading-template

--- 

Use SVG for loading.

demo: https://jkchao.github.io/vue-loading/

## Start

```javascript

  npm install vue-loading-template --save

```

## Options

1. type: SVG type
  Type: `String`
  Required: `false`
  Default: `balls`

  Some type you can choose: 'balls', 'bars', 'beat', 'bubbles', 'cylon', 'spin', 'spiningDubbles', 'barsCylon'

2. color: SVG color
  Type: `String`
  Required: `false`
  Default: `#5ac1dd`

3. size: SVG size,including width and height.
  Type: `Object`
  Required: `false`
  Default: `{ width: '40px', height: '40px' }`
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



