<template>
  <div class="All">
    <div>
      <img src="../assets/相逢.jpg" alt class="img" />
    </div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="title">欢迎来到军师后台管理系统</span>
      </div>
      <div></div>
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
  background: rgba(255, 255, 255, 0.3);
  border: 0;
}
.All {
  display: flex;
  justify-content: center;
  align-items: center;
}
.title {
  font-size: 20px;
  font-weight: 700;
  color: #fff;
}
.clearfix {
  text-align: center;
}
</style>