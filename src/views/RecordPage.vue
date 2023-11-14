<template>
  <div class="container-main">
    <app-header></app-header>
    <div class="d-flex justify-content-center gap-4 record-image">
      <app-record
        v-for="record in records"
        :key="record.id"
        :record="record"
      ></app-record>
    </div>
    <div class="record-body">
      <img src="/assets/record/bodyRecord.png" alt="bodyRecord" />
      <img src="/assets/record/myRecord.png" alt="myRecord" />
    </div>
    <div class="diary">
      <p>MY DIARY</p>
      <div class="diary-table">
        <div class="diary-table__item" v-for="card in diary" :key="card.id">
          <p>
            {{ card.date }} <br />
            {{ card.time }}
          </p>
          <span>
            {{ card.title }}<br />
            {{ card.description }}
          </span>
        </div>
      </div>
    </div>
    <div class="content-button">
      <app-button
        v-for="label in buttons"
        :key="label.id"
        :label="label"
      ></app-button>
    </div>
    <img src="/assets/scroll.svg" alt="scroll" class="scroll" />
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import AppRecord from "@/components/AppRecord";
import AppButton from "@/components/AppButton";
export default {
  name: "HealthAppRecordPage",
  components: {
    "app-header": AppHeader,
    "app-footer": AppFooter,
    "app-record": AppRecord,
    "app-button": AppButton,
  },

  data() {
    return {
      records: [
        {
          id: 1,
          image: "/assets/record/MyRecommend-1.png",
          name: "BODY RECORD",
          description: "自分のカラダの記録",
        },
        {
          id: 2,
          image: "/assets/record/MyRecommend-2.png",
          name: "MY EXERCISE",
          description: "自分の運動の記録",
        },
        {
          id: 3,
          image: "/assets/record/MyRecommend-3.png",
          name: "MY DIARY",
          description: "自分の日記",
        },
      ],
      diary: [
        {
          id: 1,
          date: "2021.05.21",
          time: "23:25",
          title: "私の日記の記録が一部表示されます。",
          description:
            "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
        },
        {
          id: 2,
          date: "2021.05.21",
          time: "23:25",
          title: "私の日記の記録が一部表示されます。",
          description:
            "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
        },
        {
          id: 3,
          date: "2021.05.21",
          time: "23:25",
          title: "私の日記の記録が一部表示されます。",
          description:
            "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
        },
        {
          id: 4,
          date: "2021.05.21",
          time: "23:25",
          title: "私の日記の記録が一部表示されます。",
          description:
            "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
        },
        {
          id: 5,
          date: "2021.05.21",
          time: "23:25",
          title: "私の日記の記録が一部表示されます。",
          description:
            "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
        },
        {
          id: 6,
          date: "2021.05.21",
          time: "23:25",
          title: "私の日記の記録が一部表示されます。",
          description:
            "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
        },
        {
          id: 7,
          date: "2021.05.21",
          time: "23:25",
          title: "私の日記の記録が一部表示されます。",
          description:
            "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
        },
        {
          id: 8,
          date: "2021.05.21",
          time: "23:25",
          title: "私の日記の記録が一部表示されます。",
          description:
            "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
        },
      ],
      buttons: [{ id: 1, content: "自分の日記をもっと見る" }],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.container-main {
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
}
.scroll{
  position: absolute;
  top: 40%;
  right: 96px;
}
.record-image {
  margin: 55px 0;
}
.record-body {
  text-align: center;
}
.record-body img {
  margin-bottom: 50px;
  width: 920px;
}
.diary {
  display: flex;
  flex-direction: column;
  max-width: 920px;
  margin: 0 auto;
}
.diary-table {
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 10px;
}
.diary-table__item {
  border: solid 1.5px #333;
  padding: 16px 16px 27px 16px;
}
.diary-table__item p {
  color: #414141;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  margin: 0;
}
.diary-table__item span {
  color: #414141;
  font-size: 12px;
  font-weight: 300;
  line-height: 17px;
  letter-spacing: 0.06px;
}
.content-button {
  text-align: center;
  margin: 20px 0;
}
</style>
