<template>
  <!-- 查看文章页 -->
  <div>
    <el-button type="primary" size="mini" @click="goBack">返回</el-button>
    <div class="title">{{ruleForm.title}}</div>
    <div class="abstract">摘要：{{ruleForm.abstract}}</div>
    <div><el-card class="box-card">{{text}}</el-card></div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      ruleForm: {
        title: "",
        abstract: "",
        author: "",
        star: "",
        category: "",
        source: ""
      },
      text: "",
      date: ""
    };
  },
  methods: {
      goBack(){
        this.$router.go(-1)
    }
  },
  mounted() {
    this.id = this.$route.query.id;
    axios
      .post("/api/article/article", { _id: this.id })
      .then(res => {
        this.ruleForm = res.data.data;
        this.text = res.data.data.text;
        this.date = res.data.data.date;
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.title {
    width: 100%;
    height: 30px;
    text-align: center;
    font-size: 30px;
    font-weight: 700;
}
.abstract{ 
    width: 100%;
    height: 30px;
    text-align: center;
    margin-top: 16px;
}
.box-card {
    width: 100%;
  }
</style>