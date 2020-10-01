<template>
  <div class="home " >
  <div class="container  " style="margin-top:100px;">
    <h1 class=" text display-4 d-inline mr-5 md-col-6" >Information on your hand....!</h1>
    <div class="btn-group">
      <b-dropdown text="Success" variant="success" lg="4" class="pb-2">
      <b-dropdown-item-button>Major1</b-dropdown-item-button>
      <b-dropdown-item href="/UniInfo">An item</b-dropdown-item>
      <b-dropdown-item-button >Major3</b-dropdown-item-button>
    </b-dropdown>
    
</div>
  </div>
</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    
  }
}
</script>
<style >
  .home{
    background-image: url('../assets/Info_page.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 445px;
  }
</style>
