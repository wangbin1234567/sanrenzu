<<<<<<< HEAD


<template>
  
    <div class="magnify_img">
        <van-swipe @change="onChange" :duration="9000" :initial-swipe="seriesIndex-1">
            <!-- :loop="false" -->
            <van-swipe-item v-for="(item,index) in curData.List" :key="index">
                <li>
                    <img v-lazy="item.Url" alt="" class="swiper_img">
=======
<template>
    <div class="magnify_img">
        <van-swipe @change="onChange" :duration="9000" :initial-swipe="seriesIndex-1" :loop='false'>
            <van-swipe-item v-for="(item,index) in curData.List" :key="index">
                <li @click="removeFalg">
                    <img v-lazy="curData.List[index].Url" alt="" class="swiper_img">
>>>>>>> 1092eb8a5613ffcd7c666b7acfc365384bbe68b3
                </li>
            </van-swipe-item>
            <div class="custom-indicator" slot="indicator">
                {{ seriesIndex}}/{{curData.Count}}
            </div>
            <div class="magnify_img_footer" slot="indicator">
<<<<<<< HEAD
                <button>
                    询最低价
                </button>
            </div>
            <!-- http://img2.bitautoimg.com/autoalbum/files/20180814/704/201808141106016174346_6189017_8.jpg -->
            <!-- http://img3.bitautoimg.com/autoalbum/files/20171031/160/20171031162221222112124_5690266_%7B0%7D.jpg-->
            <!-- <div class="custom-indicator" slot="indicator">
                {{ current + 1 }}/4
            </div> -->
        </van-swipe>
    </div>
</template>

<script>

import { Swipe, SwipeItem } from 'vant';
import {mapState,mapMutations,mapActions} from "vuex"

// Vue.use(Swipe).use(SwipeItem);
=======
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
>>>>>>> 1092eb8a5613ffcd7c666b7acfc365384bbe68b3
export default {
    components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]:SwipeItem
<<<<<<< HEAD
   
    },
    watch:{
        seriesIndex(){
            if(this.seriesIndex>25){
                let SerialID=this.$route.query.SerialID
                let Id=this.curData.Id
                this.getMasterDataList({SerialID,Id,Page:1,PageSize:30})
                console.log("冀志民")
=======
    },
    watch:{
        seriesIndex(){
            if(this.seriesIndex%25===0){
                let SerialID=this.$route.query.SerialID
                let Id=this.curData.ID
                let Page=Math.floor(this.seriesIndex/25)+1
                this.getMasterDataListAdd({SerialID,Id,Page,PageSize:30})
>>>>>>> 1092eb8a5613ffcd7c666b7acfc365384bbe68b3
            }
        }
    },
    methods: {
        ...mapMutations({
            setSeries:'series/setSeries'
        }),
        ...mapActions({
<<<<<<< HEAD
            getMasterDataList:'carlist/getMasterDataList'
=======
            getMasterDataListAdd:'carlist/getMasterDataListAdd'
>>>>>>> 1092eb8a5613ffcd7c666b7acfc365384bbe68b3
        }),
        onChange(index) {
            index+=1
            this.setSeries(index)
        },
<<<<<<< HEAD
     
=======
        clkButton(){
            this.$router.history.push("/quotation")
        },
         removeFalg(){
             this.seriesfalg()
        }
>>>>>>> 1092eb8a5613ffcd7c666b7acfc365384bbe68b3
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
<<<<<<< HEAD
=======
    z-index: 100;
>>>>>>> 1092eb8a5613ffcd7c666b7acfc365384bbe68b3
    left: 0;
    background: #000;
}
.van-swipe{
    height: 100%;
    width: 100%;
<<<<<<< HEAD
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
=======
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
>>>>>>> 1092eb8a5613ffcd7c666b7acfc365384bbe68b3
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
<<<<<<< HEAD

// <van-swipe @change="onChange">
//   <van-swipe-item>1</van-swipe-item>
//   <van-swipe-item>2</van-swipe-item>
//   <van-swipe-item>3</van-swipe-item>
//   <van-swipe-item>4</van-swipe-item>

//   <div class="custom-indicator" slot="indicator">
//     {{ current + 1 }}/4
//   </div>
// </van-swipe>
// export default {
//   data() {
//     return {
//       current: 0
//     }
//   },
//   methods: {
//     onChange(index) {
//       this.current = index;
//     }
//   }
// }
=======
>>>>>>> 1092eb8a5613ffcd7c666b7acfc365384bbe68b3
</style>
