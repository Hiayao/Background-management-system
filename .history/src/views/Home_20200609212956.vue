<template>
  <!-- 首页 -->
  <div>
    <div class="cardAll">
      <div>
        <el-card class="box-card"></el-card>
      </div>
      <div>
        <el-card class="box-card"></el-card>
      </div>
      <div>
        <el-card class="box-card"></el-card>
      </div>
      <div>
        <el-card class="box-card"></el-card>
      </div>
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
.box-card {
  width: 300px
  height: 100px;
}
.cardAll{
display: flex;
justify-content: space-between;
}
</style>
