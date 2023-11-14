<!-- Doi ten component (phai co 2 tieng tro len) AppButton -->
<!-- Truyen label cua button tu ben ngoai vao va su dung bang cach <app-button>content o day</app-button> -->

<template>
  <button>{{ label.content }}</button>
</template>

<script>
export default {
  name: "HealthApp1203Btn",
  props:['label']
};
</script>

<style scoped>
button {
  min-width: 296px;
  height: 56px;
  background: linear-gradient(33deg, #ffcc21 8.75%, #ff963c 86.64%);
  border-radius: 5px;
  border: none;
  color: #fff;
}
</style>
