<template>
    <div class="magnify_img">

        <van-swipe indicator-color="white" :loop="false" @change="onChange" :initial-swipe="swiperIndex">
            <van-swipe-item v-for="(item,index) in SerialAllData.List" :key="index" @click="$emit('update:swiperShou',false)">
                 <li><img v-lazy="item.Url.replace('{0}',item.LowSize)" alt="" class="swiper_img"></li>
            </van-swipe-item>
            <div class="custom-indicator" slot="indicator">
                <span>{{ swiperIndex+1}}/{{SerialAllData.Count}}</span>
            </div>
            <div class="magnify_img_footer" slot="indicator">
                <button @click="clkButton">
                    询最低价
                </button>
            </div>
        </van-swipe>
        <!-- @click="$emit('updata:swiperShou',false) -->
    </div>
</template>
 <script>
import {mapState, mapMutations, mapActions} from "vuex"
export default {

    methods: {
        ...mapMutations({
            setSwiperIndex:'series/setSwiperIndex',
        }),
        ...mapActions({
            getMasterDataList:'series/getMasterDataList'
        }),
        onChange(index) {
            if(index%29==0){
                this.getMasterDataList()
            }
            this.setSwiperIndex(index)
        },
        clkButton(){
            this.$router.back("/quotation")
        },

   },
    computed:{
        ...mapState({
            SerialAllData:state=>state.series.SerialAllData,
            swiperIndex:state=>state.series.swiperIndex
        })
    }
}
</script>

<style lang="scss" scoped>
.magnify_img{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    z-index: 200;
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
