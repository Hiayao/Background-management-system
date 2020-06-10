<template>
  <!-- 首页 -->
  <div class="el--main">
    <!-- 计数器图 -->
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

    <!-- 折线图 -->
    <el-card class="cardTwo">
      <ve-line :data="homeChat" :settings="chartSethome"></ve-line>
    </el-card>

    <!-- 雷达图和饼图和柱状图 -->
    <div class="cardTreAll">
      
        <el-card class="cardTre">
          <ve-radar :data="radarChat" :settings="chartSetradar"></ve-radar>
        </el-card>
      
      
        <el-card class="cardTre"></el-card>
      
        <el-card class="cardTre"></el-card>
      
    </div>
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
    // 折线图
    this.chartSethome = {
      metrics: ["expected", "actual"],
      dimension: ["date"]
    };
    // 雷达图
    this.chartSetradar = {
        labelMap: {
          '日期': 'date',
          '访问用户': 'PV',
          '下单用户': 'Order',
          '下单率': 'orderRate'
        }
    };
    return {
      visits: 0,
      messages: 0,
      purchases: 0,
      shopping: 0,
      startVal: 0,
      endVal: 0,
      // 折线图
      homeChat: {
        columns: ["date", "expected", "actual"],
        rows: []
      },
      // 雷达图
      radarChat: {
          columns: ['name', 'sales', 'ministration'],
          rows: [
            { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
            { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
            { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
            { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
            { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
            { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
          ]
        }
    };
  },
  methods: {
    // 计数器数据
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

    // 折线图数据
    gethomeChat() {
      axios
        .get("/api/homeChat")
        .then(res => {
          this.homeChat.rows = res.data.data;
          // console.log(res.data.data);
        })
        .catch(err => {
          console.log(err);
        });
    },

    // 雷达数据
    getradarChat() {
      axios
        .get("/api/radarChat")
        .then(res => {
          this.radarChat.rows = res.data.data;
          console.log(res.data.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getData();
    this.gethomeChat();
    this.getradarChat();
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
  left: 30px;
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
  
  height: 380px;
  margin: 20px 0 20px 20px;
}
.cardTre {
  width: 343px;
  margin-left: 20px;
  height: 350px;

}
.cardTreAll {
  display: flex;
  
}
</style>
