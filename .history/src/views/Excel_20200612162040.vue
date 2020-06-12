<template>
  <!-- 导出excel页 -->
  <div class="e__xcel">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="NAME" label="名称" width="380"></el-table-column>
      <el-table-column prop="GOODS_SERIAL_NUMBER" label="商品编号" width="280"></el-table-column>
      <el-table-column prop="ORI_PRICE" label="原价" width="220"></el-table-column>
      <el-table-column prop="PRESENT_PRICE" label="现价" width="220"></el-table-column>
    </el-table>
    <div>
      <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
    </div>
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
      currentPage: 1
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
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
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