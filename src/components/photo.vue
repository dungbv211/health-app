<template>
  <div class="container-main">
    <img src="/assets/photo/m01.png" alt="photo" />
    <div class="photo-content">
      <p>05.21.Morning</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HealthApp1203Photo",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.container-main {
  position: relative;
}
.container-main img {
  width: 234px;
  height: 234px;
}
.photo-content {
  background-color: #ffcc21;
  width: 120px;
  height: 32px;
  position: absolute;
  bottom: 0;
  left: 0;
}
.photo-content p {
  padding: 5px;
  color: #fff;
}
</style>
