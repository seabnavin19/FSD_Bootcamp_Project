<template>
  <div>
    <Navbar/>
      <UniInfo/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import UniInfo from './pages/UniInfo'

export default {
  name: 'App',
  components: {
    UniInfo,
    Navbar,
    Footer
  }
}
</script>

<style>

</style>
