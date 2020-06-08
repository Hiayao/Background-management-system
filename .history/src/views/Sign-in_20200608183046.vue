<template>
  <div class="All el-cardAll">
    <div>
      <img src="../assets/相逢.jpg" alt class="img" />
    </div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="title">欢迎来到军师后台管理系统</span>
      </div>
      <div><el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="用户名" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
 
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form></div>
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
        ruleForm: {
          name: '',
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
        }
      };
  },
  methods: {
    
    },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.img {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
}
.box-card {
  margin-top: 10%;
  width: 480px;
  background: rgba(255, 255, 255, 0.3);
  border: 0;
}
.All {
  display: flex;
  justify-content: center;
  align-items: center;
}
.title {
  font-size: 20px;
  font-weight: 700;
  color: #fff;
}
.clearfix {
  text-align: center;
}
.el-form-item__label{
  color: #fff;
}
</style>