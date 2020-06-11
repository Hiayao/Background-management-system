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
          <el-checkbox v-for="(item,index) in list" :label="list" :key="index">
            <div>{{item.title}}</div>
          </el-checkbox>
        </el-checkbox-group>
      </div>	
			
			<div class="foot">
				<div class="footOne">X items left</div>
				<div class="footTwo" >
					<div class="footTA" @click="border" :class="{'border':flag === true}">All</div>
					<div class="footTB" @click="border2" :class="{'border':flag2 === true}">Active</div>
					<div class="footTC" @click="border3" :class="{'border':flag3 === true}">Completed</div>
				</div>
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
			flag:false,
			flag2:false,
			flag3:false,
      checkAll: false,
      checkedCities: [],
      list : [
  {title:"star this repository"},
  {title:"fork this repository"},
  {title:"follow author"},
  {title:"vue-admin"},
  {title:"vue"},
 {title: "element-ui"},
 {title: "axios"},
 {title: "webpack"}
],
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
			this.flag2 = false
			this.flag3 = false
		},
		border2(){
			this.flag2 = true
			this.flag = false
			this.flag3 = false
		},
		border3(){
			this.flag3 = true
			this.flag2 = false
			this.flag = false
		}
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box-card {
	width: 100%;
	height: 100%;
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
}
.footTB {
	width: 28%;
}
.footTC {
	width: 38%;
}
.border{
	border: 1px solid rgb(212, 211, 211);
}
</style>