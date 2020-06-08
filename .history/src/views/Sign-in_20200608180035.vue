<template>
  <div class="All">
    <div>
      <img src="../assets/相逢.jpg" alt class="img"/>
    </div>
    <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>卡片名称</span>
    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
  </div>
  <div v-for="o in 4" :key="o" class="text item">
    {{'列表内容 ' + o }}
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
.card {
  width: 480px;
  width: 480px;
  height: 300px;
  background: white;
  position: absolute;
  top:24%;
}
.All {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>