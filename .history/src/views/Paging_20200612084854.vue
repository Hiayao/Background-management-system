<template>
  <!-- 分页表格 -->
  <div class="paging__">
    <el-input placeholder="请输入内容" v-model="input" clearable></el-input>
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
      input: ""
    };
  },
  methods: {
    gettableData() {
      axios
        .get("/api/tableData")
        .then(res => {
          console.log(res.data.data);
        })
        .catch(err => {
          console.log(err);
        });
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
</style>