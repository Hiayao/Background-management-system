<template>
  <div class="cardAll">
    <el-card class="order">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="num" label="Order_No" width="180"></el-table-column>
        <el-table-column  label="Price" width="180">￥ {{tableData.price}}</el-table-column>
        <el-table-column prop="status" label="Status" v-if="status === 0">pending</el-table-column>
        <el-table-column prop="status" label="Status" v-else-if ="status === 1">success</el-table-column>
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
        
      ]
    };
  },
  methods: {
    getData() {
      axios
        .get("/api/orderData")
        .then(res => {
            this.tableData = res.data.data
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
  height: 340px;
  margin-left: 10px;
}
.order {
  width: 580px;
  height: 340px;
  font-size: 12px;
  display: flex;
}
.cardAll {
  display: flex;
  margin: 20px 0 0 20px;
}

</style>