<template>
  <div class="homepage" >
  <div class=" information_text row" style="margin-top: 0px;margin-right: 0px;margin-left: 0px;">
    <div class="col col-6">
      <p class="text-white font-weight-bold text-right" style="font-size: 30px; margin-top:-100px">Information in your hand...!</p>
    </div>
    <div class="col col-3 d-flex" style="margin-top:-100px">
      <div class="btn-group" style="height:50px">
        <b-dropdown text="Success" variant="success" lg="4" class="pb-2" >
          <b-dropdown-item-button>Major1</b-dropdown-item-button>
          <b-dropdown-item href="/UniInfo">An item</b-dropdown-item>
          <b-dropdown-item-button >Major3</b-dropdown-item-button>
        </b-dropdown>    
      </div>
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
    .homepage{
            max-width: 100%;
            background-size: cover;
            background-image: url('https://s3.amazonaws.com/stockfreedom/wp-content/uploads/2018/02/23164944/ti01104994-1560x1040.jpg');
            /* background-repeat: no-repeat; */
            height: 100%;
      }
      .information_text{
            padding-top:33%;
      }
</style>
