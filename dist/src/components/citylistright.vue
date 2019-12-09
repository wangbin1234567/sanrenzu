<template>
    <li @click="siteitem(item)">
        {{item.CityName}}
    </li>
</template>

<script>
import { mapMutations } from "vuex"
export default {
    props:["item"],
    methods:{
          ...mapMutations({
           setAddress: 'city/setAddress',
           setCityId: 'city/setCityId'
          }),
        siteitem(item){
           this.setAddress(item.CityName)
           this.setCityId(item.CityID)
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