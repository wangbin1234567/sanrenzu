<template>
    <ul class="cur_uls" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
        <li v-for="(item,index) in curData.List" :key="index">
            <img v-lazy="item.Url" alt="" @click="adds(curData.ID,index)">
        </li>
    </ul>
    <!-- <Scroll 
     ref="scroll"
      :data="value"
      :pullDownRefresh="pullDownRefreshObj"
      :pullUpLoad="pullUpLoadObj"
      @pullingDown="onPullingDown"
       @pullingUp="onPullingUp"
    >
       <ul>
           <div 
            :key="index" 
            :data-bg="item.Url.replace('{0}',item.LowSize)"
             @click="showSwiper(index)"
            v-for="(item, index) in value">               
           </div>
       </ul>
    </Scroll> -->
</template>
<script>
import {mapState,mapActions,mapMutations} from "vuex"
// import Scroll from "../better-scroll/scroll.vue"
// import CommonList from "../better-scroll/CommonList.vue"
export default {
    components:{
    //   Scroll,
    //   CommonList 
    },
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
    position: absolute;
    top: 0;
    left: 0;
    background: #f4f4f4;
    li{
        width: 123px;
        height: 123px;
         margin: 0 2.3px 2.3px 0;
        img{
            width: 100%;
            height: 100%;
            background-size: cover  
        }
    }
     li:nth-child(3n+3) {
    margin-right: 0;
}
}
</style>