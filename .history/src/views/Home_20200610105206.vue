<template>
  <!-- 首页 -->
  <div class="el--main">
    <div class="cardAll">
      <el-card class="box-card">
        <div>
          <img src="../assets/人数.svg" alt class="img" />
        </div>
        <div class="data">
          <div class="dataName">New Visits</div>
          <div class="dataDa">
            <countTo :startVal="startVal" :endVal="this.visits" :duration="3000"></countTo>
          </div>
        </div>
      </el-card>

      <el-card class="box-card">
        <div>
          <img src="../assets/消息.svg" alt class="img" />
        </div>
        <div class="data">
          <div class="dataName">Messages</div>
          <div class="dataDa">
            <countTo :startVal="startVal" :endVal="this.messages" :duration="3000"></countTo>
          </div>
        </div>
      </el-card>

      <el-card class="box-card">
        <div>
          <img src="../assets/钱.svg" alt class="img" />
        </div>
        <div class="data">
          <div class="dataName">Purchases</div>
          <div class="dataDa">
            <countTo :startVal="startVal" :endVal="this.purchases" :duration="3000"></countTo>
          </div>
        </div>
      </el-card>

      <el-card class="box-card">
        <div>
          <img src="../assets/购物车.svg" alt class="img" />
        </div>
        <div class="data">
          <div class="dataName">Shopping</div>
          <div class="dataDa">
            <countTo :startVal="startVal" :endVal="this.shopping" :duration="3000"></countTo>
          </div>
        </div>
      </el-card>
    </div>

    <el-card class="cardTwo">
      <ve-line :data="chartData" :settings="chartSettings"></ve-line>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";
import countTo from "vue-count-to";
export default {
  components: { countTo },
  name: "",
  props: {},

  data() {
    this.chartSettings = {
        metrics: ['访问用户', '下单用户'],
        dimension: ['date']
    }
    return {
      visits: 0,
      messages: 0,
      purchases: 0,
      shopping: 0,
      startVal: 0,
      endVal: 0,
      chartData: {
          columns: ['日期', '访问用户', '下单用户', '下单率'],
          rows: [
           { 'date': 'this.date', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
            { '日期': '1/2', 'expected': this.expected, 'actual': this.actual},
            { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
            { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
            { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
            { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
          ]
        }
      
    };
  },
  methods: {
    getData() {
      axios
        .get("/api/homeData")
        .then(res => {
          // num.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')将数字转换成三位一逗号
          this.visits = res.data.data.visits;
          this.messages = res.data.data.messages;
          this.purchases = res.data.data.purchases;
          this.shopping = res.data.data.shopping;
          // console.log(res.data.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    gethomeChat(){
      axios.get('/api/homeChat').then(res => {
        console.log(res.data.data)
      }).catch(err => {
        console.log (err)
      })
    }
  },
  mounted() {
    this.getData();this.gethomeChat()
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box-card {
  width: 248px;
  height: 100px;
  margin-left: 20px;
  position: relative;
}
.cardAll {
  display: flex;
}
.img {
  width: 50px;
  height: 50px;
  position: absolute;
  top: 24px;
  left: 10px;
}
.data {
  width: 80px;
  height: 20px;
  position: absolute;
  top: -60px;
  right: 10px;
}
.dataName {
  width: 80px;
  height: 10px;
  position: absolute;
  top: 15px;
  right: 10px;
  color: #999;
}
.dataDa {
  width: 80px;
  height: 30px;
  position: absolute;
  top: 38px;
  right: 10px;
  font-size: 14px;
  color: #666;
}
.cardTwo {
  // padding: 0;
  height: 250px;
 margin: 20px;
}
</style>
