<template>
  <div class="container-main">
    <app-header></app-header>
    <div class="banner d-flex">
      <img src="/assets/banner-left.png" alt="banner1" />
      <img src="/assets/banner-right.png" alt="banner2" />
    </div>
    <div class="content">
      <div class="content-hex d-flex">
        <app-hex v-for="hex in hexs" :key="hex.id" :hex="hex"></app-hex>
      </div>
      <div class="content-group">
        <div class="content-photo">
          <app-photo
            class="content-photo__item"
            v-for="photo in photos"
            :key="photo.id"
            :photo="photo"
          ></app-photo>
        </div>
      </div>
      <div class="content-button">
        <app-button
          v-for="label in buttons"
          :key="label.id"
          :label="label"
        ></app-button>
      </div>
    </div>
    <img src="/assets/scroll.svg" alt="scroll" class="scroll" />
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import AppHex from "@/components/AppHex";
import AppPhoto from "@/components/AppPhoto";
import AppButton from "@/components/AppButton";
export default {
  name: "HealthApp1203HomePage",
  components: {
    "app-header": AppHeader,
    "app-footer": AppFooter,
    "app-hex": AppHex,
    "app-photo": AppPhoto,
    "app-button": AppButton,
  },

  data() {
    return {
      hexs: [
        { id: 1, icon: "/assets/icon_knife.svg", text: "Morning" },
        { id: 2, icon: "/assets/icon_knife.svg", text: "Lunch" },
        { id: 3, icon: "/assets/icon_knife.svg", text: "Dinner" },
        { id: 4, icon: "/assets/icon_cup.svg", text: "Snack" },
      ],
      photos: [
        { id: 1, image: "/assets/photo/m01.png", text: "05.21.Morning" },
        { id: 2, image: "/assets/photo/m02.png", text: "05.21.Lunch" },
        { id: 3, image: "/assets/photo/m03.png", text: "05.21.Dinner" },
        { id: 4, image: "/assets/photo/m04.png", text: "05.21.Snack" },
        { id: 5, image: "/assets/photo/m05.png", text: "05.21.Morning" },
        { id: 6, image: "/assets/photo/m06.png", text: "05.21.Lunch" },
        { id: 7, image: "/assets/photo/m07.png", text: "05.21.Dinner" },
        { id: 8, image: "/assets/photo/m08.png", text: "05.21.Snack" },
      ],
      buttons: [{ id: 1, content: "記録をもっと見る" }],
    };
  },
};
</script>
<style scoped>
.container-main {
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
}
.scroll {
  position: absolute;
  top: 55%;
  right: 96px;
}
.banner {
  justify-content: center;
}
.content {
  justify-content: center;
}
.content-hex {
  max-width: 850px;
  margin: 24px auto;
}
.content-group {
  display: flex;
  justify-content: center;
}
.content-photo {
  display: grid;
  grid-template-columns: auto auto auto auto;
}
.content-photo__item {
  margin: 4px;
}
.content-button {
  text-align: center;
  margin: 20px 0;
}
</style>
