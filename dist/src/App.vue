<template>
  <div id="app">
      <transition :name="aaa">
          <router-view/>
      </transition>
  </div>
</template>
<script>
export default {
  data(){
        return{
            aaa:''
        }
    },
    watch:{
        '$route'(to){
            if(to.path=="/img"){
                this.aaa='series_img'
            }
        }
    },
}
</script>
<style lang="scss">
.series_img-enter,
.series_img-leave-to {
  /* transform: scale(0); */
  transform: translateX(100%);
}
.series_img-enter-active {
  transition: all .4s ease;
}
// .series_img-leave-active {
//   transition: all 0.8s ease;
// }
*{
  margin:0;
  padding:0;
  text-decoration: none;
  list-style: none;
  box-sizing:border-box;
}
html,body,#app{
  width: 100%;
  height: 100%;
}
</style>
