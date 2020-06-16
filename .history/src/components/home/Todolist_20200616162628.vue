<template>
  <div class="todo_list">
    <div class="todolist">
      <div>
        <i class="el-icon-arrow-up"></i>
      </div>
      <div class="title">Todo list</div>
    </div>
    <hr class="hr" />
    <div class="box">
      <div v-for="(item,index) in todos" :key="index" class="box1">
        <div @mouseleave="leave(item)" @mouseenter="enter(item)" class="mouse">
          <div>
            <input type="checkbox" v-model="item.complete" />
          </div>
          <div class="word">{{item.title}}</div>
          <div>
            <i class="el-icon-close" v-if="item.hover" @click="del(index)"></i>
          </div>
        </div>
      </div>
    </div>
    <hr class="hr" />
    <div class="foot">
      <div class="footOne">{{completeArr}}items left</div>
      <div class="footTwo">
        <div class="footTA" @click="border" :class="{'border':flag === true}">All</div>
        <div class="footTB" @click="border2" :class="{'border':flag2 === true}">Active</div>
        <div class="footTC" @click="border3" :class="{'border':flag3 === true}">Completed</div>
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
          title: "vue",
          complete: false
        },
        {
          title: "element-ui",
          complete: false
        },
        {
          title: "axios",
          complete: true
        },
        {
          title: "webpack",
          complete: true
        }
      ],
      flag: false,
      flag2: false,
      flag3: false
    };
  },
  methods: {
    enter(item) {
      item.hover = true;
    },
    leave(item) {
      item.hover = false;
    },
    // del(item,index){
    //   this.$emit('del',index)
    // },
    del(index) {
      this.todos.splice(index, 1);
    },
    border() {
      this.flag = true;
      this.flag2 = false;
      this.flag3 = false;
    },
    border2() {
      this.todos = this.todos.filter(item => {
       return item.complete = true
      })
      this.flag2 = true;
      this.flag = false;
      this.flag3 = false;
    },
    border3() {
      this.flag3 = true;
      this.flag2 = false;
      this.flag = false;
    }
  },
  mounted() {
    this.todos.map(item => {
      //给对象添加原本没有的属性，用this.$set(),
      //第一个为对象，第二个为键（引号引起来），第三个为值
      this.$set(item, "hover", false);
    });
  },
  watch: {},
  computed: {
    completeArr() {
      let arr = [];
      arr = this.todos.filter(item => {
        return item.complete === true;
      });
      return this.todos.length - arr.length;
    }
  }
};
</script>

<style scoped lang='scss'>
.todolist {
  display: flex;
  line-height: 50px;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
}
.title {
  height: 100%;
  font-size: 13px;
}
.word {
  font-size: 12px;
  margin-left: 20px;
  margin-right: 40px;
  width: 60%;
  text-align: left;
}
.box {
  width: 100%;
  height: 290px;
}
.box1 {
  height: 30px;
  display: flex;
}
.mouse {
  display: flex;
  margin-top: 25px;
  width: 100%;
  margin-left: 20px;
  align-items: center;
}
.foot {
  display: flex;
  width: 90%;
  font-size: 12px;
  line-height: 30px;
  margin-left: 5%;
}
.footOne {
  width: 30%;
}
.footTwo {
  width: 70%;
  display: flex;
  justify-content: flex-end;
}
.footTA {
  width: 18%;
  text-align: center;
}
.footTB {
  width: 28%;
  text-align: center;
}
.footTC {
  width: 40%;
  text-align: center;
}
.border {
  border: 1px solid rgb(212, 211, 211);
}
.el-icon-close {
  color: red;
}
.hr {
  background-color: rgb(185, 184, 184);
  height: 1px;
  width: 100%;
  border: none;
}
</style>