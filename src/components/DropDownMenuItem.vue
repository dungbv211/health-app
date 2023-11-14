<!-- Component name DropdownMenuItem va DropdownMenu -->
<!-- Rename drop -> label -->
<!-- Them props: linkTo ....  -->

<template>
  <div class="container-main">
    <router-link :to="label.url" class="routerlink-css">{{
      label.content
    }}</router-link>
  </div>
</template>

<script>
export default {
  name: "HealthApp1203DropDownMenu",
  props: ["label"],
};
</script>

<style scoped>
.container-main {
  width: 280px;
  height: 72px;
  background-color: #777;
  color: #fff;
  position: relative;
  border-top: 1px solid #656565;
}

.container-main:last-child {
  border-bottom: 1px solid #656565;
}
.container-main:hover {
  background-color: #605f5f;
}
.routerlink-css {
  position: absolute;
  top: 23px;
  left: 30px;
  color: #fff;
  text-decoration: none;
}
</style>
