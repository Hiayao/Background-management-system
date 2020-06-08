<template>
  <div class="asideAll">
    <el-container>
      <el-header style="height: 40px;">
				<div class="word">欢迎XXX来到军师后台管理系统</div>
				<div class="word">XX好，亲爱的XXX 上次登录时间：xxxx</div>
				</el-header>
      <el-container>

        <el-aside width="150px">
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
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
              <span slot="title">退出系统</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
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
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  mounted() {},
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
.word {
	width: 50%;
}
</style>