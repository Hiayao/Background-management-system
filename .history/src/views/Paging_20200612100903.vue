<template>
  <!-- 分页表格 -->
  <div class="paging__">
    <el-input placeholder="请输入你想搜索的商品名称" v-model="input" clearable></el-input>


    <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="名称"
      width="370">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.NAME }}</span>
      </template>
    </el-table-column>
    
    <el-table-column
      label="商品编号"
      width="150">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.GOODS_SERIAL_NUMBER }}</span>
      </template>
    </el-table-column>

<el-table-column
      label="原价"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.ORI_PRICE }}</span>
      </template>
    </el-table-column>
    
    <el-table-column
      label="现价"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.PRESENT_PRICE }}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作">
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
      input: "",
      tableData: []
    };
  },
  methods: {
    gettableData() {
      axios
        .get("/api/tableData")
        .then(res => {
          this.tableData = res.data.data
          console.log(res.data.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
  },
  mounted() {
    this.gettableData();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.paging__ {
  position: relative;
  width: 100%;
}
.el-input {
        width: 30%;
        position: absolute;
        
    }
    .el-table{
      position: absolute;
      width: 100%;
      top: 60px;
    left: 8px;
    }
</style>