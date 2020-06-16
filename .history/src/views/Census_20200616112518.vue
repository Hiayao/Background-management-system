<template>
  <!-- 统计页 -->
  <div>
    <div class="release">
      <div class="releaseA">
        <div class="word">
          <div class="wordA">今日发布</div>
          <div class="wordA">2</div>
        </div>
        <div class="ico">
          <i class="el-icon-check"></i>
        </div>
      </div>
      <div class="releaseB">
        <div class="word">
          <div class="wordA">原创文章</div>
          <div class="wordA">3</div>
        </div>
        <div class="ico">
          <i class="el-icon-tickets"></i>
        </div>
      </div>
      <div class="releaseC">
        <div class="word">
          <div class="wordA">新留言</div>
          <div class="wordA">4</div>
        </div>
        <div class="ico">
          <i class="el-icon-bell"></i>
        </div>
      </div>
      <div class="releaseD">
        <div class="word">
          <div class="wordA">新消息</div>
          <div class="wordA">5</div>
        </div>
        <div class="ico">
          <i class="el-icon-phone-outline"></i>
        </div>
      </div>
    </div>
    <div class="tu">
      <div>
        <ve-pie :data="chartData"></ve-pie>
      </div>
      <div>
        <ve-ring :data="chartData2" ></ve-ring>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import groupBy from "lodash/groupBy";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    this.chartSettings = {
      roseType: "radius"
    };
    return {
      chartData: {
        columns: ["分类", "数量"],
        rows: []
      },
      chartData2: {
        columns: ["日期", "访问用户"],
        rows: [
          { 日期: "1/1", 访问用户: 1393 },
          { 日期: "1/2", 访问用户: 3530 },
          { 日期: "1/3", 访问用户: 2923 },
          { 日期: "1/4", 访问用户: 1723 },
          { 日期: "1/5", 访问用户: 3792 },
          { 日期: "1/6", 访问用户: 4593 }
        ]
      }
    };
  },
  methods: {},
  mounted() {
    axios
      .get("/api/article/allArticle")
      .then(res => {
        let obj = groupBy(res.data.data, "category");
        // console.log(res.data.data)
        for (let i in obj) {
          this.chartData.rows.push({
            数量: obj[i].length,
            分类: i
          });
        }
        console.log(obj);
      })
      .catch(err => {
        console.log(err);
      });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.releaseA {
  width: 25%;
  height: 50px;
  background: rgb(124, 202, 191);
  display: flex;
  justify-content: space-around;
}
.releaseB {
  width: 25%;
  height: 50px;
  background: rgb(232, 138, 135);
  display: flex;
  justify-content: space-around;
}
.releaseC {
  width: 25%;
  height: 50px;
  background: rgb(131, 117, 163);
  display: flex;
  justify-content: space-around;
}
.releaseD {
  width: 25%;
  height: 50px;
  background: rgb(159, 206, 193);
  display: flex;
  justify-content: space-around;
}
.release {
  width: 100%;
  height: 50px;
  display: flex;
}
.word {
  text-align: center;
  width: 70%;
  line-height: 50px;
  font-size: 12px;
  color: white;
}
.wordA {
  width: 100%;
  line-height: 25px;
  text-align: center;
}

.ico {
  width: 10%;
  line-height: 50px;
}
.el-icon-check:before,
.el-icon-tickets:before,
.el-icon-bell:before,
.el-icon-phone-outline:before {
  color: white;
}
.tu {
  // display: flex;
}
</style>