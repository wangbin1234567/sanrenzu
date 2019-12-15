
<template>
    <div class="series_wrap">

        <header class="series_wrap_header">
            <p @click="seriescolor">颜色<span></span></p>
            <p @click="seriestype">车款</p>
        </header>
        <div class="main_series">
            <SeriesImg v-for="(item,index) in seriesDate" :key="index" :item="item" :index="index" :serialShow.sync="serialShow" :swiperShou.sync="swiperShou"/>
        </div>
        <EnlargementImg v-if="swiperShou" :swiperShou.sync="swiperShou"/>
       <div class="main_content" v-if="serialShow">
            <carAllImg :swiperShou.sync="swiperShou"/>
       </div>
          
    </div>
</template>

<script>

import {mapActions, mapState, mapMutations} from "vuex"
//车分类的页面
import SeriesImg from "@/components/series_img/index.vue"

import EnlargementImg from "@/components/enlargement_img/index.vue"
//汽车图片展示的页面
import carAllImg from "@/components/car_all_img/index.vue"
export default {
    components:{
        SeriesImg,
        EnlargementImg,
        carAllImg
    },
     data(){
         return {
             SerialID:this.$route.query.SerialID||localStorage.getItem("id"),
             swiperShou:false,
             serialShow:false
         }
     },
    methods:{
        ...mapActions({
            getMasterSeries:'series/getMasterSeries',
            
        }),
        ...mapMutations({
            setSeriesId:'series/setSeriesId'
        }),
        seriescolor(){
            //点击跳转到颜色的页面
            this.$router.push({path:"/color",query:{SerialID:this.$route.query.SerialID}})
        },
        seriestype(){
             //点击跳转到车款的页面
            this.$router.push("/type")
        }
    },
    computed:{
        ...mapState({
            //汽车分类的数据
            seriesDate:state=>state.series.seriesDate,
            // 控制汽车图片展示的组件
        })
    },
    mounted(){
        this.setSeriesId(this.SerialID)
        this.getMasterSeries(this.SerialID)
    }
}
</script>
<style lang="scss" scoped>
.series_wrap{
    // overflow-y: auto;
    top: 0;
    background: red;
    width: 100%;
    height: 100%;
}
.series_wrap_header{
    height: 40px;
    display: flex;
    background: #ffffff;
    p{
        flex: 5;
        font-size: 16px;
        text-align: center;
        line-height: 40px;
    }
}
.main_series{
    flex: 1;
    overflow: auto;
}
.main_content{
    height: 100%;
    width: 100%;
    position:fixed;
    z-index: 2000;
    top: 0;
    background: #ffffff;
    overflow: hidden;
}
</style>