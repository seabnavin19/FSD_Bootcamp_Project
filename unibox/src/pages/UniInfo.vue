<template>
  <div>
    <Navbar/>
    <Body/> 
    <Footer />
  </div>
</template>
<script>
import Body from '../components/Body.vue'
import Footer from '../components/Footer'
import Navbar from "../components/Navbar";

export default {
  components: {
    Body,
    Footer,
    Navbar
  }
}


</script>
