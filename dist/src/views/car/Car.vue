<template>

    <div class="car">
        <div class="content">
             <div class="img">
             <img :src="CoverPhoto" alt="">
             <span>{{pic_group_count}}张图片</span>
         </div>
         <div class="info">
             <p>{{dealer_price}}</p>
             <p>指导价{{official_refer_price}}</p>
             <div class="action ">
                 <button @click="chelun(SerialID)">{{BottomEntranceTitle}}</button>
             </div>
         </div>       
      </div>
       <div class="c-type">
           <span>全部</span>
           <span v-for="(item,index) in year" :key="index">
               {{item}}
           </span>
       </div>
        <List :list="list" :year="year" :dataList="dataList"></List>
        <div class="inquiry-btn" @click="chelun(SerialID)">
            <li>
                {{BottomEntranceTitle}}               
            </li>    
            <li>
                 {{BottomEntranceSubTitle}}
            </li>       
        </div>
    </div>

</template>
<script>


import axios from "axios"
import List from "../../components/list.vue"
export default {
    props:{

    },
    components:{
        List
    },
    data(){
        return {
           SerialID:this.$route.query.SerialID,
          CoverPhoto:"",//图片
          pic_group_count:"",//个数
          dealer_price:"",//价格
          official_refer_price:"",//指导价
          BottomEntranceTitle:"",//询问底价
          list:"",
          year:"",//年份
        //   guide_price:"",//指导价格
        //   reality_price:"",//实际价格
          BottomEntranceSubTitle:"",
          dataList:"",
        }
    },
    computed:{

    },
    methods:{
        chelun(SerialID){
            this.$router.push({
                path:"/quotation",  
                query:{
                    SerialID:SerialID
                }            
            })
        }
    },
    created(){
         axios.get(`https://baojia.chelun.com/v2-car-getInfoAndListById.html?SerialID=2593`).then(res=>{
             console.log("res----------------",res)
            window.console.log(res.data.data.list)
             this.pic_group_count=res.data.data.pic_group_count
             this.CoverPhoto=res.data.data.CoverPhoto
             this.dealer_price=res.data.data.market_attribute.dealer_price
             this.official_refer_price=res.data.data.market_attribute.official_refer_price
             this.BottomEntranceTitle=res.data.data.BottomEntranceTitle
             this.BottomEntranceSubTitle=res.data.data.BottomEntranceSubTitle
             this.list=res.data.data.list
             //获取年份,指导价,实际价格
             let arr=[];//存放年份
                //  guide=[],//存放指导价
                //  reality=[];//存放实际价格
            this.list.forEach(item => {
                 arr.push(item.market_attribute.year)
                //  guide.push(item.market_attribute.dealer_price_max)
                //  reality.push(item.market_attribute.dealer_price_min)
                 this.year=Array.from(new Set(arr))
                //  this.guide_price=Array.from(new Set(guide))
                //  console.log(this.guide_price)
                //  this.reality_price=Array.from(new Set(reality))
             });   
              this.dataList=this.list.filter(item=>{
                 return item.market_attribute.year==2019
             })  
            
                    
         })
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
.car{
    width:100%;
    height:100%;
    background:#c4c4c4;
     overflow-x: hidden;
    overflow-y: scroll;
   
}

$font-size:37.5px;
@function pxTorem($px) {
    @return $px/$font-size*1rem;
}
.inquiry-btn{
    position: absolute;
    bottom:0;
    width:100%;
    height:pxTorem(110px);
    background:#09f;
    li{
      
        width:100%;
        height:pxTorem(55px);
        color:#fff;
    }
    li:nth-of-type(1){
        font-size:pxTorem(30px);
          display: flex;
        justify-content: center;
        align-items: flex-end;
    }
     li:nth-of-type(2){
        font-size:pxTorem(20px);
          display: flex;
        justify-content: center;

    }
}
.content{
    width:100%;
    height:pxTorem(480px);
    background: #fff;  
    .img{
        width:100%;
        height:pxTorem(330px);
        position: relative;
        overflow: hidden;
        img{
            width: 100%;
            top: 50%;
            transform: translateY(-50%);
            position: absolute;
        }
        span{
            background:rgba(0,0,0,.5);
            color:#fff;
            font-size:pxTorem(24px);
            padding:0 pxTorem(10px);
            border-radius:pxTorem(16px) ;
            position: absolute;
            right:pxTorem(34px);
            bottom:pxTorem(32px);
        }
    }
    .info{
        width:100%;
        height:pxTorem(50px);
        position: relative;
        margin:pxTorem(35px) 0;
        p{
            padding-left:pxTorem(14px);
        }
        p:nth-of-type(1){
            font-size:pxTorem(36px);
            color:red;
        }
        p:nth-of-type(2){
            font-size:pxTorem(28px);
            color:#c5c5c5;
        }
        .action{
            width:pxTorem(370px);
            height:pxTorem(70px);
            margin-right:pxTorem(10px);
            position: absolute;
            right:0;
            bottom:pxTorem(-22px);
            button{
                width:100%;
                height:100%;
                outline: none;
                border:none;
                border-radius: pxTorem(14px);
                background:#00afff;
                color:#fff;
            }
        }
    }
}
.c-type{
    width:100%;
    height:pxTorem(92px);
    margin:pxTorem(14px) 0;
    background:#fff;
    display: flex;
    align-items: center;
    span{
        font-size: pxTorem(32px);
        margin:0 pxTorem(20px);
    }
}

</style>