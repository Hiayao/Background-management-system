<template>
<!-- 统计页 -->
 <div>
   <div class="releaseAll">
<div class="release"></div>
<div class="release"></div>
<div class="release"></div>
<div class="release"></div>
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
.release {
  width: 25%;
  height: 50px;
  background: skyblue;
}
.releaseAll {
  width: 100%;
  height: 50px;
  display: flex;
}
</style>