<template>
  <!-- 已发布页 -->
  <div>
    <el-table :data="tableData" style="width: 100%">
      <!-- 文章编号 -->
      <el-table-column type="index" label="#" width="80"></el-table-column>
      <!-- 标题 -->
      <el-table-column label="标题" width="180">
        <template slot-scope="scope">
          <span>{{ scope.row.title }}</span>
        </template>
      </el-table-column>
      <!-- 作者 -->
      <el-table-column label="作者" width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>
      <!-- 类目 -->
      <el-table-column label="类目" width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.category }}</span>
        </template>
      </el-table-column>
      <!-- 来源 -->
      <el-table-column label="来源" width="180">
        <template slot-scope="scope">
          <span>{{ scope.row.source }}</span>
        </template>
      </el-table-column>
      <!-- 重要性 -->
      <el-table-column label="重要性" width="180">
        <template slot-scope="scope">
          <span>
            <el-rate
              :value=" scope.row.star "
              disabled
              show-score
              text-color="#ff9900"
              
            ></el-rate>
            
          </span>
        </template>
      </el-table-column>
      <!-- 发布时间 -->
      <el-table-column label="发布时间" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span>{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <!-- 操作 -->
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
      tableData: [],
      value:''
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    getData() {
      axios
        .get("/api/article/allArticle")
        .then(res => {
          this.tableData = res.data.data;
          console.log(res);
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
</style>