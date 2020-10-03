<template>
  <div class="homepage">
    <div class="row h-100 justify-content-center align-items-center">
      
      <div class="col-6">
        <h1 class="text-dark font-weight-bold text-lg-right">
          Information in your hand...!
        </h1>
      </div>

      <div>
        <b-dropdown text="Select Major" variant="success">
          <b-dropdown-item 
            :to="`${major.Major_Name}/`"
            v-for="(major, index) in majors"
            v-bind:item="major"
            v-bind:index="index"
            v-bind:key="major._id"
            >{{major.Major_Name}}
          </b-dropdown-item>
        </b-dropdown>
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
      this.majors = await PostService.getAllPosts();
    }catch(err){
      this.error = err.message;
    }
  },
  
};
</script>
<style >
.homepage {
  max-width: 100%;
  background-size: cover;
  background-image: url('../assets/Home_page.jpg');
  height: 500px;
}
.information_text {
  padding-top: 33%;
}
</style>
