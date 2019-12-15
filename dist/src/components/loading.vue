<template>
  <div v-if="show" class="loading">
    <div>
      <img src="../assets/loading.gif" />
      <p>{{ text }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Loading',
  props: {
    show: Boolean
  },
  data() {
    return {
    	text: '加载中...'
    }
  }
}
</script>
<style lang="scss" scoped>
.loading{
  width: 100%;
  height: 100%;
   position: fixed;
   z-index: 100;
   top: 0;
   text-align: center;
   div{
     width: 110px;
     height: 110px;
     background: #000;
     position: relative;
     top: 42%;
     left: 130px;
        //  transform: translate3d(0,-50%,0);
         border-radius: 8px;
      img{
     width: 50px;
     height: 50px;
     margin: 17.5px 0 0;
   }
   p{
     width: 110px;
     height: 20px;
     color: #c0c0c0;
     font-size: 15px;
     margin: 15px 0 0;
   }
   }
}

</style>