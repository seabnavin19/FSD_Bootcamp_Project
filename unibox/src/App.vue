<template>
  <div>
    <Navbar/>
    <Body/>
    <Footer/>
  </div>
</template>

<script>
import Body from './components/Body.vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Body,
    Navbar,
    Footer
  }
}
</script>

<style>
#app {
  background-image: url('./assets/Info_page.jpg');
  background-size: cover;
  height: 445px;
}
</style>
