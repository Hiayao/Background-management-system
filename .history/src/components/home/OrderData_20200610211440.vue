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
      <div>
        <img
          src="https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png"
          alt
          class="img"
        />
      </div>
      <div><ve-bar :data="chartData" :settings="chartSettings"></ve-bar></div>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  components: {},
  data() {// 进度表
     this.chartSettings = {
        xAxisType: ['KMB', 'KMB'],
        xAxisName: ['下单用户', '访问用户'],
        axisSite: {
          top: ['访问用户']
        }
      }
    return {
        // 订单
      tableData: [],
       chartData: {
          columns: ['日期', '访问用户', '下单用户'],
          rows: [
            { '日期': '1/1', '访问用户': 1393, '下单用户': 1093 },
            { '日期': '1/2', '访问用户': 3530, '下单用户': 3230 },
            { '日期': '1/3', '访问用户': 2923, '下单用户': 2623 },
            { '日期': '1/4', '访问用户': 1723, '下单用户': 1423 },
            { '日期': '1/5', '访问用户': 3792, '下单用户': 3492 },
            { '日期': '1/6', '访问用户': 4593, '下单用户': 4293 }
          ]
        }
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
          //   this.tableData = res.data.data;
          console.log(res.data);
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
  height: 340px;
  margin-left: 10px;
}
.order {
  width: 580px;
  //   height: 340px;
  font-size: 12px;
  display: flex;
}
.cardAll {
  display: flex;
  margin: 20px 0 0 20px;
}
.img {
  width: 100%;
  position: relative;
  right: 20px;
}
</style>