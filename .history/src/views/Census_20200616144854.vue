<template>
  <!-- 统计页 -->
  <div>
    <div class="release">
      <div class="releaseA">
        <div class="word">
          <div class="wordA">今日发布</div>
          <div class="wordA">{{arr.length}}</div>
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
      <div class="one">
        <ve-pie :data="chartData"></ve-pie>
      </div>
      <div class="two">
        <ve-ring :data="chartData2" :settings="chartSettings"></ve-ring>
      </div>
    </div>
    <ve-waterfall :data="chartData3" :settings="chartSettingt"></ve-waterfall>
  </div>
</template>

<script>
import axios from "axios";
import groupBy from "lodash/groupBy";
import dayjs from "dayjs"
export default {
  name: "",
  props: {},
  components: {},
  data() {
    this.chartSettings = {
      roseType: "radius"
    };
    this.chartSettingt = {
        dimension: '时间',
        metrics: '数量'
      }
    return {
      arr:[],
      chartData: {
        columns: ["分类", "数量"],
        rows: []
      },
      chartData2: {
        columns: ["分类", "数量"],
        rows: []
      },
      chartData3: {
          columns: ['数量', '时间'],
          rows: []
        }
    };
  },
  methods: {},
  mounted() {
    axios
      .get("/api/article/allArticle")
      .then(res => {
        let obj = groupBy(res.data.data, "category");
        // console.log(res.data.data);
        for (let i in obj) {
          this.chartData.rows.push({
            数量: obj[i].length,
            分类: i
          });
        }
        let obj1 = groupBy(res.data.data, "source");
        for (let i in obj1) {
          this.chartData2.rows.push({
            数量: obj1[i].length,
            分类: i
          });
        }
        let obj2 = groupBy(res.data.data, "date");
        for (let i in obj2) {
          this.chartData3.rows.push({
            数量: obj2[i].length,
            时间: dayjs(i).format('YYYY年MM月DD日')
          });
        }
        // 获取今日发布和原创文章的数量
        // 先把已发表文章的时间转换成年月日的格式
       res.data.data.map(item => {
          item.date = dayjs(item.date).format('YYYY年MM月DD日')
        })
        // 然后定义一个数组来组成已发表文章里和当前年月日相等的数据
        let arr = res.data.data.filter(item => {
        return item.date === dayjs().format('YYYY年MM月DD日')
        }) 
        console.log(arr);
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
  display: flex;
  margin-top: 50px;
}
.one {
  flex: 1;
}
.two {
  flex: 1;
}
</style>