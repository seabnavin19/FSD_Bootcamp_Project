<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="white" id="nav_shadow">

      <b-navbar-brand href="/" id="site_name" class="pl-3">Unibox</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav id="text_style" class="pr-5">
            <b-nav-item href="#" class="px-3" right>FAQ</b-nav-item>

            <b-nav-item class="px-3" right>
              <router-link to="/about" style="text-decoration: none; color: #707070;"> 
                About
              </router-link>
            </b-nav-item>

            <b-nav-item href="#" class="px-3" right>Download</b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>

    </b-navbar>
  </div>
</template>

<style>


#site_name{
  font: italic normal bold 35px/42px Lato;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
#text_style{
  text-align: left;
  font: normal normal bold 15px/28px Lato;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
#nav_shadow {
    box-shadow: 0 4px 2px -2px rgba(0,0,0,.2);
}
</style>