<template>
  <div id="app_bg">
    <b-container>
      <div id="uni_name" class="py-5 ml-5 text-center" style="z-index:2">National Institute of Posts, Telecommunications and ICT</div>
    </b-container>
    
    <b-container class="col col-lg-5 col-md-6 col-sm-7 mx-auto mt-5 pb-5"
      v-for="(major, index) in majors"
                        v-bind:item="major"
                        v-bind:index="index"
                        v-bind:key="major._id"
    >
      <div class="accordion" role="tablist">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-1  class="mr-2">About University</b-button>
          </b-card-header>
          <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>{{major.uniAbout}}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-2 class="mr-2">Program Overview</b-button>
          </b-card-header>
          <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>{{major.uniProgramView}}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-3 class="mr-2">Career Pathway</b-button>
          </b-card-header>
          <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>{{major.uniCareerPath }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-4 class="mr-2">Contact</b-button>
          </b-card-header>
          <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>{{ major.contact }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </b-container>
  </div>
</template>

<script>
import PostService from '../../PostService'
export default {
    data() {
      return {
        majors:[],
        universities:[],
      }
    },
    async created(){
      try{
        this.majors = await PostService.getUniversity("Computer Science","National Institute of Posts, Telecommunications and ICT(NIPTICT)",1);
      }catch(err){
        this.error = err.message;
      }
    }
  }
</script>

<style>
  #uni_name{
    font: normal normal bold 40px/48px Lato;
    letter-spacing: 0px;
    color: black;
  }
  #app_bg {
    background-image: url('../../assets/Info_page.jpg');
    background-size: cover;
  }
</style>