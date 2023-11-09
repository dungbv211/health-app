<template>
  <div class="container-main">
    <img src="/assets/hex.svg" alt="" class="hex" />
    <div class="hex-content">
      <img :src="hexClone.image" alt="" />
      <p>{{ hexClone.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HealthApp1203Hex",
  props: ["hex"],
  data() {
    return {
      hexClone: {},
    };
  },
  watch: {
    hex(val) {
      this.hexClone = JSON.parse(JSON.stringify(val));
    },
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
  width: 134px;
  height: 116px;
}
.hex-content {
  position: absolute;
  top: 30px;
  left: 40px;
}
.hex-content img {
  width: 53px;
  height: 45px;
}
.hex-content p {
  color: #fff;
}
</style>
