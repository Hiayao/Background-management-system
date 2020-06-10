<template>
  <!-- 首页 -->
  <div>
    <div class="cardAll">
      <div class="box-card">
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
      </div>

      <div class="box-card">
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
      </div>

      <div class="box-card">
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
      </div>

      <div class="box-card">
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
    return {
      visits: 0,
      messages: 0,
      purchases: 0,
      shopping: 0,
      startVal: 0,
      endVal: 0
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
    }
  },
  mounted() {
    this.getData();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box-card {
  width: 250px;
  height: 100px;
  margin-left: 10px;
  position: relative;
}
.cardAll {
  width: 1240px;
  display: flex;
  justify-content: space-between;
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
</style>
