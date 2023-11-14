<template>
  <div class="container-main">
    <div class="hex-content">
      <img :src="hex.icon" alt="hexicon" />
      <p>{{ hex.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HealthApp1203Hex",
  props: ["hex"], // icon, text //khi v-bind cho hex thi can bind hex.icon va hex.text
};
</script>

<style scoped>
.container-main {
  background-image: url("../../public/assets/Hex-bg.png");
  width: 117px;
  height: 133px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
p{
  margin: 0;
}
.hex-content {
  top: 30px;
  left: 42px;
}
.hex-content img {
  width: 53px;
  height: 45px;
}
.hex-content p {
  color: #fff;
}
</style>
