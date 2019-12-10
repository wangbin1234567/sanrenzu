
<template>
    <div class="series_wrap">

        <header class="series_wrap_header">
<<<<<<< HEAD
            <p @click="seriescolor">颜色<span></span></p>
=======
            <p @click="seriescolor">颜色</p>
>>>>>>> jyh
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
<<<<<<< HEAD
        let SerialID=this.$route.query.SerialID
=======
        let SerialID=localStorage.getItem("id")
>>>>>>> jyh
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
<<<<<<< HEAD
    background: #eee;
=======
    background: #f4f4f4;
>>>>>>> jyh
}
.series_wrap_header{
    width: 100%;
    height: 40px;
    display: flex;
    background: #ffffff;
<<<<<<< HEAD
    p{
        flex: 5;
        font-size: 16px;
        text-align: center;
        line-height: 40px;
    }
=======
    color: #454545;
    align-items: center;
    margin-bottom: 8px;
    p{
        flex: 5;
        font-size: 14px;
        text-align: center;
    }
    p:nth-child(2){
       border-left: 1px solid #ececec;
    }
    p:after {
    content: "";
    display: inline-block;
    border-top: 2px solid #ccc;
    border-right: 2px solid #ccc;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
    margin-left: 10px;
    vertical-align: 5%;
    padding: 8px 8px 0 0;
}
>>>>>>> jyh
}
.main_series{
    flex: 1;
    overflow: auto;
<<<<<<< HEAD
}
// .magnify_img{
//     width: 100%;
//     height: 100%;
//     position: absolute;
//     top: 0;
//     left: 0;
//     background: red;
// }
=======
    background: #fff;
}
>>>>>>> jyh
</style>