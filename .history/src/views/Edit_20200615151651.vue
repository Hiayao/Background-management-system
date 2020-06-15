<template>
  <!-- 编辑文章页 -->
  <div class="writing_">
    <div class="btn">
      <el-button size="mini" type="danger" @click="goBack">返回</el-button>
      <el-button size="mini" type="primary">发布</el-button>
    </div>

    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="文章标题" prop="title">
        <el-input v-model="ruleForm.title"></el-input>
      </el-form-item>
    </el-form>
    <!-- 文章摘要 -->
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="文章摘要" prop="abstract">
        <el-input v-model="ruleForm.abstract"></el-input>
      </el-form-item>
    </el-form>

    <div class="option">
      <!-- 作者 -->
      <div>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="作者" prop="author">
            <el-input v-model="ruleForm.author"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <!-- 类目 -->
      <div>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="类目" prop="category">
            <el-select v-model="ruleForm.category" placeholder="请选择">
              <el-option label="Vue" value="Vue"></el-option>
              <el-option label="React" value="React"></el-option>
              <el-option label="Node.js" value="Node.js"></el-option>
              <el-option label="性能优化" value="性能优化"></el-option>
              <el-option label="JavaScript" value="JavaScript"></el-option>
              <el-option label="小程序" value="小程序"></el-option>
              <el-option label="工具类" value="工具类"></el-option>
              <el-option label="其他" value="其他"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <!-- 来源 -->
      <div>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="来源" prop="source">
            <el-select v-model="ruleForm.source" placeholder="请选择">
              <el-option label="原创" value="原创"></el-option>
              <el-option label="转载" value="转载"></el-option>
              <el-option label="与他人合作" value="与他人合作"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <!-- 重要性星数 -->
      <div>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="重要性" prop="star">
            <el-select v-model="ruleForm.star" placeholder="请选择">
              <el-option label="1" value="1"></el-option>
              <el-option label="2" value="2"></el-option>
              <el-option label="3" value="3"></el-option>
              <el-option label="4" value="4"></el-option>
              <el-option label="5" value="5"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <!-- 发布时间 -->
      <div class="time">
        <span class="demonstration">发布时间</span>
        <el-date-picker v-model="date" type="datetime" placeholder="选择日期时间" size="mini"></el-date-picker>
      </div>
    </div>
    <!-- 编辑器 -->
    <mavon-editor v-model="text" />
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
      date: "",

      rules: {
        title: [
          { required: true, message: "请输入文章标题", trigger: "blur" },
          { min: 0, max: 35, message: "长度在 0 到 35 个字符", trigger: "blur" }
        ],
        abstract: [
          { required: true, message: "请输入文章摘要", trigger: "blur" },
          { min: 0, max: 35, message: "长度在 0 到 35 个字符", trigger: "blur" }
        ],
        author: [
          { required: true, message: "请输入作者", trigger: "blur" },
          { min: 1, max: 8, message: "长度在 1 到 8 个字符", trigger: "blur" }
        ],
        source: [{ required: true, message: "请选择类目", trigger: "change" }],
        category: [
          { required: true, message: "请选择来源", trigger: "change" }
        ],
        star: [{ required: true, message: "请选择星数", trigger: "change" }]
      }
    };
  },
  methods: {
    getData() {
      axios.post("/api/article/update", {
        id: 文章的id,
        title: 文章标题,
        abstract: 文章摘要,
        author: 作者,
        category: 类目,
        source: 来源,
        star: 重要性,
        text: 文章内容,
        date: 发布时间
      });
    },
    goBack(){
        this.$router.go(-1)
    }
  },
  mounted() {
      this.id = this.$route.query.id
    axios
      .post("/api/article/article", { _id: this.id })
      .then(res => {
          this.ruleForm = res.data.data
          this.text = res.data.data.text
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
.btn {
  display: flex;
  justify-content: space-around;
}
.option {
  display: flex;
  justify-content: space-around;
  font-size: 12px;
  margin-bottom: 10px;
}
.time {
  display: flex;
  font-size: 13px;
  align-items: center;
  height: 40px;
  // width: 100px;
}
.demonstration {
  width: 80px;
  // margin-left: 20px;
  padding-left: 20px;
}
.publish {
  margin-top: 5px;
  margin-left: 47%;
}
</style>