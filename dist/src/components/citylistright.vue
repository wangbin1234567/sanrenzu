<template>
    <li @click="siteitem(item)">
        {{item.CityName}}
    </li>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'

export default {
    props:["item"],
    methods:{
        ...mapActions({
            getDealer: 'dealer/getDealer',
        }),
        ...mapMutations({
            getListAddress: 'city/getListAddress'
        }),
        siteitem(item){
            let carId = localStorage.getItem('2017.official.curId')
            let cityId = item.CityID;
            // let cityName = item.CityName;
            this.$emit("siteitemlist",item.CityName),
            this.getListAddress(item)
            this.getDealer({cityId,carId})
            console.log(item,"11111111111111111");
            
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