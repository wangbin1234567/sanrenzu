<template>
    <ul class="cur_uls" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
        <li v-for="(item,index) in curData.List" :key="index">
            <img v-lazy="item.Url" alt="" @click="adds(curData.ID,index)">
        </li>
    </ul>
</template>
<script>
import {mapState, mapMutations,mapActions} from "vuex"
export default {
    computed:{
        ...mapState({
            curData:state=>state.carlist.curData
        })
    },
    methods:{
        ...mapActions({
            getMasterDataList:'carlist/getMasterDataList'
        }),
        ...mapMutations({
            imgFalg:"series/imgFalg",
        }),
        adds(Id,key){
            this.imgFalg(key)
            let SerialID=this.$route.query.SerialID||localStorage.getItem("id")
            let Page=1
            let PageSize=30
            this.getMasterDataList({SerialID,Id,Page,PageSize})
        },
        touchstart(e){
            console.log('this-------------------',this)
            console.log("touchstart------------",e)
        },
        touchmove(e){
             console.log("touchmove------------",e)
        },
        touchend(e){
             console.log("touchend------------",e)
        }
    }
}
</script>

<style lang="scss" scoped>
.cur_uls{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    li{
        width: 33.3%;
        height: 123px;
        padding: 2px 2px;
        img{
            width: 100%;
            height: 100%;
            background-size: cover  
        }
    }
}
</style>