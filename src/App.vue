<template>
  <div id="app">
    <Navbar />
    <Header />
    <GridProducts />
  </div>
</template>

<script>
import Navbar from './components/navbar/Navbar.vue'
import Header from './components/header/Header.vue'
import GridProducts from './components/gridProducts/GridProducts.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Header,
    GridProducts
  }
}
</script>

<style src="./main.css" />