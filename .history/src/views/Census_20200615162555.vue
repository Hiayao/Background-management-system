<template>
<!-- 统计页 -->
 <div>
   <div class="release">
<div class="releaseA"></div>
<div class="releaseB"></div>
<div class="releaseC"></div>
<div class="releaseD"></div>
 </div></div>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {

     }
   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.releaseA {
  width: 25%;
  height: 50px;
  background: skyblue;
}
.releaseB {
  width: 25%;
  height: 50px;
  background: skyblue;
}
.releaseC {
  width: 25%;
  height: 50px;
  background: skyblue;
}
.releaseD {
  width: 25%;
  height: 50px;
  background: skyblue;
}
.release {
  width: 100%;
  height: 50px;
  display: flex;
}
</style>