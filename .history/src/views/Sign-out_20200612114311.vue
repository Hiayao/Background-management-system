<template>
 <div>
<div class="out"><div>期待您的下次光临</div>
<div class="btn"><el-button type="primary" plain @click="signOut">确认退出</el-button></div>
</div>
 </div>
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
signOut(){
    localStorage.clear()
    this.$router.push('/sign-in')
}
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
.out {
  padding-top: 140px;
  margin-left: 42%;
}
.btn {
  margin-top: 30px;
  margin-left: 10px;
}
</style>