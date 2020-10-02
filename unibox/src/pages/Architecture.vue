<template>
  <div id="app_bg">
    <b-container>
      <div id="uni_name" class="py-5">Architecture</div>
    </b-container>
    <b-container>
        <b-row>
            <b-col >
                <div  v-for="(major, index) in majors"
                      v-bind:item="major"
                      v-bind:index="index"
                      v-bind:key="major._id"
                      

                >
                    <b-card 
                        id="card_title"
                        img-alt="Image"
                        img-top
                        tag="article"
                        class="mb-5 "
                        v-for="(university, index) in major.universities"
                        v-bind:item="universities"
                        v-bind:index="index"
                        v-bind:key="university._id"
                        :img-src="university.Image"
                        :title="university.Name"
                       
                    >
                        <b-card-text id="card_desc">
                        {{university.About}}
                        </b-card-text>

                        <b-button href="#" variant="success">See more</b-button>
                    </b-card>
                </div>
            </b-col>
        </b-row>
    </b-container>
    <hr/>
  </div>
</template>

<script>
import PostService from '../PostService'
  export default {
    data() {
      return {
        majors:[],
        universities:[],
      }
    },
    async created(){
      try{
        this.majors = await PostService.getPosts("Architecture");
        console.log(this.majors)
      }catch(err){
        this.error = err.message;
      }
  }
  }
</script>

<style>
    #card_title{
        font: normal normal bold 20px/24px Lato;
        letter-spacing: 0px;
        opacity: 1;
    }
    #card_desc{
        font: normal normal 14px/18px Source Sans Pro;
        letter-spacing: 0px;
        opacity: 1;
    }
    #uni_name{
        font: normal normal bold 40px/48px Lato;
        letter-spacing: 0px;
        color: #707070;
        opacity: 1;
    }
    #app_bg {
        background-image: url('../assets/ShowUni_page.jpg');
        background-size: cover;
    }
</style>