<template>
  <!-- 公共部分 -->

  <!-- 头部 -->
  <div class="asideAll">
    <el-container>
      <el-header style="height: 40px;">
        <div class="wordOne">欢迎{{obj.username}}来到军师后台管理系统</div>
        <div class="wordTwo">{{hi}}，亲爱的{{obj.username}} 上次登录时间：{{time}}</div>
      </el-header>

<!-- 导航栏 -->
<!-- 设置刷新后当前项高亮，将default-active后的值改为$route.path，前面加一个： -->
<!-- 然后在最后添加route --> 
<!-- 最后要讲每一项的index后的数字改为路径 -->
      <el-container>
        <el-aside width="150px">
          <el-menu
            :default-active="$route.path" 
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            router
          >
            <el-menu-item index="/">
              <i class="el-icon-location"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item index="/publish">
              <i class="el-icon-menu"></i>
              <span slot="title">已发布</span>
            </el-menu-item>
            <el-menu-item index="/census">
              <i class="el-icon-pie-chart"></i>
              <span slot="title">统计</span>
            </el-menu-item>
            <el-menu-item index="/writing">
              <i class="el-icon-edit-outline"></i>
              <span slot="title">发表文章</span>
            </el-menu-item>
            <el-menu-item index="/label">
              <i class="el-icon-document"></i>
              <span slot="title">标签页</span>
            </el-menu-item>
            <el-menu-item index="/excel">
              <i class="el-icon-takeaway-box"></i>
              <span slot="title">导出Excel</span>
            </el-menu-item>
            <el-menu-item index="/upimg">
              <i class="el-icon-money"></i>
              <span slot="title">图片上传</span>
            </el-menu-item>
            <el-menu-item index="/sign-out">
              <i class="el-icon-switch-button"></i>
              <span slot="title">退出系统</span>
            </el-menu-item>
          </el-menu>
        </el-aside>

        <!-- 详情栏 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      user:"",
      time:"",
      obj:{},
      hi:{}
    };
  },
  methods: {
    
  },
  mounted() {
    this.obj = JSON.parse(localStorage.getItem('user'))
    this.time = dayjs().format('YYYY年MM月DD日HH时mm分ss秒')
    let hi = dayjs().format('HH')
    if(hi > 6 && hi <= 11){
      this.hi = '早上好'
    }
    else if(hi > 11 && hi <= 13){
      this.hi = '中午好'
    }
    else if(hi > 13 && hi <= 18){
      this.hi = '下午好'
    }
    else if(hi > 18 && hi <= 23){
      this.hi = '晚上好'
    }
    else{
      this.hi = '该睡觉咯'
    }
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 40px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.wordOne {
  width: 20%;
  font-size: 12px;
  padding-left: 28px;
  display: flex;
  justify-content: flex-start;
}
.wordTwo {
  width: 30%;
  font-size: 12px;
  padding-right: 28px;
  display: flex;
  justify-content: flex-end;
}
</style>