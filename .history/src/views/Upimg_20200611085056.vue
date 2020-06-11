<template>
  <!-- 上传图片页 -->
  <div>
    <el-card class="box-card">
      <div class="wordOne">支持拖拽</div>

      <el-upload
        class="upload-demo"
        drag
        action="/api/upload"
        :auto-upload='true'
        multiple
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">
          将文件拖到此处，或
          <em>点击上传</em>
        </div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </el-card>

    <div class="wordTwo">支持剪切</div>

    <button class="btn" @click="toggleShow">设置头像</button>
    <my-upload
      @crop-success="cropSuccess"
      @crop-upload-success="cropUploadSuccess"
      @crop-upload-fail="cropUploadFail"
      v-model="show"
      :width="100"
      :height="100"
      img-format="png"
      :size="size"
      langType="zh"
      :noRotate="false"
      field="Avatar1"
      url="https://httpbin.org/post"
    ></my-upload>
    <img :src="imgDataUrl"  class="imgDataUrl"/>
  </div>
</template>

<script>
// import 'babel-polyfill'; // es6 shim
import myUpload from "vue-image-crop-upload";
export default {
  name: "",
  props: {},
  components: {
    "my-upload": myUpload
  },
  data() {
    return {
      imgDataUrl: "",
      show: false,
      size: 2.1
    };
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    },
    cropSuccess(imgDataUrl, field) {
      console.log("-------- crop success --------", imgDataUrl, field);
    },
    //上传成功回调
    cropUploadSuccess(jsonData, field) {
      console.log("-------- upload success --------");
      this.imgDataUrl = jsonData.files.Avatar1;
      console.log(jsonData);
      console.log("field: " + field);
    },
    //上传失败回调
    cropUploadFail(status, field) {
      console.log("-------- upload fail --------");
      console.log("上传失败状态" + status);
      console.log("field: " + field);
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.backgound {
  background: white;
  width: 100%;
}
.wordOne {
  margin-bottom: 40px;
  font-size: 20px;
  font-weight: 700;
  margin-top: 20px;
}
.box-card {
  height: 500px;
}
.el-upload__tip {
  margin-top: 17px !important;
}
.wordTwo {
  font-size: 20px;
  font-weight: 700;
  position: relative;
  top: -150px;
}
.btn {
  position: relative;
  top: -120px;
}
.imgDataUrl {
  position: relative;
  top: -104px;
}
</style>