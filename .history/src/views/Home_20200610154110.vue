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

    <!-- 饼图 -->
      <el-card class="cardTre">
        <ve-ring :data="ringChat" :settings="chartSetring"></ve-ring>
      </el-card>

    <!-- 柱状图 -->
      <el-card class="cardTre">
        <ve-histogram :data="homeChatt" :settings="chartSetdata"></ve-histogram>
      </el-card>
    </div>

    <OrderData></OrderData>
  </div>
</template>

<script>
import axios from "axios";
import countTo from "vue-count-to";
import OrderData from "../components/home/OrderData"
export default {
  components: { countTo,
  OrderData },
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
        // '日期': 'date',
        // '访问用户': 'PV',
        // '下单用户': 'Order',
        // '下单率': 'orderRate'
      }
    };
    // 饼图
    this.chartSetring = {
        roseType: 'radius'
    };

      // 柱状图
      this.chartSetdata = {
        metrics: ['expected', 'actual'],
        dimension: ['date']
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
        columns: [
          "name",
          "ministration",
          "sales",
          "techology",
          "delelopmer",
          "marketing"
        ],
        rows: []
      },
      // 饼图
       ringChat: {
          columns: ['name', 'data'],
          rows: []
        },
      // 柱状图  
        homeChatt: {
          columns: ['date', 'expected', 'actual'],
          rows: []
        },
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
          // console.log(res.data.data);
        })
        .catch(err => {
          console.log(err);
        });
    },

    // 饼图数据
    getringChat() {
      axios
        .get("/api/ringChat")
        .then(res => {
          this.ringChat.rows = res.data.data;
          // console.log(res.data.data);
        })
        .catch(err => {
          console.log(err);
        });
    },

    // 柱状图数据
    getdataChat() {
      axios
        .get("/api/homeChat")
        .then(res => {
          this.homeChatt.rows= res.data.data;
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
    this.getringChat();
    this.getdataChat();
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
  margin-left: 10px;
  height: 370px;
}
.cardTreAll {
  display: flex;
}
</style>
