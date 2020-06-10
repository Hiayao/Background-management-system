<template>
<!-- 上传图片页 -->
 <div>
   <el-card class="box-card">
   <div>支持拖拽</div>
<el-upload
  class="upload-demo"
  drag
  action="https://jsonplaceholder.typicode.com/posts/"
  multiple>
  <i class="el-icon-upload"></i>
  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
</el-card>
支持剪切
<button class="btn" @click="toggleShow">设置头像</button>
     <my-upload  
     @crop-success="cropSuccess" 
     @crop-upload-success="cropUploadSuccess"
      @crop-upload-fail="cropUploadFail"
      v-model="show" 
      :width="200" 
     :height="200" 
     img-format="png" 
     :size="size"
     langType='zh'
     :noRotate='false'
     field="Avatar1"
     url="https://httpbin.org/post"></my-upload>
     <img :src="imgDataUrl">
 </div>
</template>

<script>
// import 'babel-polyfill'; // es6 shim
  import myUpload from 'vue-image-crop-upload';
 export default {
   name: '',
   props: {
   },
   components: {
 "my-upload": myUpload
   },
   data () {
     return {
imgDataUrl: "",
        show: false,
        size:2.1
     }
   },
   methods: {
toggleShow() {
            this.show = !this.show;
        },
        cropSuccess(imgDataUrl, field) {
            console.log('-------- crop success --------',imgDataUrl, field);
        },
        //上传成功回调
        cropUploadSuccess(jsonData, field){
            console.log('-------- upload success --------');
            this.imgDataUrl = jsonData.files.Avatar1;
            console.log(jsonData);
            console.log('field: ' + field);
        },
        //上传失败回调
        cropUploadFail(status, field){
            console.log('-------- upload fail --------');
            console.log('上传失败状态'+ status);
            console.log('field: ' + field);
        }
   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.backgound {
  background: white;
  width: 100%;
}
</style>