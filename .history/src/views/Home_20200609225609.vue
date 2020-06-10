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
            <div class="dataDa" v-if="list">{{list.visits}}</div>
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
            <div class="dataDa">{{this.visits}}</div>
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
            <div class="dataDa" v-if="list === true">{{list.visits}}</div>
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
            <div class="dataDa" v-if="list">{{list.visits}}</div>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      visits:'',
      
      
    };
  },
  methods: {
    getData() {
      axios
        .get("/api/homeData")
        .then(res => {
          // this.list =res.data.data;
          // console.log(this.list);
          this.visits = res.data.data.visits
          console.log(res.data.data.shopping); 
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

  position: relative;
}
.cardAll {
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
// .data {
//   width: 80px;
//   height: 20px;
//   position: absolute;
//   top: -24px;
//   right: 10px;
// }
.dataName {
  width: 80px;
  height: 10px;
  position: absolute;
  top: -48px;
  right: 10px;
}
.dataDa {
  width: 80px;
  height: 30px;
  position: absolute;
  top: 38px;
  right: 10px;
  z-index: 2;
}
</style>
