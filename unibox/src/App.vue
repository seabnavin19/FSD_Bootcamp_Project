<template>
  <div>
    <UniInfo/>
  </div>
</template>

<script>
import UniInfo from './pages/UniInfo'

export default {
  name: 'App',
  components: {
    UniInfo
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
