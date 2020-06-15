<template>
  <!-- 标签页 -->
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane :label="Unread" name="first">
        <el-card class="box-card">
          <div v-for="(item,index) in arr" :key="index" class="notice">
            <div class="con">{{item.con}}</div>
            <div class="time">{{item.time}}</div>
            <div class="peg">
              <el-button @click="pegRead(index)">标为已读</el-button>
            </div>
          </div>
        </el-card>
      </el-tab-pane>
      <el-tab-pane :label="Read" name="second">
        <el-card class="box-card">
          <div v-for="(item,index) in arr1" :key="index" class="notice">
            <div class="con">{{item.con}}</div>
            <div class="time">{{item.time}}</div>
            <div class="peg">
              <el-button @click="del(index)">删除</el-button>
            </div>
          </div>
        </el-card>
      </el-tab-pane>
      <el-tab-pane :label="recovery" name="third">
        <el-card class="box-card">
          <div v-for="(item,index) in arr2" :key="index" class="notice">
            <div class="con">{{item.con}}</div>
            <div class="time">{{item.time}}</div>
            <div class="peg">
              <el-button @click="renew(index)">还原</el-button>
            </div>
          </div>
        </el-card>
      </el-tab-pane>
    </el-tabs>
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
          time: "2018-04-19 20:00:00"
        },
        {
          con: "今晚12点整发大红包，先到先得",
          time: "2018-04-19 21:00:00"
        }
      ],
      arr1: [
        {
          con: "【系统通知】该系统将于今晚凌晨2点到5点进行升级维护",
          time: "2018-04-19 20:00:00"
        }
      ],
      arr2: [
        {
          con: "【系统通知】您的优惠券已过期",
          time: "2018-04-19 20:00:00"
        }
      ]
    };
  },
  methods: {
    handleClick(tab, event) {
      // this.activeName = name;
      console.log(tab, event);
    },
    pegRead(item, index) {
      this.arr.splice(index, 1), 
      this.arr1=this.arr1.push(item);
    },
    del(item, index) {
      this.arr1.splice(index, 1), this.arr2.push(item);
    },
    renew(item, index) {
      this.arr2.splice(index, 1), this.arr1.push(item);
    }
  },
  mounted() {},
  watch: {},
  computed: {
    Unread() {
      return "未读消息" + "(" + this.arr.length + ")";
    },
    Read() {
      return "已读消息" + "(" + this.arr1.length + ")";
    },
    recovery() {
      return "回收站" + "(" + this.arr2.length + ")";
    }
  }
};
</script>

<style scoped lang='scss'>
.notice {
  width: 100%;
  height: 50px;
  display: flex;
  // justify-content: space-between;
}

.con {
  line-height: 50px;
  width: 60%;
}
.time {
  line-height: 50px;
  width: 30%;
}
.peg {
  width: 10%;
  height: 50px;
}
</style>