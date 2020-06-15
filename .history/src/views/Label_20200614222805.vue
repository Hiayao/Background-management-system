<template>
<!-- 标签页 -->
 <div>
<el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane  name="first">未读消息</el-tab-pane>
    <el-tab-pane label="已读消息" name="second">已读消息</el-tab-pane>
    <el-tab-pane label="回收站" name="third">回收站</el-tab-pane>
    
  </el-tabs>
  <el-card class="box-card">
    <el-tab-pane v-for = "(item,index) in arr" :key="index">
      <div v-if="activeName === 'first'">{{item.con}}</div></el-tab-pane>
  </el-card>
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
activeName: 'first',
arr: [
          {
           
            con: "【系统通知】该系统将于今晚凌晨2点到5点进行升级维护",
            name: "first"
          }, {
            
            con: "今晚12点整发大红包，先到先得",
            name: "second"
          },
          {
           
            con: "内容3",
            name: "third"
          }
        ],
     }
   },
   methods: {
handleClick(tab, event) {
  this.activeName = tab.name
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