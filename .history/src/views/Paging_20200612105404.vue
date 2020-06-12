<template>
  <!-- 分页表格 -->
  <div class="paging__">
    <el-input placeholder="请输入你想搜索的商品名称" v-model="input" clearable></el-input>

    <!-- 商品名称 -->
    <el-card class="box-card">
    <el-table
      :data="tableData.slice((currentPage -1)*pageSize,currentPage*pageSize)"
      style="width: 100%"
    >
      <el-table-column label="名称" width="370">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.NAME }}</span>
        </template>
      </el-table-column>
      <!-- 商品编号 -->
      <el-table-column label="商品编号" width="150">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.GOODS_SERIAL_NUMBER }}</span>
        </template>
      </el-table-column>
      <!-- 原价 -->
      <el-table-column label="原价" width="100">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.ORI_PRICE }}</span>
        </template>
      </el-table-column>
      <!-- 现价 -->
      <el-table-column label="现价" width="100">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.PRESENT_PRICE }}</span>
        </template>
      </el-table-column>
      <!-- 操作按钮 -->
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">
            <i class="el-icon-edit"></i> 修改
          </el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">
            <i class="el-icon-delete"></i> 删除
          </el-button>
        </template>
        
      </el-table-column>
      
    </el-table>
    <!-- 分页功能 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="694"
      ></el-pagination></el-card>
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
      currentPage: 1,
      pageSize: 10
    };
  },
  methods: {
    // 商品数据
    gettableData() {
      axios
        .get("/api/tableData")
        .then(res => {
          this.tableData = res.data.data;
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
      this.tableData.splice(index,1)
      console.log(index, row);
    },
    handleSizeChange(val) {
      this.pageSize = val;
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      // console.log(`当前页: ${val}`);
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
 
  width: 100%;
}
.el-input {
  width: 30%;
  position: relative;
  bottom: 10px;
}

.el-pagination {
  width: 100%;
  margin-top: 15px;
}

</style>