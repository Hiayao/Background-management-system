<template>
  <!-- 首页的子组件，最下面的那一排 -->
  <div class="cardAll">
    <!-- 左边的订单卡片 -->
    <el-card class="order">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="num" label="Order_No" width="180" align="center"></el-table-column>
        <el-table-column prop="price" label="Price" align="center">
          <template slot-scope="scope">￥{{scope.row.price}}</template>
        </el-table-column>

        <el-table-column prop="status" label="Status" align="center">
          <template slot-scope="scope">
            <el-tag type="status" v-if="scope.row.status === 0">pending</el-tag>
            <el-tag type="danger" v-else>success</el-tag>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <!-- 中间的todolist -->
    <el-card class="todolist"></el-card>

    <!-- 右边的卡片 -->
    <el-card class="todolist">
      <!-- 图片 -->
      <img
        src="https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png"
        alt
        class="img"
      />
      <!-- 进度条 -->
      <div class="vue" v-for="(item,index) in list" :key="index">
        <div class="name">{{item.name}}</div>
        <el-progress
          :percentage="item.progress * 100"
          class="speed"
          status="success"
          v-if="item.progress === 1"
        ></el-progress>
        <el-progress :percentage="item.progress * 100" class="speed" v-else></el-progress>
      </div>
    </el-card>
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
      tableData: [],
      list: []
    };
  },
  methods: {
    //   左右订单请求
    getData() {
      axios
        .get("/api/orderData")
        .then(res => {
          this.tableData = res.data.data;
          //   console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 右边进度条请求
    getDataprogress() {
      axios
        .get("/api/progress")
        .then(res => {
          this.list = res.data.data;
          console.log(res.data.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getData();
    this.getDataprogress();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.todolist {
  width: 280px;
  height: 440px;
  margin-left: 10px;
}
.order {
  width: 580px;
    height: 440px;
  font-size: 12px;
  display: flex;
}
.cardAll {
  display: flex;
  margin: 20px 0 0 20px;
}
.img {
  width: 100%;
  
  padding-right: 10px;
}
.vue {
  position: relative;
  top: 30px;
  left: -20px;
  text-align: left;
}
.speed {
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
}
 .name {
   font-size: 12px;
 padding-left: 10px;
 }
</style>