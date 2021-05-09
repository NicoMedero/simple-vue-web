<template>
  <div id="app">
    <Navbar />
    <GridProducts />
  </div>
</template>

<script>
import Navbar from './components/navbar/Navbar.vue'
import GridProducts from './components/gridProducts/GridProducts.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    GridProducts
  }
}
</script>

<style src="./main.css" />