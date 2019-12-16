<template>
    <li @click="siteitem(item)">
        {{item.CityName}}
    </li>
</template>

<script>
import { mapMutations, mapActions } from "vuex"
export default {
    props:["item"],
    methods:{
          ...mapMutations({
           setAddress: 'city/setAddress',
           setCityId: 'city/setCityId'
          }),
            ...mapActions({ 
                 getDealer: 'dealer/getDealer'
        }),
        siteitem(item){
           this.setAddress(item.CityName)
           this.setCityId(item.CityID)
            let carId=localStorage.getItem("2017.official.curId") || ""
            //  let cityId=localStorage.getItem("cityId") || ""
            let cityId=item.CityID
             this.getDealer({carId,cityId})
           this.$emit("siteitemlist")
        }
    }
}   
</script>

<style lang="scss" scoped>
li{
    width: 100%;
    line-height: 40px;
    padding: 0 0 0 15px;
    margin: 0 0 0 5px;
    border-bottom: 1px solid #eee;
    font-size: 14px;
}
li:last-child {
   border-bottom: none;  
}
</style>