<template>
  <div class="cardAll">
    <el-card class="order">
        <div class="wordOne">
            <div>Order_No</div>
            <div>Price</div>
        </div>
        <div class="wordTwo">Status</div>
    </el-card>
    <el-card class="todolist"></el-card>
    <el-card class="todolist"></el-card>
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
    getData() {
      axios
        .get("/api/orderData")
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getData();
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
  font-size: 12px;
  display: flex;
}
.cardAll {
  display: flex;
  margin: 20px 0 0 20px;
}
.wordOne {
    width: 348px;
    display: flex;
}
.wordTwo {
    width: 220px;
}
</style>