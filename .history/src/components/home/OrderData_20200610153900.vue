<template>
  <div class="cardAll">
    <el-card class="order"></el-card>
    <el-card class="todolist"></el-card>
    <el-card class="todolist"></el-card>
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
.todolist {
  width: 280px;
  height: 400px;
  margin-left: 10px;
}
.order {
    width: 580px;
  height: 400px;
}
.cardAll {
    display: flex;
    margin: 20px 0 0 20px;
}
</style>