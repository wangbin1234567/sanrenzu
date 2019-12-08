<template>
    <li @click="siteitem(item.CityName)">
        {{item.CityName}}
    </li>
</template>

<script>
export default {
    props:["item"],
    methods:{
        siteitem(CityName){
            this.$emit("siteitemlist",CityName)
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