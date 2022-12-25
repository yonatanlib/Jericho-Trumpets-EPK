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
#app {
  background-color: black !important;
}
p {
  color: white !important;
}
</style>
