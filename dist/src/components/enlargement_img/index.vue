<template>
    <div class="magnify_img">
        <van-swipe @change="onChange" :duration="9000" :initial-swipe="seriesIndex-1">
            <van-swipe-item v-for="(item,index) in curData.List" :key="index">
                <li>
                    <img v-lazy="item.Url" alt="" class="swiper_img">
                </li>
            </van-swipe-item>
            <div class="custom-indicator" slot="indicator">
                {{ seriesIndex}}/{{curData.Count}}
            </div>
            <div class="magnify_img_footer" slot="indicator">
                <button>
                    询最低价
                </button>
            </div>
        </van-swipe>
    </div>
</template>
<script>
import { Swipe, SwipeItem } from 'vant';
import {mapState, mapMutations, mapActions} from "vuex"

// Vue.use(Swipe).use(SwipeItem);
export default {
    components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]:SwipeItem
   
    },
    watch:{
        seriesIndex(){
            // console.log(this.curData.ID)
            if(this.seriesIndex==25){
                let SerialID=this.$route.query.SerialID
                let Id=this.curData.ID
                
                this.getMasterDataListAdd({SerialID,Id,Page:1,PageSize:30})
                console.log("冀志民")
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
    color: #ffffff;
    position: absolute;
    bottom: 10px;
    right:5%;
    z-index: 99;
    margin-left: -2%;
    button{
        border: none;
        width: 63px;
        height: 24px;
        background: #3aacff;
        color: #ffffff;
    }
}
</style>
