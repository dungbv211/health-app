<template>
  <div class="container-main">
    <div class="line"></div>
    <p>{{ drop }}</p>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: "HealthApp1203DropDownMenu",
  props: ["drop"],
  data() {
    return {};
  },
  watch: {},
  mounted() {},

  methods: {},
};
</script>

<style scoped>
.container-main {
  width: 280px;
  height: 72px;
  background-color: #777;
  color: #fff;
  position: relative;
}
.container-main:hover {
  background-color: #605f5f;
}
.line {
  width: 280px;
  height: 1px;
  opacity: 0.15;
  background: #fff;
}
p {
  position: absolute;
  top: 23px;
  left: 30px;
}
</style>
