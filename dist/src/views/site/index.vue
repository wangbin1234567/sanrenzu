<template>
    <div class="wrap_quotation">
        <div class="main">
            <p class="ps_city">省市</p>
        <div class="wrap_quotation_left">
            <CityListLeft v-for="(item,index) in cityData" :key="index" :item="item" @revealCitys="revealCitys"/>
        </div>
        <div class="wrap_quotation_right" v-if="flag" @click="removelist">
            <div class="left">

            </div>
            <div class="right">
                <CityListRight v-for="(item,index) in provinceidData" :key="index" :item="item" @siteitemlist="siteitemlist"/>
            </div>
        </div>
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
            console.log(CityName)
            
             this.$router.push({path:"/quotation",query:{CityName}})
            // this.$router.push(`/quotation?CityName=${CityName}`)
        },
        removelist(){
            this.flag=false
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
.wrap_quotation{
    width: 100%;
    height: 100%;
    display: flex;
    overflow: auto;
    flex-direction: column;
}
.main{
    flex: 1;
    overflow: auto;
}
.ps_city{
    width: 100%;
    height: 20px;
    background: #eee;
}
.wrap_quotation_left{
    width: 100%;
    overflow: auto;
    height: 100%;
    position: relative;
    top: 0;
}
.wrap_quotation_right{
    position: absolute;
    width: 100%;
   height: 100%;
    top: 0;
    right: 0;
    display: flex;
    // height: 100%;

}
.left{
    width: 25%;
    overflow: auto;
     background: rgba(0, 0, 0, .6);
     height: 100%;
}
.right{
    width: 75%;
    overflow: auto;
    background: #ffffff;
    height: 100%;
}
</style>