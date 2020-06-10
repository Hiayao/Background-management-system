<template>
  <div class="cardAll">
    
    <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="Order_No"
      width="180">
      
        
        <span style="margin-left: 10px">{{ tableData.num }}</span>
      
    </el-table-column>
    <el-table-column
      label="Price"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="Status">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>

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
      status: "",
      tableData: []
    };
  },
  methods: {
    getData() {
      axios
        .get("/api/orderData")
        .then(res => {
          this.tableData = res.data.data;
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