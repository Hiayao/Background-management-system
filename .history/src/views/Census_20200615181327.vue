<template>
  <!-- 统计页 -->
  <div>
    <div class="release">
      <div class="releaseA">
        <div class="word">
          <div class="wordA">今日发布</div>
          <div class="wordA">2</div>
        </div>
        <div class="ico">
          <i class="el-icon-check"></i>
        </div>
      </div>
      <div class="releaseB">
        <div class="word">
          <div class="wordA">原创文章</div>
          <div class="wordA">3</div>
        </div>
        <div class="ico">
          <i class="el-icon-tickets"></i>
        </div>
      </div>
      <div class="releaseC">
        <div class="word">
          <div class="wordA">新留言</div>
          <div class="wordA"></div>
        </div>
        <div class="ico">
          <i class="el-icon-bell"></i>
        </div>
      </div>
      <div class="releaseD">
        <div class="word">
          <div class="wordA">新消息</div>
          <div class="wordA"></div>
        </div>
        <div class="ico">
          <i class="el-icon-phone-outline"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.releaseA {
  width: 25%;
  height: 50px;
  background: rgb(124, 202, 191);
  display: flex;
  justify-content: space-around;
}
.releaseB {
  width: 25%;
  height: 50px;
  background: rgb(232, 138, 135);
}
.releaseC {
  width: 25%;
  height: 50px;
  background: rgb(131, 117, 163);
}
.releaseD {
  width: 25%;
  height: 50px;
  background: rgb(159, 206, 193);
}
.release {
  width: 100%;
  height: 50px;
  display: flex;
}
.word {
  text-align: center;
  width: 70%;
  line-height: 50px;
  font-size: 12px;
}
.wordA {
  width: 100%;
  line-height: 25px;
  text-align: center;
}

.ico {
  width: 10%;
  line-height: 50px;
}
</style>