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
          type="primary"
          @click="handleEdit(scope.$index, scope.row)"><i class="el-icon-edit"></i> 修改</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"><i class="el-icon-delete"></i> 删除</el-button>
      </template>
    </el-table-column>
  </el-table>

<el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
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
      tableData: [],
      currentPage4: 4
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
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
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