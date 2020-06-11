<template>
<!-- 发表文章页 -->
 <div>
   <div class="dav">
<el-button type="danger" size='mini'>查看</el-button>
<el-button type="primary" size='mini'>发布</el-button>
   </div>
   <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="活动名称" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  </el-form>

 </div>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {

     }
   },
   methods: {

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
.dav {
  width: 100%;
  line-height: 40px;
  background: rgb(89,165,134);
  text-align: right;
  padding-right: 20px;
}
</style>