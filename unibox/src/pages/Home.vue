<template>
  <div class="homepage">
    <div
      class="row h-100 justify-content-center align-items-center"
      style="margin-top: 0px; margin-right: 0px; margin-left: 0px;"
    >
      <div class="col-6">
        <p
          class="text-dark font-weight-bold text-lg-right"
          style="font-size: 30px"
        >
          Information in your hand...!
        </p>
      </div>
      <div class="col-6">
        <div class="btn-group" style="height: 50px">
          <select v-on:change="changeRoute">
            <option>Select Major</option>
              <option 
                v-for="(major, index) in majors"
                v-bind:item="major"
                v-bind:index="index"
                v-bind:key="major._id" 
                
                > {{major.Major_Name}}
              </option>
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
      this.majors = await PostService.getAllPosts();
    }catch(err){
      this.error = err.message;
    }
  },
  methods:{
    changeRoute(event){
      if(event.target.value == 'Computer Science'){
            this.$router.push({path: '/Computer Science' })
        }
        else if (event.target.value == 'Architecture'){
            this.$router.push({path: '/Architecture' })
        }else if (event.target.value == 'International Relation'){
            this.$router.push({path: '/Internal Relation' })
        }
        
    }
  }
  
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
