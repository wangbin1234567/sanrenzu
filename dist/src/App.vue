<template>
  <div id="app">
<<<<<<< HEAD
      <transition :name="aaa">
          <router-view/>
      </transition>
    
=======
    <transition :name="transitionName">
        <keep-alive>
            <router-view class="transitionBody" :key="key"/>
        </keep-alive>
    </transition>
>>>>>>> 1092eb8a5613ffcd7c666b7acfc365384bbe68b3
  </div>
</template>
<script>
export default {
<<<<<<< HEAD
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
=======
    computed: {
        key(){
        return this.$route.name?this.$route.name+ +new Date():this.$route+ +new Date()
        }
    },
    data() {
        return {
        transitionName: "transitionLeft"
        }
    },
    watch: { 
        '$route' (to, from) { 
            const arr = ['/type','/color'];
            const compare = arr.indexOf(to.path)>arr.indexOf(from.path);
            this.transitionName = compare ? 'transitionLeft' : 'transitionRight';
        } 
    }  
}
</script>
<style lang="scss">
    *{
        margin:0;
        padding:0;
        text-decoration: none;
        list-style: none;
        box-sizing:border-box;
    }
    html,body,#app{
        width:100%;
        height:100%;
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
    }
    html,body,#app{
        width: 100%;
        height: 100%;
    }
    .transitionBody{
        transition: all .3s ease; /*定义动画的时间和过渡效果*/
    }
    
    .transitionRight-leave-active {
        transform: translate(-100%, 0); 
        /*当左滑进入右滑进入过渡动画*/
    }
    .transitionRight-enter {
        transform: translate(100%, 0); 
    }
    .transitionLeft-enter {
        transform: translate(0, 100%); 
    }

    .transitionLeft-leave-active {
        transform: translate(0, -100%); 
    }
>>>>>>> 1092eb8a5613ffcd7c666b7acfc365384bbe68b3
</style>
