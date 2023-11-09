<template>
  <div>
    <headerApp></headerApp>
    <div class="container-main">
      <div class="banner d-flex">
        <div class="banner__left">
          <img src="/assets/banner-left.png" alt="banner1" />
        </div>
        <div class="banner__right">
          <img src="/assets/banner-right.png" alt="banner2" />
        </div>
      </div>
      <div class="content">
        <div class="content-hex d-flex">
          <hex v-for="(hex, index) in hexs" :key="index" :hex="hex"></hex>
        </div>
      </div>
    </div>
    <footerApp></footerApp>
  </div>
</template>

<script>
import headerApp from "../components/headerApp.vue";
import hex from "@/components/hex.vue";
import footerApp from "../components/footerApp.vue";
export default {
  name: "HealthApp1203HomePage",
  components: {
    headerApp,
    footerApp,
    hex,
  },

  data() {
    return {
      hexs: [
        { id: 1, icon: "/assets/icon_knife.svg", text: "Morning" },
        { id: 2, icon: "/assets/icon_knife.svg", text: "Lunch" },
        { id: 3, icon: "/assets/icon_knife.svg", text: "Dinner" },
        { id: 4, icon: "/assets/icon_cup.svg", text: "Snack" },
      ],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.container-main {
  max-width: 1280px;
  margin: 0 auto;
}
.banner__left img {
  width: 540px;
  height: 316px;
  object-fit: cover;
}
.banner__right img {
  width: 740px;
  height: 316px;
}
</style>
