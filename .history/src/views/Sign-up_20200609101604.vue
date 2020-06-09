<template>
  <div class="All el-cardAll">
    <div>
      <img src="../assets/故宫1.jpg" alt class="img" />
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
          <el-form-item label="新用户" prop="name">
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
            <el-form-item label="新密码" prop="pass">
              <i class="el-icon-lock"></i>
              <el-input type="password" v-model="ruleForm.pass" autocomplete="off" show-password></el-input>
            </el-form-item>
          </el-form>

          <el-form-item>
            <el-button type="primary" @click="signUp">立即注册</el-button>
            <el-button @click="goToIn">立即登录</el-button>
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
        pass: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 2, max: 10, message: "长度在 2 到 10 个字符", trigger: "blur" }
        ],
        pass: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 15, message: "长度在 6 到 15 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    signUp() {
      if (this.ruleForm.pass === "") {
                this.$message({
                  message: "密码不能为空",
                  type: "warning"
                });
                return;
              }
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          axios
            .post("api/user/register", {
              username: this.ruleForm.name,
              password: this.ruleForm.pass
            })
            .then(res => {
              
              if (res.data.code === 200) {
              } 
              else {
                this.$message.error(res.data.message);
                this.ruleForm.name = "";
                this.ruleForm.pass = "";
              }
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          this.$message.error("表单验证有误，请检查");
          return;
        }
      });
    },
    goToIn() {
      this.$router.push("/sign-in");
    }
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
</style>