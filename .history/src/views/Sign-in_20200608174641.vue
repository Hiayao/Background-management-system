<template>
  <div class="All">
    <div class="img">
      <img src="../assets/lufei.gif" alt class="img" />
    </div>
    <div class="card">
      denglu
        
          
        
        
      
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
.img {
  position:absolute;z-index:-1;width:100%;height:100%;top:0px;left:0px;
}
.card {
    width: 480px;
    width: 480px;
    height: 300px;
    background: white;
    position: absolute;
  }
  .All {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>