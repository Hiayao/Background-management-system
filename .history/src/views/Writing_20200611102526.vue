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
      <el-form-item label="文章标题" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
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
      <el-form-item label="文章摘要" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
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
        <el-form-item label="作者" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item></el-form>
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
        <el-form-item label="类目" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
            <el-option label="类目一" value="shanghai"></el-option>
            <el-option label="类目二" value="beijing"></el-option>
          </el-select>
        </el-form-item></el-form></div>
        <!-- 来源 -->
        <div>
          <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="来源" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
            <el-option label="类目一" value="shanghai"></el-option>
            <el-option label="类目二" value="beijing"></el-option>
          </el-select>
        </el-form-item></el-form></div>
        <!-- 重要性星数 -->
        <div>
          <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="重要性" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
            <el-option label="类目一" value="shanghai"></el-option>
            <el-option label="类目二" value="beijing"></el-option>
          </el-select>
        </el-form-item></el-form></div>
        <!-- 发布时间 -->
        <div class="time">
        <span class="demonstration">发布时间</span>
    <el-date-picker
      v-model="value1"
      type="datetime"
      placeholder="选择日期时间">
    </el-date-picker></div>

      
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
      ruleForm: {
        name: "",
        region: '',
        
      },
      value1: '',
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ]
      }
    };
  },
  methods: {},
  mounted() {},
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
}
</style>