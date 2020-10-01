<template>
  <div id="app_bg">
    <b-container>
      <div id="uni_name" class="py-5">NIPTICT</div>
    </b-container>

    <b-container>
      <div>
        <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
        >
            <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>

            <b-button href="#" variant="success">Go somewhere</b-button>
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