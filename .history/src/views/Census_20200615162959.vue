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
  background: rgb(124,202,191);
}
.releaseB {
  width: 25%;
  height: 50px;
  background:rgb(232,138,135);
}
.releaseC {
  width: 25%;
  height: 50px;
  background: rgb(131,117,163);
}
.releaseD {
  width: 25%;
  height: 50px;
  background: rgb(159,206,193);
}
.release {
  width: 100%;
  height: 50px;
  display: flex;
}
</style>