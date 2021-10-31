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
  background-color: #0C0D19;
}
body{
  margin: 0px;
  height: 100vh;
  background-color: #0C0D19;
}
a, button{
  text-decoration: none;
  cursor: pointer;
}
</style>
