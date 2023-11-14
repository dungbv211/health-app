<template>
  <div class="container-main">
    <img :src="photo.image" alt="photo" />
    <div class="photo-content">
      <p>{{ photo.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HealthApp1203Photo",
  props: ["photo"], // tach ra image, text // khi v-bind cho photo thi can bind photo.image va photo.text

};
</script>

<style scoped>
.container-main {
  position: relative;
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
