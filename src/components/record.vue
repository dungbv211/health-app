<template>
  <div class="container-main">
    <img
      src="/assets/record/MyRecommend-1.png"
      alt=""
      class="record-background"
    />
    <div class="record-content">
      <div class="record-content__top">BODY RECORD</div>
      <div class="record-content__bottom">自分のカラダの記録</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HealthApp1203Record",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.container-main {
  width: 288px;
  height: 288px;
  background-color: #ffcc21;
  position: relative;
}
.record-background {
  background-color: #626262;
  margin: 24px;
}
.record-content {
  position: absolute;
  top: 112px;
  left: 60px;
}
.record-content__top {
  text-align: center;
  color: #ffcc21;
}
.record-content__bottom {
  background: #ff963c;
  color: #fff;
  text-align: center;
  font-size: 14px;
  width: 160px;
  height: 24px;
}
</style>
