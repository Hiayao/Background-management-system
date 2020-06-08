<template>
  <div class="All">
    <div>
      <img src="../assets/相逢.jpg" alt class="img"/>
    </div>
    <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>欢迎来到军师后台管理系统</span>
    
  </div>
  <div>
    
  </div>
</el-card>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.img {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
}
  .box-card {
    margin-top: 10%;
    width: 480px;
  }
.All {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>