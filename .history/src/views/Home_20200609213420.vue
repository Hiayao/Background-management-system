<template>
  <!-- 首页 -->
  <div>
    <div class="cardAll">
      <div>
        <el-card class="box-card"></el-card>
      </div>
      <div>
        <el-card class="box-card"></el-card>
      </div>
      <div>
        <el-card class="box-card"></el-card>
      </div>
      <div>
        <el-card class="box-card"></el-card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {
    getData(){
      axios.get('/api/homeData').then(res => {
        console.log(res.data)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted() {
    getData()
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box-card {
  width: 250px;
  height: 100px;
}
.cardAll{
display: flex;
justify-content: space-between;
}
</style>
