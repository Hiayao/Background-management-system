<template>
  <div>
    <div class="out">
      <div>期待您的下次光临</div>
      <div class="btn">
        <el-button type="primary" plain @click="signOut">确认退出</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {
    signOut() {
      axios.get("/api/user/logout").then(res => {
        console.log(res);
      });
      localStorage.removeItem("name");
      this.$router.push("/Signin").catch(err => {
        console.log(err);
      });
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.out {
  padding-top: 140px;
  margin-left: 42%;
}
.btn {
  margin-top: 30px;
  margin-left: 16px;
}
</style>