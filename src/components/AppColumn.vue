<template>
  <div class="container-main">
    <div class="column-photo">
      <img :src="column.image" alt="column" />
      <div class="column-photo__text">{{ column.date }}</div>
    </div>
    <span class="column-content">
      {{ column.description }}
    </span>
    <span class="column-name">{{ column.tag }}</span>
  </div>
</template>

<script>
export default {
  name: "HealthApp1203Column",
  props: ["column"],
};
</script>

<style scoped>
.container-main {
  width: 234px;
  height: 224px;
  display: flex;
  flex-direction: column;
}
.column-photo {
  width: 100%;
  position: relative;
  margin-bottom: 15px;
}
.column-photo__text {
  position: absolute;
  bottom: 0;
  left: 0;
  background: #ffcc21;
  color: #fff;
  width: 144px;
  height: 24px;
}
.column-content {
  font-size: 15px;
  font-weight: 300;
  letter-spacing: 0.075px;
}
.column-name {
  color: #ff963c;
  font-size: 12px;
  font-weight: 300;
}
</style>
