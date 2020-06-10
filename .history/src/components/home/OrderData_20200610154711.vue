<template>
  <div class="cardAll">
    <el-card class="order"></el-card>
    <el-card class="todolist"></el-card>
    <el-card class="todolist"></el-card>
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
    axios.get('/api/orderData').then(res => {
        console.log(res.data)
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
.todolist {
  width: 280px;
  height: 400px;
  margin-left: 10px;
}
.order {
    width: 580px;
  height: 400px;
}
.cardAll {
    display: flex;
    margin: 20px 0 0 20px;
}
</style>