<template>
  <div class="container-main">
    <div class="footer-text">
      <span>会員登録</span>
      <span>運営会社</span>
      <span>利用規約</span>
      <span>個人情報の取扱について</span>
      <span>特定商取引法に基づく表記</span>
      <span>お問い合わせ</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HealthApp1203Footer",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.container-main {
  max-width: 1280px;
  height: 128px;
  margin: 0 auto;
  background-color: #414141;
  color: #fff;
  display: flex;
  gap: 25px;
}
.footer-text {
  display: flex;
  gap: 25px;
  margin: auto 0 auto 160px;
}
</style>
