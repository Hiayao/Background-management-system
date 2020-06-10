<template>
  <!-- 首页 -->
  <div>
    <div class="cardAll">
      <div >
        <el-card class="box-card">
          <div>
            <img src="../assets/人数.svg" alt="">
          </div>
          <div>
            <div>
            New Visits
            </div>
            <div>
              {{item.data.visits}}
            </div>
          </div>
        </el-card>
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
    return {
      list:[]
    };
  },
  methods: {
    getData(){
      axios.get('/api/homeData').then(res => {
        this.list = res.data
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted() {
    this.getData()
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
