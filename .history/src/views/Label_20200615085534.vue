<template>
  <!-- 标签页 -->
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane :label="Unread" name="first">未读消息</el-tab-pane>
      <el-tab-pane :label="Read" name="second">已读消息</el-tab-pane>
      <el-tab-pane :label="recovery" name="third">回收站</el-tab-pane>
    </el-tabs>
    <el-card class="box-card">
      <div v-for = "(item,index) in arr" :key="index" class="notice">
        <div class="con">{{item.con}}</div>
        <div class="time">{{item.time}}</div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      activeName: "first",
      arr: [
        {
          con: "【系统通知】该系统将于今晚凌晨2点到5点进行升级维护",
          time:"2018-04-19 20:00:00"
        },
        {
          con: "今晚12点整发大红包，先到先得",
          time:"2018-04-19 21:00:00"
        }
      ],
      arr1:[{
        con:"【系统通知】该系统将于今晚凌晨2点到5点进行升级维护",
        time:"2018-04-19 20:00:00"
      }],
      arr2:[{
        con:"【系统通知】您的优惠券已过期",
        time:"2018-04-19 20:00:00"
      }]
    };
  },
  methods: {  
    handleClick(tab, event) {
      this.activeName = tab.name;
      console.log(tab, event);
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.notice {
  width: 700px;
  height: 100px;
}
.con{
  height: 100px;
  width: 500px;
}
</style>