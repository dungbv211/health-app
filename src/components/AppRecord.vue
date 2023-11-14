<template>
  <div class="record-content">
    <img :src="record.image" alt="image" class="record-background" />
    <div class="record__content">
      <div class="record-content__top">{{ record.name }}</div>
      <div class="record-content__bottom">{{ record.description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HealthApp1203Record",
  props: ["record"],
  
};
</script>

<style scoped>
.record__content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.record-background {
  background-color: #626262;
  margin: 24px;
  object-fit: cover;
}
.record-content {
  position: relative;
  color: #ffcc21;
  background: #ffcc21;
}

.record-content__top {
  width: 240px;
  text-align: center;
  color: #ffcc21;
  font-size: 25px;
  font-weight: 400;
}
.record-content__bottom {
  background: #ff963c;
  color: #fff;
  text-align: center;
  font-size: 14px;
  width: 160px;
  height: 24px;
  margin: 0 auto;
}
</style>
