
<template>
    <div class="series_wrap">

        <header class="series_wrap_header">
            <p @click="seriescolor">颜色<span></span></p>
            <p @click="seriestype">车款</p>
        </header>
        <div class="main_series">
            <SeriesImg v-for="(item,index) in seriesDate" :key="index" :item="item"/>
        </div>
       <EnlargementImg v-if="EnlargementImgfalg"/>
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
     
    methods:{
        ...mapActions({
            getMasterSeries:'series/getMasterSeries'
        }),
        seriescolor(){
            this.$router.push("/color")
        },
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
        
        let SerialID=this.$route.query.SerialID
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
    background: #eee;
}
.series_wrap_header{
    width: 100%;
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

</style>