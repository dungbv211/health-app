<template>
  <div class="container-main">
    <div class="header-main align-middle">
      <div class="header-left">
        <img src="/assets/logo.svg" alt="logo" />
      </div>
      <div class="header-right">
        <div
          class="d-flex align-items-center"
          v-for="product in products"
          :key="product.id"
          @click="handlerClickProduct(product)"
        >
          <img :src="product.image" alt="icon" />
          <p class="my-auto">{{ product.content }}</p>
        </div>
      </div>
      <div class="header-dropdown" v-show="isShowDropdown">
        <div class="header-dropdown__cancel text-end">
          <img src="/assets/cancel.svg" alt="cancel" @click="cancelDropdown" />
        </div>
        <dropDown_menu
          v-for="(drop, index) in drops"
          :key="index"
          :drop="drop"
          @click="handlerClickDropdown(drop)"
        ></dropDown_menu>
      </div>
    </div>
  </div>
</template>

<script>
import dropDown_menu from "./dropDown_menu.vue";
export default {
  name: "HealthApp1203Header",
  components: {
    dropDown_menu,
  },
  data() {
    return {
      products: [
        { id: 1, image: "/assets/icon_memo.svg", content: "自分の記録" },
        { id: 2, image: "/assets/icon_challenge.svg", content: "お知らせ" },
        { id: 3, image: "/assets/icon_info.svg", content: "チャレンジ" },
        { id: 4, image: "/assets/icon_menu.svg", content: "" },
      ],
      drops: [
        "自分の記録",
        "体重グラフ",
        "目標",
        "選択中のコース",
        "コラム一覧",
        "設定",
      ],
      isShowDropdown: false,
    };
  },

  mounted() {},

  methods: {
    handlerClickProduct(product) {
      if (product.id == 1) {
        this.$router.push("/record");
      } else if (product.id == 4) {
        this.isShowDropdown = true;
      }
    },
    cancelDropdown() {
      this.isShowDropdown = false;
    },
    handlerClickDropdown(drop) {
      if (drop == "自分の記録") {
        this.$router.push("/record");
      } else if (drop == "コラム一覧") {
        this.$router.push("/column");
      }
    },
  },
};
</script>

<style scoped>
.container-main {
  max-width: 1280px;
  margin: 0 auto;
  color: #fff;
  position: relative;
}
.header-main {
  display: flex;
  justify-content: space-between;
  background-color: #414141;
  height: 64px;
  padding: 0 100px;
}
.header-left {
  margin: auto 0;
  width: 144px;
}
.header-right {
  display: flex;
  gap: 24px;
}
.header-dropdown {
  position: absolute;
  top: 20px;
  right: 100px;
}
.header-dropdown__cancel img {
  background: #414141;
}
</style>
