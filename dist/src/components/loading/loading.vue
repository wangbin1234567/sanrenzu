<template>
    <div v-if="show" class="loading-container">
        <div class="loading-mask"></div>
        <div class="loading-content">
            <div class="loading-animate"></div>
            <div class="loading-text">{{text}}</div>
        </div>
    </div>

</template>
<script>
export default {

    props:{
        show:Boolean
    },
    data(){
        return {
            text:"正在加载..."
        }
    }
}
</script>
<style scoped lang="scss">
  .loading-container{
      position: relative;
      text-align: center;
      .loading-mask{
          position: fixed;
          top:0;
          bottom:0;
          left:0;
          right:0;
          background-color: rgba(0,0,0,.7);
      }
      .loading-content{
          position: fixed;
          left:50%;
          top:45%;
          z-index: 300;
          transform: translate(-50% -45%);
          text-align: center;
          color:#fff;
          .loading-animate{
                 display: inline-block;
                 width:35px;
                 height:35px;
                 margin:25px 0 10px;
                 vertical-align: middle;
                 animation: cricleLoading 1s steps(12,end) infinite;
                 background:transparent url("http://img4.imgtn.bdimg.com/it/u=1002181094,410054841&fm=214&gp=0.jpg");
                 background-size: 100%;
          }
          .loading-text{
              font-size:14px;
              color:#fff;
          }
      }
  }

  @keyframes cricleLoading{
      0%{
          transform: rotate3d(0,0,1,0deg);
      }
      100%{
          transform: rotate3d(0,0,1,360deg);
      }
  }
</style>