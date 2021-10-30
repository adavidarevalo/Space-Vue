<template>
  <div id="app">
    <px-header/>
    <router-view/>
  </div>
</template>

<script>
import PxHeader from './components/PxHeader.vue'

export default {
  name: 'App',
  components: {
    PxHeader
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
}
body{
  margin: 0px;
}
a, button{
  text-decoration: none;
  cursor: pointer;
}
</style>
