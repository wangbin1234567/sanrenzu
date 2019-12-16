
<template>
    <div class="series_wrap">
        <!-- 图片分类 -->
        <header class="series_wrap_header">
            <p @click="seriescolor"><span>{{fn(colorName)}}</span></p>
            <p @click="seriestype"><span><em>{{fn1(carName)}}</em></span></p>
        </header>

        <!-- 根据颜色车款的不同渲染对应的图片列表 -->
        <div class="main_series">
            <SeriesImg v-for="(item,index) in seriesDate" :key="index" :item="item"/>
        </div>

         <!-- 轮播图展示 -->
       <EnlargementImg v-if="EnlargementImgfalg"/>

       <!-- 图片列表第一项显示对应的所有图片 -->
       <carAllImg v-if="carAllImg"/>
    </div>
</template>

<script>

import {mapActions,mapState} from "vuex"
import SeriesImg from "@/components/series_img/index.vue"
import EnlargementImg from "@/components/enlargement_img/index.vue"
import carAllImg from "@/components/car_all_img/index.vue"
export default {
    components:{
        SeriesImg,
        EnlargementImg,
        carAllImg
    },
    data(){
      return {
          colorName: localStorage.getItem("colorName"),
          carName: localStorage.getItem("carName")
      }
    },
    methods:{
        fn(colorName){
          return colorName?colorName:"颜色"
        },
        fn1(carName){
          return carName?carName:"车款"
        },
        ...mapActions({
            getMasterSeries:'series/getMasterSeries'
        }),
        //点击颜色跳转到选择颜色页面
        seriescolor(){
            this.$router.push("/color")
        },
        //点击车款跳转到选择车款页面
        seriestype(){
            this.$router.push("/type")
        }
    },
    
    computed:{
        ...mapState({
            seriesDate:state=>state.series.seriesDate,
            EnlargementImgfalg:state=>state.series.EnlargementImgfalg,
            carAllImg:state=>state.series.carAllImg
        })
    },
     mounted(){
        let SerialID=localStorage.getItem("id")
         this.getMasterSeries(SerialID)
    }
}
</script>

<style lang="scss" scoped>


.series_wrap{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #f4f4f4;
}
.series_wrap_header{
    width: 100%;
    height: 40px;
    display: flex;
    background: #ffffff;
    color: #454545;
    align-items: center;
    p{
        flex: 5;
        font-size: 14px;
        text-align: center;
    }
    p:nth-child(2){
       border-left: 1px solid #ececec;
       span{
    max-width: 130px;
    display: inline-block;
    vertical-align: middle;
    line-height: 1.25;
    font-size: 14px;
    em{
        text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    font-style: normal;
    }
       }
    }
    p:after {
    content: "";
    display: inline-block;
    border-top: 2px solid #ccc;
    border-right: 2px solid #ccc;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
    margin-left: 10px;
    vertical-align: 25%;
    padding: 8px 8px 0 0;
}
}
.main_series{
    flex: 1;
    overflow: auto;
    background: #fff;
    margin-top: 10px;
}
</style>