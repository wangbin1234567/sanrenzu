<template>
    <div class="select-city">
        <div class="province">
            <div class="location">
              <p class="ps_auto">自动定位</p>
              <p class="address">北京</p>
            </div>
            <div class="list">
             <p class="ps_city">省市</p>
             <ul>
             <CityListLeft v-for="(item,index) in cityData" :key="index" :item="item" @revealCitys="revealCitys"/>
             </ul>
            </div>
         </div>
            <div class="city" :class="{active: flag}" @click="removelist">
                <ul id="cityList">
                <CityListRight v-for="(item,index) in provinceidData" :key="index" :item="item" @siteitemlist="siteitemlist"/>
                </ul>
            </div>  
    </div>
</template>

<script>
import CityListLeft from "@/components/citylistleft.vue"
import CityListRight from "@/components/citylistright.vue"
import axios from "axios"
export default {
    components:{
         CityListLeft,
         CityListRight,
        
    },
    data(){
        return {
            cityData:[],
            provinceidData:[],
             flag:false
        }
    },
    methods:{
        revealCitys(CityID){
            this.flag=true
            axios.get("https://baojia.chelun.com/v1-city-alllist.html",{params:{provinceid:CityID}}).then(res=>{
            if(res.data.code===1){
                this.provinceidData=res.data.data
            }
            
        })
        },
        siteitemlist(CityName){
            this.$router.push({
                name: "quotation",
                params:{
                    CityName
                }
            })
        },
        removelist(){
            this.flag=!this.flag
        }
    },
    mounted(){
        axios.get("https://baojia.chelun.com/v1-city-alllist.html").then(res=>{
            if(res.data.code===1){
                this.cityData=res.data.data
            }
        })
    }
}
</script>

<style lang="scss" scoped>
.select-city.active{
  transform: translateZ(0)
}
.select-city{
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
    background: #fff;
    // transition: transform .2s ease;
    // transform: translate3d(0,100%,0);
}
.province{
    height: 100%;
    overflow-y: scroll;
}
.location p:first-child ,.ps_city{
    line-height: 20px;
    font-size: 12px;
    padding-left: 10px;
    background: #f4f4f4;
}
.location p:nth-child(2) {
    padding-left: 20px;
    font-size: 14px;
    line-height: 40px;
    background: #fff;
}
.select-city .city ul {
    height: 100%;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    background: #fff;
    transform: translate3d(100%,0,0);
    transition: transform .2s ease;
}
.select-city .city {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 101;
    background: rgba(0,0,0,.6);
    visibility: hidden;
}
.select-city .city.active {
    visibility: visible;
}
.select-city .city.active ul {
    transform: translate3d(30%,0,0);
}
</style>