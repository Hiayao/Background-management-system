<template>
<!-- 标签页 -->
 <div>
<el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="未读消息" name="first">未读消息</el-tab-pane>
    <el-tab-pane label="已读消息" name="second">已读消息</el-tab-pane>
    <el-tab-pane label="回收站" name="third">回收站</el-tab-pane>
    
  </el-tabs>
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
activeName: 'first'
     }
   },
   methods: {
handleClick(tab, event) {
        console.log(tab, event);
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

</style>