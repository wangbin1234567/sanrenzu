<template>
    <div class="list-box">
          <div class="list-item" v-for="(item,index) in list" :key="index">
               <div class="item-content">
                   <p>{{item.exhaust_str}}/{{item.max_power_str}}{{item.inhale_type}}</p>
                     <div class="item-text">
                           <li  >{{item.market_attribute.year}}款{{item.car_name}}</li>
                           <li>{{item.horse_power}}马力{{item.gear_num}}档{{item.trans_type}}</li>
                            <li><span>指导价{{item.market_attribute.dealer_price_max}}</span><span>{{item.market_attribute.dealer_price_min}}起</span></li>
                          <div class="item-btn">
                             <button>询问底价</button>
                         </div>      
                     </div>                                   
               </div>
          </div>        
    </div>
</template>
<script>
export default {
    props:["list"],
    components:{

    },
    data(){
        return {
          
        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">

 .list-box .list-item{
     width:100%;
     height:160px;
     .item-content{
         width:100%;
         height:25px;
        p{
            width:100%;
            height:100%;
            color:#999;
             font-size: 12px;
             padding-left:10px;
             display: flex;
             align-items: center;
        }
     }
      .item-text{
         width:100%;
         height:125px;
         background:#fff;
         li{
             width:100%;
            
             display: flex;
             align-items: center;
             padding-left:14px;
         }
         li:nth-of-type(1){
              font-size:17px;
              height:36px;
         }
          li:nth-of-type(2){
              font-size: 13px;
              height:16px;
              color:#c4c4c4;
         }
         li:nth-of-type(3){
             height:25px;
            display: flex;
            justify-content: flex-end;
            span{
              
                margin-right:10px;
            }
            span:nth-of-type(1){
                color:#c4c4c4;
                font-size: 14px;
            }
             span:nth-of-type(2){
                 font-size: 18px;
                color:red;
            }
         }
         .item-btn{
             width:100%;
             height:41px;
             border-top:1px solid #c5c5c5;
             button{
                 width:100%;
                 height:100%;
                 outline: none;
                 border:none;
                 background:#fff;
                 color:#00afff;
                 font-size:16px;
             }
         }
     }    
 }
</style>