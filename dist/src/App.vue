<template>
  <div id="app">
    <transition :name="transitionName">
        <keep-alive>
            <router-view class="transitionBody"></router-view>
        </keep-alive>
    </transition>
  </div>
</template>
<script>
    export default {
        data() {
            return {
                transitionName: 'transitionLeft'
            };
        },
        watch: { 
            '$route' (to, from) { 
                const arr = ['/type'];
                const compare = arr.indexOf(to.path)>arr.indexOf(from.path);
                this.transitionName = compare ? 'transitionRight' : 'transitionLeft';
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
        transition: all 0.15s ease; /*定义动画的时间和过渡效果*/
    }
    
    .transitionLeft-enter{
        transform: translate(100%, 0); 
        /*当左滑进入右滑进入过渡动画*/
    }
    .transitionLeft-leave-active {
        transform: translate(-100%, 0); 
    }
    

    .transitionRight-enter {
        transform: translate(0, 100%);
    }
    .transitionRight-leave-active {
        transform: translate(0, -100%); 
        /*当左滑进入右滑进入过渡动画*/
    }
</style>
