<template>
  <v-app id="app">
    <main-page />
  </v-app>
</template>

<script>
import mainPage from "./components/mainPage.vue";

export default {
  name: "App",
  components: { mainPage },
  data: () => ({
    //
  }),
};
</script>

<style>
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
