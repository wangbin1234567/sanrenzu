
<template>
    <div class="Citylist">
        <div class="Citylist_left">
            <h4>省市</h4>
            <li v-for="(item,index) in cityData" :key="index" @click="revealCity(item.CityID)">
                {{item.CityName}}
            </li>
        </div>
        <div class="Citylist_right" v-if="cityJudgeFals">
            <transition name="City-cartoonPeer">
                <div class="Citylist_right-cont" v-if="cityJudgeFals">
                    <li v-for="(cityitem,index) in provinceidData" :key="index" @click="siteitem(cityitem.CityName)">{{cityitem.CityName}}</li>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions} from "vuex"
export default {
    methods:{
        ...mapMutations({
            falg:'site/falg',
            cityJudge:'site/cityJudge',
            getCityName:'site/getCityName'
        }),
        ...mapActions({
            getMasterStairSite:'site/getMasterStairSite'
        }),
        revealCity(CityID){
            this.cityJudge()
            this.getMasterStairSite(CityID)  
        },
        siteitem(CityName){
            console.log(CityName)
            this.getCityName(CityName)
            this.falg()
        }
    },
    computed:{
        ...mapState({
            cityData:state=>state.stair.cityData,
            provinceidData:state=>state.site.provinceidData,
            cityJudgeFals:state=>state.site.cityJudgeFals
        })
    },
}
</script>

<style lang="scss" scoped>
.Citylist{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    font-size: 16px;
    z-index: 210;
    background: #ffffff;
    overflow-y: scroll;
    li{
        height: 40px;
        margin-left: 5px;
        border-bottom: 1px solid #eee;
        line-height: 40px;
        padding-left: 10px;
    }
}
.Citylist_left{
    width: 100%;
    height: 100%;
    overflow-y: scroll;
}
.Citylist_right{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    background: rgba(0, 0, 0, .2)
}
.Citylist_right-cont{
    width: 75%;
    height: 100%;
     overflow-y: scroll;
    top:0;
    right: 0;
    position: absolute;
    background:#ffffff;
}
.City-cartoonPeer-enter-active {
  transition: all .3s ease;
}
.City-cartoonPeer-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.City-cartoonPeer-enter, .City-cartoonPeer-leave-active {
transform: translateX(65%)
}
</style>