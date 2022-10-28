<template>
    <v-app id="vApp" >
        <AppbarVue/>
        <router-view></router-view>
  </v-app>
</template>

<script>
import Vue from 'vue';
import AppbarVue from './components/layout/Appbar.vue';
export default Vue.extend({
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    AppbarVue,
  }
});
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#vApp {
  width: 100%;
  max-width: 100%;
  background-image: url('../public/burger.jpg');
  background-position: -550px -0px;
  background-size: cover;
}

@media (min-width: 900px) {
  #vApp {
      
      background-position: 0 -190px;
      background-attachment: fixed;
      background-size: cover;
}
}
</style>
