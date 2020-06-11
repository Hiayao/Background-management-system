<template>
  <div class="todo_list">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-checkbox
          :indeterminate="isIndeterminate"
          v-model="checkAll"
          @change="handleCheckAllChange"
        ></el-checkbox>
        <span class="name">Todolist</span>
      </div>
      <div class="list">
        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
          <el-checkbox v-for="city in cities" :label="city" :key="city">
            <div>{{city}}</div>
          </el-checkbox>
        </el-checkbox-group>
      </div>	
			
			<div class="foot">
				<div class="footOne">X items left</div>
				<div class="footTwo" >
					<div class="footTA">All</div>
					<div class="footTA">Active</div>
					<div class="footTA">Completed</div>
				</div>
			</div>
    </el-card>

	
  </div>
</template>

<script>
const list = [
  "star this repository",
  "fork this repository",
  "follow author",
  "vue-admin",
  "vue",
  "element-ui",
  "axios",
  "webpack"
];
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      checkAll: false,
      checkedCities: [],
      cities: list,
      isIndeterminate: false
      // list: [
      //   "star this repository",
      //   "fork this repository",
      //   "follow author",
      //   "vue-admin",
      //   "vue",
      //   "element-ui",
      //   "axios",
      //   "webpack"
      // ]
    };
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? list : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box-card {
  height: 440px;
}
.name{
	position: relative;
	top:-22px;
	left: 80px;
}
.clearfix{
	position: relative;
    top: -6px;
}
.foot {
	width: 100%;
	height: 60px;
	display: flex;
	font-size: 10px;
	margin-top: 20px;
}
.list {
	border-bottom: 1px solid #666666;
}
.footTwo {
	width: 70%;
	display: flex;
	justify-content: flex-end;
}
.fooeOne {
	width: 30%;
}
.footTA {
	width: 28%;
}

</style>