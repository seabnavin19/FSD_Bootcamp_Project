<template>
  <div id="about_page">
    <b-container class="mr-5">
      <div id="title" class="py-5 ml-5">About Us</div>
    </b-container>

    <b-container class="bv-example-row mb-5 mr-5">
      <b-row class="justify-content-md-center">
        <b-col cols="12" md="auto">
          <div>
            <b-card
              img-src="../assets/chanpiseth.png"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 12rem"
              class="mb-2"
              id="name"
              >Lim Chanpiseth
              <b-card-text id="role"> Project Leader </b-card-text>
            </b-card>
          </div>
        </b-col>

        <b-col cols="12" md="auto">
          <div>
            <b-card
              img-src="../assets/ponleu.png"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 12rem"
              class="mb-2"
              id="name"
              >Srean Ponleu
              <b-card-text id="role"> Frontend Developer </b-card-text>
            </b-card>
          </div>
        </b-col>

        <b-col cols="12" md="auto">
          <div>
            <b-card
              img-src="../assets/kimhorng.png"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 12rem"
              class="mb-2"
              id="name"
              >Horn Kimhorng
              <b-card-text id="role"> Frontend Developer </b-card-text>
            </b-card>
          </div>
        </b-col>

        <div class="w-100"></div>

        <b-col cols="12" md="auto">
          <div>
            <b-card
              img-src="../assets/navin.png"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 12rem"
              class="mb-2"
              id="name"
              >Seab Navin
              <b-card-text id="role"> Database Developer </b-card-text>
            </b-card>
          </div>
        </b-col>

        <b-col cols="12" md="auto">
          <div>
            <b-card
              img-src="../assets/vathana.png"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 12rem"
              class="mb-2"
              id="name"
              >Yean Sovanvathana
              <b-card-text id="role"> Backend Developer </b-card-text>
            </b-card>
          </div>
        </b-col>

        <b-col cols="12" md="auto">
          <div>
            <b-card
              img-src="../assets/ratana.png"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 12rem"
              class="mb-2"
              id="name"
              >Ouk Sovannratana
              <b-card-text id="role"> Backend Developer </b-card-text>
            </b-card>
          </div>
        </b-col>


      </b-row>
    </b-container>
    <hr>
  </div>
</template>

<style>
#name {
  font: normal normal bold 16px/20px Lato;
  letter-spacing: 0px;
  color: #2a8734;
  opacity: 1;
}
#role {
  font: normal normal bold 15px/18px Lato;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  margin-top: 10px;
}
#about_page {
  background-image: url("../assets/Info_page.jpg");
}
#title {
  font: normal normal bold 40px/48px Lato;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
</style>