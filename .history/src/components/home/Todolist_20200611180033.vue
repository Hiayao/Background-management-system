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
					<div class="footTA" @click="border" :class="{'border':flag === true}">All</div>
					<div class="footTB">Active</div>
					<div class="footTC">Completed</div>
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
			flag:false,
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
		},
		border(){
			this.flag = true
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
	line-height: 30px;
	display: flex;
	font-size: 10px;
	// margin-top: 20px;
}
.list {
	border-bottom: 0.6px solid #999;
	font-size: 12px;
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
	width: 18%;
	&:hover{
		border: 1px solid #999;
	}
}
.footTB {
	width: 28%;
	&:hover{
		border: 1px solid #999;
	}
}
.footTC {
	width: 38%;
	&:hover{
		border: 1px solid #999;
	}
}
.border{
	border: 1px solid #999;
}
</style>