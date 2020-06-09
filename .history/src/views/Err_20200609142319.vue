<template>
  <div>
    <div class="img">
      <img src="../assets/timg.gif" alt />
    </div>
    <div class="word">
      <div class="word1">这位勇敢的少年，你误入歧途</div>
      <div class="word1">请点击下方按钮回归正道吧！</div>
    </div>
    <el-button type="success" round class="btn" @click="btn">正道的光</el-button>
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
  methods: {
      btn(){
          this.$router.push('/')
      }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.img {
  margin-left: 200px;
  margin-top: 200px;
}
.word1 {
    width: 700px;
    font-size: 28px;
    font-weight: 700;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.word {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: -250px;
}
.btn {
    background: #00D78A;
    margin-left: 650px;
    margin-top: 30px;
}
</style>