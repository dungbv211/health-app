<template>
  <div>
    <div @click="menuDropdown">
      <img src="/assets/icon_menu.svg" alt="menu" />
    </div>
    <div class="header-dropdown" v-show="isShowDropdown">
      <div class="header-dropdown__cancel text-end">
        <img src="/assets/cancel.svg" alt="cancel" @click="cancelDropdown" />
      </div>
      <Dropdown-Menu-item
        v-for="label in labels"
        :key="label.id"
        :label="label"
      ></Dropdown-Menu-item>
    </div>
  </div>
</template>
<script>
import DropDownMenuItem from "./DropDownMenuItem";

export default {
  components: {
    "Dropdown-Menu-item": DropDownMenuItem,
  },
  data() {
    return {
      labels: [
        { id: 1, content: "自分の記録", url: "/RecordPage" },
        { id: 2, content: "体重グラフ", url: "/" },
        { id: 3, content: "目標", url: "/" },
        { id: 4, content: "選択中のコース", url: "/" },
        { id: 5, content: "コラム一覧", url: "/ColumnPage" },
        { id: 6, content: "設定", url: "/" },
      ],
      isShowDropdown: false,
    };
  },
  methods: {
    menuDropdown() {
      this.isShowDropdown = true;
    },
    cancelDropdown() {
      this.isShowDropdown = false;
    },
  },
};
</script>
<style scoped>
.header-dropdown {
  position: absolute;
  top: 18px;
  right: 100px;
  z-index: 1000;
}
.header-dropdown__cancel img {
  background: #414141;
}
</style>
