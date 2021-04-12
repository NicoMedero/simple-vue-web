<template>
  <div id="app">
    <Navbar />
    <Header />
  </div>
</template>

<script>
import Navbar from './components/navbar/Navbar.vue'
import Header from './components/header/Header.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Header
  }
}
</script>

<style src="./main.css" />