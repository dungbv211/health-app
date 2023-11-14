<!-- span -> router-link -->
<!-- co the mock data ngay trong nay. footerItems = [{ id: number, label: string, link: string }] -->

<template>
  <div class="footer-text">
    <div v-for="footerItem in footerItems" :key="footerItem.id">
      <router-link :to="footerItem.link">{{ footerItem.label }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HealthApp1203Footer",

  data() {
    return {
      footerItems: [
        { id: 1, label: "会員登録", link: "/" },
        { id: 2, label: "運営会社", link: "/" },
        { id: 3, label: "利用規約", link: "/" },
        { id: 4, label: "個人情報の取扱について", link: "/" },
        { id: 5, label: "特定商取引法に基づく表記", link: "/" },
        { id: 6, label: "お問い合わせ", link: "/" },
      ],
    };
  },
};
</script>

<style scoped>
.footer-text {
  display: flex;
  background-color: #414141;
  gap: 25px;
  height: 128px;
  justify-content: center;
  align-items: center;
}
a {
  text-decoration: none;
  color: #fff;
}
</style>
