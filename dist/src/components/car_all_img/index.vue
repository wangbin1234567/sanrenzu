<template>
    <Myscroll :data="SerialAllData">
        <ul class="cur_uls">
            <li v-for="(item,index) in SerialAllData.List" :key="index" @click="addItemSwipr(index)">
                <span v-lazy:background-image="item.Url.replace('{0}',item.LowSize)"></span>
                
                 <!-- src="" :style="{backgroundImage:'url('++')'}" -->
            </li>
        </ul>
    </Myscroll>
</template>
<script>

import {mapActions, mapState, mapMutations} from "vuex"
import Myscroll from "../Myscroll/index.vue"
export default {
    components:{
        Myscroll
    },
    methods:{
        ...mapActions({
            getMasterDataList:'series/getMasterDataList'
        }),
        ...mapMutations({
            
            addItemSwiprShou:'series/addItemSwiprShou'
        }),
        addItemSwipr(index){
            this.$emit("update:swiperShou",true)
            this.addItemSwiprShou(index)
            
        }
    },
    mounted(){
        this.getMasterDataList()
    },
    computed:{
        ...mapState({
            SerialAllData:state=>state.series.SerialAllData
        })
    }
}
</script>

<style lang="scss" scoped>
.cur_uls{
    flex: 1;
    overflow-y: scroll
}
    li{
        float: left;
        margin-right: .06rem;
        margin-bottom: .06rem;
        width: 121px;
        height: 121px;
        padding: 0;
        
        span{
            width: 100%;
            display: inline-block;
            height: 100%;
            background-size: cover  
        }
    }
</style>