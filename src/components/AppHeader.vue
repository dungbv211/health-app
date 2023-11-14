<template>
  <div class="header-main align-middle">
    <div class="header-left">
      <router-link to="/"
        ><img src="/assets/logo.svg" alt="logo"
      /></router-link>
    </div>
    <div class="header-right">
      <div
        class="d-flex align-items-center"
        v-for="nav in navList"
        :key="nav.id"
      >
        <router-link :to="nav.url" class="router-css"
          ><div class="icon">
            <img :src="nav.image" alt="icon" />
            <div class="badge">{{ nav.badge }}</div>
          </div>
          <p class="my-auto">{{ nav.content }}</p></router-link
        >
      </div>
      <hamburger-menu class="d-flex align-items-center"></hamburger-menu>
    </div>
  </div>
</template>

<script>
import HamburgerMenu from "@/components/HamburgerMenu.vue";

export default {
  name: "HealthApp1203Header",
  components: {
    "hamburger-menu": HamburgerMenu,
  },
  data() {
    return {
      navList: [
        {
          id: 1,
          image: "/assets/icon_memo.svg",
          content: "自分の記録",
          url: "/RecordPage",
        },
        {
          id: 2,
          image: "/assets/icon_challenge.svg",
          content: "チャレンジ",
          url: "/",
        },
        {
          id: 3,
          image: "/assets/icon_info.svg",
          content: "お知らせ",
          url: "",
          badge: "1",
        },
      ],
      labels: [
        { id: 1, content: "自分の記録", url: "/RecordPage" },
        { id: 2, content: "体重グラフ", url: "/" },
        { id: 3, content: "目標", url: "/" },
        { id: 4, content: "選択中のコース", url: "/" },
        { id: 5, content: "コラム一覧", url: "/ColumnPage" },
        { id: 6, content: "設定", url: "/" },
      ],
      isShowDropdown: false,
    };
  },

  methods: {
    menuDropdown() {
      this.isShowDropdown = true;
    },
    cancelDropdown() {
      this.isShowDropdown = false;
    },
  },
};
</script>

<style scoped>
.header-main {
  display: flex;
  justify-content: space-between;
  background-color: #414141;
  height: 64px;
  padding: 0 100px;
  color: #fff;
  position: relative;
}
.header-left {
  margin: auto 0;
  width: 144px;
}
.header-right {
  display: flex;
  gap: 24px;
}
.router-css {
  display: flex;
  color: #fff;
  text-decoration: none;
}

.icon {
  position: relative;
}
.badge {
  position: relative;
  top: -8px;
  right: 11px;
  background-image: url("../../public/assets/notice.svg");
  background-repeat: no-repeat;
  width: 16px;
  height: 16px;
  padding: 3px 0 0 0;
}
</style>
