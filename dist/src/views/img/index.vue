
<template>
    <div class="series_wrap">
        <header class="series_wrap_header">
            <p @click="seriescolor">颜色<span></span></p>
            <p @click="seriestype">车款</p>
        </header>
        <div class="main_series">
            <SeriesImg v-for="(item,index) in seriesDate" :key="index" :item="item"/>
        </div>
        <div class="magnify_img" v-if="EnlargementImgfalg">
            <EnlargementImg/>
        </div>
    </div>
</template>

<script>
// http://baojia.chelun.com/v2-car-getCategoryImageList.html?SerialID=2593&ImageID=6&Page=1&PageSize=30&_1575373568483
import {mapActions,mapState} from "vuex"
import SeriesImg from "@/components/seriesimg.vue"
import EnlargementImg from "@/components/enlargementimg.vue"
// screenimg
export default {
    components:{
        SeriesImg,
        EnlargementImg
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
            EnlargementImgfalg:state=>state.series.EnlargementImgfalg
        })
    },
    mounted(){
        let SerialID=2593
        console.log(SerialID)
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
.magnify_img{
    width: 100%;
    height: 100%;
    position: relative;
    top: 0;
    left: 0;
    background: red;
}
</style>