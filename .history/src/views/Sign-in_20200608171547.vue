<template>
  <div>
    <div>
      <img src="../assets/sabo.gif" alt class="img" />
    </div>
    <div>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>卡片名称</span>
        </div>
        <div></div>
      </el-card>
    </div>
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
  width: 100%;
}
.box-card {
    width: 480px;
    margin-top: -100px;
    z-index: 3;
  }
</style>