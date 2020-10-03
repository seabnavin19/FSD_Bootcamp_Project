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
            :to="major.Major_Name"
            v-for="(major, index) in majors"
            v-bind:item="major"
            v-bind:index="index"
            v-bind:key="major._id"
            >{{major.Major_Name}}
          </b-dropdown-item>
        </b-dropdown>
      </div>
      
      <!-- <div class="col-6">
        <div class="btn-group" style="height: 50px;">
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
      </div> -->
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
<<<<<<< HEAD
  // methods:{
  //   changeRoute(event){
  //     if(event.target.value == 'Computer Science'){
  //       this.$router.push({path: '/Computer Science' })
  //     }
  //     else if (event.target.value == 'Architecture'){
  //       this.$router.push({path: '/Architecture' })
  //     }
  //     else if (event.target.value == 'International Relation'){
  //       this.$router.push({path: '/International Relation' })
  //     }
=======
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
>>>>>>> 5193a8477afcf5f6f00c6a24b0ed564fd7acb9c6
        
  //   }
  // }
  
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
