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
        <div>原创文章</div>
        <div></div>
      </div>
      <div class="releaseC">
        <div>新留言</div>
        <div></div>
      </div>
      <div class="releaseD">
        <div>新消息</div>
        <div></div>
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
  width: 70%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.wordA {
  width: 100%;
  height: 50%;
}
.ico {
  width: 30%;
  line-height: 50px;
}
</style>