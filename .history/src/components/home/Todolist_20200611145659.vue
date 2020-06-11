<template>
  <div class="todo_list">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
				<el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange"></el-checkbox>
        <span>Todolist</span>
      </div>
      <div>
				<el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
  </el-checkbox-group>
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
    return {
      list: [
        "star this repository",
        "fork this repository",
        "follow author",
        "vue-admin",
        "vue",
        "element-ui",
        "axios",
        "webpack"
      ]
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box-card {
  height: 440px;
}
</style>