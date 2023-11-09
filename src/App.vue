<template>
  <div id="app">
    <homePage></homePage>
    <!-- <headerApp></headerApp> -->
  </div>
</template>

<script>
import homePage from "./views/homePage.vue";
// import headerApp from './components/headerApp.vue';
export default {
  name: "App",
  components: {
    homePage,
    // headerApp,
  },
};
</script>

<style></style>
