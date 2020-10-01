<template>
<div id="app">
  <div id="school">NIPTICT</div>
  <b-container class="w-50 mx-auto mt-5 p-5">
    <div class="accordion" role="tablist">
      
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-1  class="mr-2">About University</b-button>
        </b-card-header>
        <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>{{ aboutUni }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-2 class="mr-2">Program Overview</b-button>
        </b-card-header>
        <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>{{ program }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-3 class="mr-2">Career Pathway</b-button>
        </b-card-header>
        <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>{{ career }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-4 class="mr-2">Contact</b-button>
        </b-card-header>
        <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>{{ contact }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
  </b-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        aboutUni: `
          NIPTICT is a research and training institute founded by the Ministry of Posts 
          and Telecommunications of Cambodia (MPTC). Our mission is to develop highly qualified and committed professionals in the field of posts,
          telecommunications and ICT who will play a leading role in the development of Cambodia and its integration into the ASEAN Economic Community.
          `,
        program:`
          The Computer Science program emphasizes practical skills built on theoretical foundations.
          Every course is designed to give students hands-on practices with up-to-date tools and frameworks.
          The main areas include basic sciences, web and mobile applications, database management, big data analysis,
          cloud computing, artificial intelligence, and work-readiness skills. With the implementation of a blended learning model, 
          effective open content, and strong faculty-industry relationships, students will be prepared to demonstrate their knowledge to the greatest potential. 
          Our courses are continually revised to stay on top of trends in programming languages, application development technologies, libraries, and hardware.
          `,
        career:`
        Web and mobile developer ,
        Database designer and administrator ,
        Project manager ,
        Technology entrepreneur ,
        Digital innovator
          `,
        contact:`Tel: 010 340 000 ,
        Email: info@niptict.edu.kh
        `
      }
    },
  }
</script>

<style>
#school{
  width: 167px;
  height: 54px;
  margin-top: 60px;
  margin-left: 300px;
  text-align: left;
  font: normal normal bold 40px/48px Lato;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
#app {
  background-image: url('../assets/Info_page.jpg');
  background-size: cover;
  
}
</style>