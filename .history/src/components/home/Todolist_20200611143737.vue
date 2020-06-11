<template>
  <div   class="t_d">
		<hr>
    <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label=""
      width="120" class="title">
			<div>
			Todolist</div>
      <template slot-scope="scope" >{{ scope.row.date }}</template>
    </el-table-column>
    
  </el-table>
  <div style="margin-top: 20px">
    <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
    <el-button @click="toggleSelection()">取消选择</el-button>
  </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
			tableData: [
				{
          date: 'star this repository',
          
          
        }, {
          date: 'fork this repository',
          
          
        }, {
          date: 'follow author',
          
        }, {
          date: 'vue-admin',
          
        }, {
          date: 'vue',
         
        }, {
          date: 'element-ui',
          
        }, {
          date: 'axios',
          
			  }, {
          date: 'webpack',
          
			  }
			],
        multipleSelection: []
      
		};
  },
  methods: {
		toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    
	},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.title{

}
</style>