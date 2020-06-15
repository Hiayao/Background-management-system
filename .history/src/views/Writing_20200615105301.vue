<template>
  <!-- 发表文章页 -->
  <div class="writing_">
    <!-- 查看发布栏 -->
    <div class="dav">
      <el-button type="danger" size="mini">查看</el-button>
      <el-button type="primary" size="mini">发布</el-button>
    </div>
    <!-- 文章基础信息栏 -->
    <!-- 文章标题 -->
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
    <mavon-editor v-model="value" />
    <!-- 发布按钮 -->
    <el-button type="primary" class="publish" size="mini">发布</el-button>
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
        abstract:"",
        author:"",
        star: "",
        category:"",
        source:""
      },
      
      date: "",
      value: "",
      rules: {
        title: [
          { required: true, message: "请输入文章标题", trigger: "blur" },
          { min: 0, max: 35, message: "长度在 0 到 35 个字符", trigger: "blur" }
        ],
        abstract:[
          { required: true, message: "请输入文章摘要", trigger: "blur" },
          { min: 0, max: 35, message: "长度在 0 到 35 个字符", trigger: "blur" }
        ],
        author:[
          { required: true, message: "请输入作者", trigger: "blur" },
          { min: 1, max: 8, message: "长度在 1 到 8 个字符", trigger: "blur" }
        ],
        source: [
          { required: true, message: "请选择类目", trigger: "change" }
        ],
        category:[
          { required: true, message: "请选择来源", trigger: "change" }
        ],
        star:[
          { required: true, message: "请选择星数", trigger: "change" }
        ],
        
      }
    };
  },
  methods: {
    getWrit() {
      axios.post("/api/article/create", {
        title: this.ruleForm.title,
        abstract: this.ruleForm.abstract,
        author: this.ruleForm.author,
        category: this.ruleForm.category,
        source: this.ruleForm.source,
        star: this.ruleForm.star,
        text: this.text,
        date: this.date
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      });
    }
  },
  mounted() {
    this.getWrit()
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.dav {
  width: 100%;
  line-height: 40px;
  background: rgb(89, 165, 134);
  text-align: right;
  padding-right: 20px;
  margin-bottom: 20px;
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