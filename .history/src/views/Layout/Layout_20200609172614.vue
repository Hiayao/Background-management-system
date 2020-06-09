<template>
  <!-- 公共部分 -->

  <!-- 头部 -->
  <div class="asideAll">
    <el-container>
      <el-header style="height: 40px;">
        <div class="wordOne">欢迎{{this.user}}来到军师后台管理系统</div>
        <div class="wordTwo">XX好，亲爱的{{this.user}} 上次登录时间：{{time}}</div>
      </el-header>

<!-- 导航栏 -->
      <el-container>
        <el-aside width="150px">
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-menu-item index="1">
              <i class="el-icon-location"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">已发布</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-pie-chart"></i>
              <span slot="title">统计</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-edit-outline"></i>
              <span slot="title">发表文章</span>
            </el-menu-item>
            <el-menu-item index="5">
              <i class="el-icon-document"></i>
              <span slot="title">标签页</span>
            </el-menu-item>
            <el-menu-item index="6">
              <i class="el-icon-takeaway-box"></i>
              <span slot="title">导出Excel</span>
            </el-menu-item>
            <el-menu-item index="7">
              <i class="el-icon-money"></i>
              <span slot="title">图片上传</span>
            </el-menu-item>
            <el-menu-item index="8">
              <i class="el-icon-switch-button"></i>
              <span slot="title" @click="signOut">退出系统</span>
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
      user: "",
      time:""
    };
  },
  methods: {
    signOut(){
      this.$router.push('/sign-out')
    }
  },
  mounted() {
    this.time = dayjs(JSON.stringify(this.ruleForm.name).data).format('YYYY年MM月DD日hh时mm分ss秒')
    this.user = localStorage.getItem("user");
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