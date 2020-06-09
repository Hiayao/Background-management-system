<template>
  <div class="All el-cardAll">
    <div>
      <img src="../assets/故宫.jpg" alt class="img" />
    </div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="title">欢迎来到军师后台管理系统</span>
      </div>
      <div>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="用户名" prop="name">
            <i class="el-icon-user"></i>
            <el-input v-model="ruleForm.name" maxlength="10" show-word-limit></el-input>
          </el-form-item>

          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="密码" prop="pass">
              <i class="el-icon-lock"></i>
              <el-input type="password" v-model="ruleForm.pass" autocomplete="off" show-password></el-input>
            </el-form-item>
          </el-form>

          <el-form-item label="验证码" prop="code">
            <i class="el-icon-document"></i>
            <el-input v-model="ruleForm.code" :maxlength="4" style="width: 40%"></el-input>
            <div v-html="code" class="code" @click="getCode"></div>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="goToHome">立即登录</el-button>
            <el-button @click="goToUp">注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };

    return {
      ruleForm: {
        name: "",
        pass: "",
        code: ""
      },
      code: "",
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 2, max: 10, message: "长度在 2 到 10 个字符", trigger: "blur" }
        ],
        pass: [
          { required: true, validator: validatePass, trigger: "blur" },
          { min: 6, max: 15, message: "长度在 6 到 15 个字符", trigger: "blur" }
        ],
        code: [{ required: true, message: "验证码不能为空", trigger: "blur" }]
      }
    };
  },
  methods: {
    // 去注册页面
    goToUp() {
      this.$router.push("/sign-up");
    },

    // 获取验证码的请求
    getCode() {
      axios
        .get("/api/captcha")
        .then(res => {
          this.code = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },

    // 验证成功后去首页
    goToHome() {
       if (this.ruleForm.pass === "" || this.ruleForm.name === "" || this.ruleForm.code ==="") {
        this.$message({
          message: "必填项输入不能为空",
          type: "warning"
        });
        return;
      }
      axios
        .post("api/user/login", {
          username: this.ruleForm.name,
          password: this.ruleForm.pass,
          code: this.ruleForm.code
        })
        .then(res => {
          if (res.data.code === 200) {
            this.$message({
              showClose: true,
              message: "登录成功",
              type: "success"
            });
            this.$router.push("/");
          } else {
            this.$message({
          showClose: true,
          message: '用户名或密码错误',
          type: 'error'
        });
          }
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
      // this.$router.push("/");
    }
  },
  mounted() {
    this.getCode();
  },
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
  background: rgba(3, 2, 2, 0.3);
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
.el-icon-lock {
  position: absolute;
  left: 10px;
  top: 14px;
  color: #fff;
}
.el-icon-user {
  position: absolute;
  left: 10px;
  top: 14px;
  color: #fff;
}
.el-icon-document {
  position: absolute;
  left: 10px;
  top: 14px;
  color: #fff;
}
.code {
  position: absolute;
  left: 50%;
  top: 0;
  height: 40px;
}
</style>