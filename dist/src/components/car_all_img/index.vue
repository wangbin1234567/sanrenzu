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
            let SerialID=this.$route.query.SerialID
            let Page=1
            let PageSize=30
            this.getMasterDataList({SerialID,Id,Page,PageSize})
        },
<<<<<<< HEAD
        // touchstart(e){
        //     console.log('this-------------------',this)
        //     console.log("touchstart------------",e)
        // },
        // touchmove(e){
        //      console.log("touchmove------------",e)
        // },
        // touchend(e){
        //      console.log("touchend------------",e)
        // }
=======
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
>>>>>>> jyh
    }
}
</script>

<style lang="scss" scoped>
.cur_uls{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    position: relative;
<<<<<<< HEAD
    li{
        width: 33.3%;
        height: 123px;
        padding: 2px 2px;
=======
    position: absolute;
    top: 0;
    left: 0;
    background: #f4f4f4;
    li{
        width: 123px;
        height: 123px;
         margin: 0 2.3px 2.3px 0;
>>>>>>> jyh
        img{
            width: 100%;
            height: 100%;
            background-size: cover  
        }
    }
<<<<<<< HEAD
=======
     li:nth-child(3n+3) {
    margin-right: 0;
}
>>>>>>> jyh
}
</style>