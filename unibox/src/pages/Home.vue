<template>
  <div class="homepage">
    <div
      class="row h-100 justify-content-center align-items-center"
      style="margin-top: 0px; margin-right: 0px; margin-left: 0px;"
    >
      <div class="col-6">
        <p
          class="text-white font-weight-bold text-lg-right"
          style="font-size: 30px"
        >
          Information in your hand...!
        </p>
      </div>
      <div class="col-6">
        <div class="btn-group" style="height: 50px">
          <select>
            <option>Select Major</option>
            <option
              v-for="(major, index) in majors"
              v-bind:item="major"
              v-bind:index="index"
              v-bind:key="major._id"
            > {{major.Major_Name}} </option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import PostService from '../PostService'

export default {
  name: "Home",
  components: {},
  data(){
    return{
      majors:[],
    }
  },
  async created(){
    try{
      this.majors = await PostService.getPosts();
    }catch(err){
      this.error = err.message;
    }
  }
  
};
</script>
<style >
.homepage {
  max-width: 100%;
  background-size: cover;
  background-image: url("https://s3.amazonaws.com/stockfreedom/wp-content/uploads/2018/02/23164944/ti01104994-1560x1040.jpg");
  height: 500px;
}
</style>
