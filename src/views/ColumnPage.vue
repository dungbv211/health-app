<template>
  <div class="container-main">
    <app-header></app-header>
    <div class="content-main">
      <div class="content-top">
        <div class="content-box">
          <!-- For loop -->
          <h3>RECOMMENDED COLUMN</h3>
          <div class="content-line"></div>
          <h4>オススメ</h4>
        </div>
        <div class="content-box">
          <h3>RECOMMENDED DIET</h3>
          <div class="content-line"></div>
          <h4>ダイエット</h4>
        </div>
        <div class="content-box">
          <h3>RECOMMENDED BEAUTY</h3>
          <div class="content-line"></div>
          <h4>美容</h4>
        </div>
        <div class="content-box">
          <h3>RECOMMENDED HEALTH</h3>
          <div class="content-line"></div>
          <h4>健康</h4>
        </div>
      </div>
      <div class="content-group">
        <div class="content-column">
          <app-column
            v-for="column in columns"
            :key="column.id"
            :column="column"
          ></app-column>
        </div>
      </div>
      <div class="content-button">
        <app-button
          v-for="label in buttons"
          :key="label.id"
          :label="label"
        ></app-button>
      </div>
    </div>
    <img src="/assets/scroll.svg" alt="scroll" class="scroll" />
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import AppColumn from "@/components/AppColumn";
import AppButton from "@/components/AppButton";
export default {
  name: "HealthApp1203HomePage",
  components: {
    "app-header": AppHeader,
    "app-footer": AppFooter,
    "app-column": AppColumn,
    "app-button": AppButton,
  },

  data() {
    return {
      columns: [
        {
          id: 1,
          image: "/assets/column/column-1.png",
          tag: "#魚料理  #和食  #DHA",
          description:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        },
        {
          id: 2,
          image: "/assets/column/column-2.png",
          tag: "#魚料理  #和食  #DHA",
          description:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        },
        {
          id: 3,
          image: "/assets/column/column-3.png",
          tag: "#魚料理  #和食  #DHA",
          description:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        },
        {
          id: 4,
          image: "/assets/column/column-4.png",
          tag: "#魚料理  #和食  #DHA",
          description:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        },
        {
          id: 5,
          image: "/assets/column/column-5.png",
          tag: "#魚料理  #和食  #DHA",
          description:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        },
        {
          id: 6,
          image: "/assets/column/column-6.png",
          tag: "#魚料理  #和食  #DHA",
          description:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        },
        {
          id: 7,
          image: "/assets/column/column-7.png",
          tag: "#魚料理  #和食  #DHA",
          description:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        },
        {
          id: 8,
          image: "/assets/column/column-8.png",
          tag: "#魚料理  #和食  #DHA",
          description:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        },
      ],
      buttons: [{ id: 1, content: "コラムをもっと見る" }],
    };
  },
};
</script>

<style scoped>
.container-main {
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
}
.scroll {
  position: absolute;
  top: 65%;
  right: 96px;
}
.content-top {
  margin: 50px 0;
  display: flex;
  justify-content: center;
  gap: 32px;
}
.content-box {
  width: 216px;
  height: 144px;
  background: #2e2e2e;
  justify-content: center;
  display: flex;
  flex-direction: column;
}
.content-line {
  width: 56px;
  height: 1px;
  background: #fff;
  text-align: center;
  margin: 0 auto 10px;
}
h3 {
  color: #ffcc21;
  text-align: center;
  font-size: 22px;
  font-weight: 400;
}
h4 {
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-weight: 300;
}
.content-group {
  display: flex;
  justify-content: center;
}
.content-column {
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 8px;
}
.content-button {
  text-align: center;
  margin: 64px 0;
}
</style>
