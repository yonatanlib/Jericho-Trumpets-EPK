<template>
  <v-app id="app">
    <app-loader v-show="showLoader" />
    <main-page v-show="!showLoader" />
  </v-app>
</template>

<script>
import mainPage from "./components/mainPage.vue";
import AppLoader from './components/AppLoader.vue'
import { mapGetters } from 'vuex';

export default {
  name: "App",
  components: { mainPage, AppLoader },
  data: () => ({
    //
  }),
  computed: {
    ...mapGetters(['getAppLoader']),
    showLoader() {
      return this.getAppLoader
    }
  }
};
</script>

<style>
@import url("@/assets/Fonts/NimbusSans/NimbusSan.css");
@import url("@/assets/Fonts/Cartesius small caps/Cartesius small caps.css");
p {
  color: white !important;
}
*, ::before, ::after {
    box-sizing: content-box !important;
}
@media only screen and (max-width: 600px) {
  *, ::before, ::after {
    box-sizing: border-box !important;
}
}
.theme--light.v-application {
  background-color: black !important;
}

</style>
