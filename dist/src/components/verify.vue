<template>
    <div class="verify-box">
           <div class="mark-success" :style="{height:dahezi}">
                <div class="content">
                    <div class="img" :style="{height:boxh}">
                       <img :src="pic" alt="">
                    </div>
                    <p :style="{height:ps}">{{message}}</p>
                    <p :style="{height:ps}">{{xunjia}}<br>{{dierduan}}</p>
                    <div class="btn">
                        <button @click="close" :style="{color:color}">{{hello}}</button>
                    </div>
                </div>
           </div>
    </div>
</template>
<script>
export default {
     props:["btnList","isUser","message","hello","pic","xunjia","dierduan","dahezi","boxh","ps","color"],
  
    methods:{
       close(){
         this.$emit("btnLists")
       }
    },
}
</script>
<style scoped lang="scss">
  .verify-box{
      width:100%;
      height:100%;
      background:rgba(0,0,0,.5);
      position: absolute;
      top:0;
      left:0;
      z-index: 999;
      .mark-success{
          position: absolute;
          top:50%;
          left:50%;
          margin-top:-85.5px;
          margin-left:-157.5px;
          width:315px;
          height:190px;
           border-radius: 10px;
          background:#fff;
          display: flex;
          justify-content: center;
          .content{
              margin-top:15px;
              width:87%;
              height:150px;
              .img{
                  width:100%;
                  height:50px;
                  display: flex;
                  justify-content: center;
                  
                  img{
                      width:40px;
                      height:40px;
                  }
              }
              p{
                  width:100%;
                  height:26.4px;
                  display: flex;
                  justify-content: center;
              }
              p:nth-of-type(1){
                   font-size:20px;
                  color:#3cc144;
              }
              p:nth-of-type(2){
                  margin-top:10px;
                  height:32.4px;
                  color: silver;
                  font-size:13px;
              }
              .btn{
                  width:120%;
                  margin-left:-10%;
                  height:40px;
                  margin-top:12px;
                  border-top: 1px solid #f4f4f4;
                  display: flex;
                  justify-content: center;
                  button{
                        border: none;
                        width: 50%;
                        background: transparent;
                        font-size: 14px;
                        line-height: 40px;
                        padding: 0;
                        color:#3aacff;
                  }
              }
          }
      }
  }
</style>