<template>
  <div class="todo_list">
    <div class="todolist">
      <i class="el-icon-arrow-up"></i>
      <div class="title">Todo list</div>
    </div>
    <hr />
		<div class="box">
		<div v-for="(item,index) in todos" :key='index' class="box1">
			<div @mouseleave="leave(item)" @mouseenter="enter(item)" class="mouse">
				<div>
					<input type="checkbox" v-model="item.complete" />
				</div>
				<div class="word">{{item.title}}</div>
				<div><i class="el-icon-close"></i></div>
			</div>
		</div></div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      todos: [
        {
					title: "star this repository",
					complete: false
        },
        {
					title: "fork this repository",
					complete: false
        },
        {
					title: "follow author",
					complete: false
        },
        {
					title: "vue-admin",
					complete: false
        },
        {
					title: "vue-admin",
					complete: false
        },
        {
					title: "vue",
					complete: false
        },
        {
					title: "element-ui",
					complete: false
        },
        {
					title: "axios",
					complete: false
        },
        {
					title: "webpack",
					complete: false
        }
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
.todolist {
  display: flex;
  line-height: 50px;
  justify-content: space-between;
}
.title {
  height: 100%;
}
.word {
	
}
.box {
	width: 100%;
	height: 390px;
}
.box1 {
	height: 30px;
	display: flex;
}
.mouse {
  display: flex;
}
</style>