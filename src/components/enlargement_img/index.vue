<template>
    <div class="magnify_img">
        <van-swipe @change="onChange" :duration="9000" :initial-swipe="seriesIndex-1" :loop='false'>
            <van-swipe-item v-for="(item,index) in curData.List" :key="index">
                <li @click="removeFalg">
                    <img v-lazy="curData.List[index].Url" alt="" class="swiper_img">
                </li>
            </van-swipe-item>
            <div class="custom-indicator" slot="indicator">
                {{ seriesIndex}}/{{curData.Count}}
            </div>
            <div class="magnify_img_footer" slot="indicator">
                <button @click="clkButton">
                    询最低价
                </button>
            </div>
        </van-swipe>
    </div>
</template>
<script>
import { Swipe, SwipeItem } from 'vant';
import {mapState, mapMutations, mapActions} from "vuex"
export default {
    components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]:SwipeItem
    },
    watch:{
        seriesIndex(){
            if(this.seriesIndex%25===0){
                let SerialID=localStorage.getItem("id")
                let Id=this.curData.ID
                let Page=Math.floor(this.seriesIndex/25)+1
                this.getMasterDataListAdd({SerialID,Id,Page,PageSize:30})
            }
        }
    },
    methods: {
        ...mapMutations({
            setSeries:'series/setSeries'
        }),
        ...mapActions({
            getMasterDataListAdd:'carlist/getMasterDataListAdd'
        }),
        onChange(index) {
            index+=1
            this.setSeries(index)
        },
        clkButton(){
            this.$router.history.push("/quotation")
        },
         removeFalg(){
             this.seriesfalg()
        }
   },
    computed:{
        ...mapState({
            curData:state=>state.carlist.curData,
            seriesIndex:state=>state.series.seriesIndex
        })
    }
}
</script>

<style lang="scss" scoped>
.magnify_img{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 100;
    left: 0;
    background: #000;
}
.van-swipe{
    height: 100%;
    width: 100%;
        li{
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
            .swiper_img{
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
            }
        }
}
.custom-indicator{
    color: #ffffff;
    position: absolute;
    bottom: 10px;
    left: 50%;
    z-index: 99;
    margin-left: -2%;
}
.magnify_img_footer{
    position: absolute;
    bottom: 4px;
    right: 4px;
    z-index: 99;
    button{
        border: none;
        width: 63px;
        height: 24px;
        background: #3aacff;
        color: #ffffff;
        font-size: 12px;
    }
}
</style>
