<template>
    <div class="list-box">
          <div class="list-item" v-for="(item,index) in list" :key="index">
               <div class="item-content">
                   <p>{{item.exhaust_str}}/{{item.max_power_str}}{{item.inhale_type}}</p>
                     <div class="item-text">
                           <li v-for="(yearItem,yearIndex) in year" :key="yearIndex">{{yearItem}}款{{item.car_name}}</li>
                           <li>{{item.horse_power}}马力{{item.gear_num}}档{{item.trans_type}}</li>
                            <li  v-for="(dataItem,dataIndex) in dataList" :key="dataIndex"><span>指导价{{dataItem.market_attribute.dealer_price_max}}</span><span>{{dataItem.market_attribute.dealer_price_min}}起</span></li>
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
    props:["list","year","dataList"],
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
$font-size:37.5px;
@function pxTorem($px) {
    @return $px/$font-size*1rem;
}
 .list-box .list-item{
     width:100%;
     height:pxTorem(292px);
     .item-content{
         width:100%;
         height:pxTorem(30px);
        p{
            width:100%;
            height:100%;
             font-size: pxTorem(24px);
             padding-left:pxTorem(20px);
        }
     }
      .item-text{
         width:100%;
         height:pxTorem(262px);
         background:#fff;
         li{
             width:100%;
             height:pxTorem(60px);
             display: flex;
             align-items: center;
             padding-left:pxTorem(28px);
         }
         li:nth-of-type(1){
              font-size: pxTorem(34px);
         }
          li:nth-of-type(2){
              font-size: pxTorem(26px);
              color:#c4c4c4;
         }
         li:nth-of-type(3){
            display: flex;
            justify-content: flex-end;
            span{
                font-size: pxTorem(16px);
            }
         }
         .item-btn{
             width:100%;
             height:pxTorem(82px);
             border-top:pxTorem(2px) solid #c5c5c5;
             button{
                 width:100%;
                 height:100%;
                 outline: none;
                 border:none;
                 background:#fff;
                 color:#00afff;
             }
         }
     }
    
 }
</style>