<template>
    <div class="car">
        <div class="content">
             <div class="img">
             <img :src="BottomEntranceLink" alt="">
             <span>{{pic_group_count}}张图片</span>
         </div>
         <div class="info">
             <p>{{dealer_price}}</p>
             <p>指导价{{official_refer_price}}</p>
             <div class="action active flex-row">
                 <button data-hover="hover">询问底价</button>
             </div>
         </div>
      </div>
    </div>
</template>
<script>
import axios from "axios"
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
          id:2593,
          BottomEntranceLink:"",//图片
          pic_group_count:"",//个数
          dealer_price:"",//价格
          official_refer_price:""//指导价
        }
    },
    computed:{

    },
    methods:{

    },
    created(){
         axios.get(`https://baojia.chelun.com/v2-car-getInfoAndListById.html?SerialID=2593`).then(res=>{
          
            this.pic_group_count=res.data.data.pic_group_count
             this.BottomEntranceLink=res.data.data.BottomEntranceLink
             this.dealer_price=res.data.data.market_attribute.dealer_price
             this.official_refer_price=res.data.data.market_attribute.official_refer_price
         })
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">

.cars{
    width:100%;
    height:100%;
    background:#ccc;
    overflow-y: scroll;
}
$font-size:37.5px;
@function pxTorem($px) {
    @return $px/$font-size*1rem;
}
.content{
    width:100%;
    height:pxTorem(260px);
    background: #ffff;
    .img{
        width:100%;
        height:pxTorem(175px);
        position: relative;
        img{
            width:100%;
            height:100%;
        }
        span{
            background:rgba(0,0,0,.5);
            color:#fff;
            font-size:pxTorem(10px);
            padding:0 pxTorem(5px);
            border-radius:pxTorem(4px) ;
            position: absolute;
            right:pxTorem(17px);
            bottom:pxTorem(16px);
        }
    }
    .info{
        width:100%;
        height:pxTorem(50px);
        position: relative;
        margin-top:pxTorem(30px);
        p{
            padding-left:pxTorem(14px);
        }
        p:nth-of-type(1){
            font-size:pxTorem(28px);
            color:red;
        }
        p:nth-of-type(2){
            font-size:pxTorem(18px);
            color:#c5c5c5;
        }
        .action{
            width:pxTorem(350px);
            height:pxTorem(74px);
            margin-right:pxTorem(10px);
            position: absolute;
            right:0;
            bottom:pxTorem(-8px);
            button{
                width:100%;
                height:100%;
                outline: none;
                border:none;
                border-radius: pxTorem(10px);
                background:#00afff;
                color:#fff;
            }
        }
    }
}

</style>