<template>
  <div class="cardAll">
    <el-card class="box-card"></el-card>
    <el-card class="box-card"></el-card>
    <el-card class="box-card"></el-card>
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
  width: 480px;
  height: 400px;
}
.cardAll {
    display: flex;
    margin: 20px 0 0 20px;
}
</style>