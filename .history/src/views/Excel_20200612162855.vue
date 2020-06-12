<template>
  <!-- 导出excel页 -->
  <div class="e__xcel">

    <!-- 商品表单 -->
    <el-table :data="tableData.slice((currentPage -1)*pageSize,currentPage*pageSize)" style="width: 100%">
      <el-table-column prop="NAME" label="名称" width="380"></el-table-column>
      <el-table-column prop="GOODS_SERIAL_NUMBER" label="商品编号" width="280"></el-table-column>
      <el-table-column prop="ORI_PRICE" label="原价" width="200"></el-table-column>
      <el-table-column prop="PRESENT_PRICE" label="现价" width="200"></el-table-column>
    </el-table>

    <!-- 分页器 -->
    <div>
      <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.length">
    </el-pagination>
    </div>

    <!-- 导出按钮 -->
    <el-button type="primary" size=small>导出xls</el-button>
    <el-button type="danger" size=small>导出csv</el-button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      tableData: [],
      currentPage: 1,
      pageSize:10
    };
  },
  methods: {
    getData(){
      axios.get("/api/tableData")
        .then(res => {
          this.tableData = res.data.data;
          console.log(res.data.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleSizeChange(val) {
      this.pageSize = val;
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        console.log(`当前页: ${val}`);
      }
  },
  mounted() {
    this.getData()
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>

</style>