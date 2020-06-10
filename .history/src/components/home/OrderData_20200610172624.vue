<template>
  <div class="cardAll">
    <el-card class="order">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="num" label="Order_No" width="180"></el-table-column>
        <el-table-column prop="Price" label="Price" width="180"></el-table-column>
        <el-table-column prop="Status" label="Status"></el-table-column>
      </el-table>
    </el-card>
    <el-card class="todolist"></el-card>
    <el-card class="todolist"></el-card>
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
      tableData: [
        // {
        //   Order_No: "2016-05-02",
        //   Price: "王小虎",
        //   Status: "上海市普陀区金沙江路 1518 弄"
        // },
        // {
        //   Order_No: "2016-05-02",
        //   Price: "王小虎",
        //   Status: "上海市普陀区金沙江路 1518 弄"
        // },
        // {
        //    Order_No: "2016-05-02",
        //   Price: "王小虎",
        //   Status: "上海市普陀区金沙江路 1518 弄"
        // },
        // {
        //    Order_No: "2016-05-02",
        //   Price: "王小虎",
        //   Status: "上海市普陀区金沙江路 1518 弄"
        // }
      ]
    };
  },
  methods: {
    getData() {
      axios
        .get("/api/orderData")
        .then(res => {
            this.tableData = res.data
          console.log(res.data);
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
.todolist {
  width: 280px;
  height: 400px;
  margin-left: 10px;
}
.order {
  width: 580px;
  height: 400px;
  font-size: 12px;
  display: flex;
}
.cardAll {
  display: flex;
  margin: 20px 0 0 20px;
}

</style>